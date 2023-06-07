import React, { useEffect, useState } from 'react';
import { FormikProvider, useFormik, Form } from 'formik';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-query';

import {
  CheckPagePermissions,
  ConfirmDialog,
  SettingsPageTitle,
  useAPIErrorHandler,
  useFetchClient,
  useNotification,
  useTracking,
} from '@strapi/helper-plugin';
import { Button, ContentLayout, HeaderLayout, Layout, Loader, Main } from '@strapi/design-system';
import { Check } from '@strapi/icons';

import { Stages } from './components/Stages';
import { reducer, initialState } from './reducer';
import { REDUX_NAMESPACE, DRAG_DROP_TYPES } from './constants';
import { useInjectReducer } from '../../../../../../admin/src/hooks/useInjectReducer';
import { useReviewWorkflows } from './hooks/useReviewWorkflows';
import { setWorkflows } from './actions';
import { getWorkflowValidationSchema } from './utils/getWorkflowValidationSchema';
import adminPermissions from '../../../../../../admin/src/permissions';
import { StageDragPreview } from './components/StageDragPreview';
import { DragLayer } from '../../../../../../admin/src/components/DragLayer';

function renderDragLayerItem({ type, item }) {
  switch (type) {
    case DRAG_DROP_TYPES.STAGE:
      return <StageDragPreview {...item} />;

    default:
      return null;
  }
}

export function ReviewWorkflowsPage() {
  const { trackUsage } = useTracking();
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const { put } = useFetchClient();
  const { formatAPIError } = useAPIErrorHandler();
  const toggleNotification = useNotification();
  const { workflows: workflowsData, refetchWorkflow } = useReviewWorkflows();
  const {
    status,
    clientState: {
      currentWorkflow: {
        data: currentWorkflow,
        isDirty: currentWorkflowIsDirty,
        hasDeletedServerStages: currentWorkflowHasDeletedServerStages,
      },
    },
  } = useSelector((state) => state?.[REDUX_NAMESPACE] ?? initialState);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] = useState(false);

  const { mutateAsync, isLoading } = useMutation(
    async ({ workflowId, stages }) => {
      const {
        data: { data },
      } = await put(`/admin/review-workflows/workflows/${workflowId}/stages`, {
        data: stages,
      });

      return data;
    },
    {
      onSuccess() {
        toggleNotification({
          type: 'success',
          message: { id: 'notification.success.saved', defaultMessage: 'Saved' },
        });
      },
    }
  );

  const updateWorkflowStages = async (workflowId, stages) => {
    try {
      const res = await mutateAsync({ workflowId, stages });

      return res;
    } catch (error) {
      toggleNotification({
        type: 'warning',
        message: formatAPIError(error),
      });

      return null;
    }
  };

  const submitForm = async () => {
    await updateWorkflowStages(currentWorkflow.id, currentWorkflow.stages);
    await refetchWorkflow();

    setIsConfirmDeleteDialogOpen(false);
  };

  const handleConfirmDeleteDialog = async () => {
    await submitForm();
  };

  const toggleConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen((prev) => !prev);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: currentWorkflow,
    async onSubmit() {
      if (currentWorkflowHasDeletedServerStages) {
        setIsConfirmDeleteDialogOpen(true);
      } else {
        submitForm();
      }
    },
    validationSchema: getWorkflowValidationSchema({ formatMessage }),
    validateOnChange: false,
  });

  useInjectReducer(REDUX_NAMESPACE, reducer);

  useEffect(() => {
    dispatch(setWorkflows({ status: workflowsData.status, data: workflowsData.data }));
  }, [workflowsData.status, workflowsData.data, dispatch]);

  useEffect(() => {
    trackUsage('didViewWorkflow');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CheckPagePermissions permissions={adminPermissions.settings['review-workflows'].main}>
      <Layout>
        <SettingsPageTitle
          name={formatMessage({
            id: 'Settings.review-workflows.page.title',
            defaultMessage: 'Review Workflows',
          })}
        />
        <Main tabIndex={-1}>
          <DragLayer renderItem={renderDragLayerItem} />

          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <HeaderLayout
                primaryAction={
                  <Button
                    startIcon={<Check />}
                    type="submit"
                    size="M"
                    disabled={!currentWorkflowIsDirty}
                    // if the confirm dialog is open the loading state is on
                    // the confirm button already
                    loading={!isConfirmDeleteDialogOpen && isLoading}
                  >
                    {formatMessage({
                      id: 'global.save',
                      defaultMessage: 'Save',
                    })}
                  </Button>
                }
                title={formatMessage({
                  id: 'Settings.review-workflows.page.title',
                  defaultMessage: 'Review Workflows',
                })}
                subtitle={formatMessage(
                  {
                    id: 'Settings.review-workflows.page.subtitle',
                    defaultMessage: '{count, plural, one {# stage} other {# stages}}',
                  },
                  { count: currentWorkflow?.stages?.length ?? 0 }
                )}
              />
              <ContentLayout>
                {status === 'loading' && (
                  <Loader>
                    {formatMessage({
                      id: 'Settings.review-workflows.page.isLoading',
                      defaultMessage: 'Workflow is loading',
                    })}
                  </Loader>
                )}

                <Stages stages={formik.values?.stages} />
              </ContentLayout>
            </Form>
          </FormikProvider>

          <ConfirmDialog
            bodyText={{
              id: 'Settings.review-workflows.page.delete.confirm.body',
              defaultMessage:
                'All entries assigned to deleted stages will be moved to the previous stage. Are you sure you want to save?',
            }}
            isConfirmButtonLoading={isLoading}
            isOpen={isConfirmDeleteDialogOpen}
            onToggleDialog={toggleConfirmDeleteDialog}
            onConfirm={handleConfirmDeleteDialog}
          />
        </Main>
      </Layout>
    </CheckPagePermissions>
  );
}
