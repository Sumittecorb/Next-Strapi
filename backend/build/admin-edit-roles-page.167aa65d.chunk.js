(self["webpackChunkecommerce_demo"] = self["webpackChunkecommerce_demo"] || []).push([[2544],{

/***/ 23341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CreatePage: () => (/* binding */ CreatePage),
  "default": () => (/* binding */ Roles_CreatePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 17 modules
var format = __webpack_require__(66115);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 15 modules
var helper_plugin_esm = __webpack_require__(41647);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js
var Textarea = __webpack_require__(61467);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/index.js + 53 modules
var Permissions = __webpack_require__(18280);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/CreatePage/utils/schema.js


const schema = es/* object */.Ry().shape({
  name: es/* string */.Z_().required(helper_plugin_esm/* translatedErrors.required */.I0.required),
  description: es/* string */.Z_().required(helper_plugin_esm/* translatedErrors.required */.I0.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/CreatePage/index.js















const UsersRoleNumber = styled_components_browser_esm/* default.div */.ZP.div`
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  background: ${({ theme }) => theme.colors.primary100};
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[4]}`};
  color: ${({ theme }) => theme.colors.primary600};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${12 / 16}rem;
  font-weight: bold;
`;
const CreatePage = () => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.o1)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [isSubmitting, setIsSubmiting] = (0,react.useState)(false);
  const { replace } = (0,react_router/* useHistory */.k6)();
  const permissionsRef = (0,react.useRef)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.rS)();
  const params = (0,react_router/* useRouteMatch */.$B)("/settings/roles/duplicate/:id");
  const id = get_default()(params, "params.id", null);
  const { isLoading: isLayoutLoading, data: permissionsLayout } = (0,hooks/* useFetchPermissionsLayout */.U_)();
  const { permissions: rolePermissions, isLoading: isRoleLoading } = (0,hooks/* useFetchRole */.Dq)(id);
  const { post, put } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const handleCreateRoleSubmit = (data) => {
    lockApp();
    setIsSubmiting(true);
    if (id) {
      trackUsage("willDuplicateRole");
    } else {
      trackUsage("willCreateNewRole");
    }
    Promise.resolve(post("/admin/roles", data)).then(async ({ data: res }) => {
      const { permissionsToSend } = permissionsRef.current.getPermissions();
      if (id) {
        trackUsage("didDuplicateRole");
      } else {
        trackUsage("didCreateNewRole");
      }
      if (res.data.id && !isEmpty_default()(permissionsToSend)) {
        await put(`/admin/roles/${res.data.id}/permissions`, { permissions: permissionsToSend });
      }
      return res;
    }).then((res) => {
      setIsSubmiting(false);
      toggleNotification({
        type: "success",
        message: { id: "Settings.roles.created", defaultMessage: "created" }
      });
      replace(`/settings/roles/${res.data.id}`);
    }).catch((err) => {
      console.error(err);
      setIsSubmiting(false);
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }).finally(() => {
      unlockApp();
    });
  };
  const defaultDescription = `${formatMessage({
    id: "Settings.roles.form.created",
    defaultMessage: "Created"
  })} ${(0,format/* default */.Z)(new Date(), "PPP")}`;
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.SL, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      initialValues: { name: "", description: defaultDescription },
      onSubmit: handleCreateRoleSubmit,
      validationSchema: utils_schema,
      validateOnChange: false
    },
    ({ handleSubmit, values, errors, handleReset, handleChange }) => /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.l0, { noValidate: true }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            variant: "secondary",
            onClick: () => {
              handleReset();
              permissionsRef.current.resetForm();
            },
            size: "L"
          },
          formatMessage({
            id: "app.components.Button.reset",
            defaultMessage: "Reset"
          })
        ), /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleSubmit, loading: isSubmitting, size: "L" }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        }))),
        title: formatMessage({
          id: "Settings.roles.create.title",
          defaultMessage: "Create a role"
        }),
        subtitle: formatMessage({
          id: "Settings.roles.create.description",
          defaultMessage: "Define the rights given to the role"
        }),
        navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/roles" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
      id: "Settings.roles.form.description",
      defaultMessage: "Name and description of the role"
    })))), /* @__PURE__ */ react.createElement(UsersRoleNumber, null, formatMessage(
      {
        id: "Settings.roles.form.button.users-with-role",
        defaultMessage: "{number, plural, =0 {# users} one {# user} other {# users}} with this role"
      },
      { number: 0 }
    ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "name",
        error: errors.name && formatMessage({ id: errors.name }),
        label: formatMessage({
          id: "global.name",
          defaultMessage: "Name"
        }),
        onChange: handleChange,
        value: values.name
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      Textarea/* Textarea */.g,
      {
        label: formatMessage({
          id: "global.description",
          defaultMessage: "Description"
        }),
        id: "description",
        error: errors.description && formatMessage({ id: errors.description }),
        onChange: handleChange
      },
      values.description
    ))))), !isLayoutLoading && !isRoleLoading ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(
      Permissions/* default */.Z,
      {
        isFormDisabled: false,
        ref: permissionsRef,
        permissions: rolePermissions,
        layout: permissionsLayout
      }
    )) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.dO, null))))))
  ));
};
/* harmony default export */ function Roles_CreatePage() {
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.O4, { permissions: permissions/* default.settings.roles.create */.Z.settings.roles.create }, /* @__PURE__ */ react.createElement(CreatePage, null));
}



/***/ }),

/***/ 18280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Permissions)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 15 modules
var helper_plugin_esm = __webpack_require__(41647);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(77296);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChevronUp.js
var ChevronUp = __webpack_require__(52337);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChevronDown.js
var ChevronDown = __webpack_require__(66942);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(92155);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.js
var Cog = __webpack_require__(78114);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsButton/index.js






const Wrapper = styled_components_browser_esm/* default.div */.ZP.div`
  position: relative;

  ${({ hasConditions, disabled, theme }) => hasConditions && `
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20 / 16}rem;;
      background: ${disabled ? theme.colors.neutral100 : theme.colors.primary600};
    }
  `}
`;
const ConditionsButton = ({ onClick, className, hasConditions, variant }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Wrapper, { hasConditions, className }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant, startIcon: /* @__PURE__ */ react.createElement(Cog/* default */.Z, null), onClick }, formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  })));
};
ConditionsButton.defaultProps = {
  className: null,
  hasConditions: false,
  variant: "tertiary"
};
ConditionsButton.propTypes = {
  onClick: (prop_types_default()).func.isRequired,
  className: (prop_types_default()).string,
  hasConditions: (prop_types_default()).bool,
  variant: (prop_types_default()).string
};
/* harmony default export */ const components_ConditionsButton = ((0,styled_components_browser_esm/* default */.ZP)(ConditionsButton)``);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Breadcrumbs/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(2407);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(7739);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelectNested.js
var MultiSelectNested = __webpack_require__(38953);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsModal/ActionRow/utils/options.js

const getSelectedValues = (rawValue) => Object.values(rawValue).map(
  (x) => Object.entries(x).filter(([, value]) => value).map(([key]) => key)
).flat();
const getNestedOptions = (options) => options.reduce((acc, [label, children]) => {
  acc.push({
    label: upperFirst_default()(label),
    children: children.map((child) => ({
      label: child.displayName,
      value: child.id
    }))
  });
  return acc;
}, []);
const getNewStateFromChangedValues = (options, changedValues) => options.map(([, values]) => values).flat().reduce((acc, curr) => ({ [curr.id]: changedValues.includes(curr.id), ...acc }), {});


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsModal/ActionRow/index.js





const ActionRow = ({
  arrayOfOptionsGroupedByCategory,
  isFormDisabled,
  isGrey,
  label,
  name,
  onChange,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleChange = (val) => {
    onChange(name, getNewStateFromChangedValues(arrayOfOptionsGroupedByCategory, val));
  };
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { as: "li", background: isGrey ? "neutral100" : "neutral0", paddingBottom: 3, paddingTop: 3 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingLeft: 6, style: { width: 180 } }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "Settings.permissions.conditions.can",
    defaultMessage: "Can"
  }), "\xA0"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", title: label, textColor: "primary600", ellipsis: true }, formatMessage({
    id: `Settings.roles.form.permissions.${label.toLowerCase()}`,
    defaultMessage: label
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, "\xA0", formatMessage({
    id: "Settings.permissions.conditions.when",
    defaultMessage: "When"
  }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { maxWidth: 430, width: "100%" } }, /* @__PURE__ */ react.createElement(
    MultiSelectNested/* MultiSelectNested */.Q,
    {
      id: name,
      customizeContent: (values) => `${values.length} currently selected`,
      onChange: handleChange,
      value: getSelectedValues(value),
      options: getNestedOptions(arrayOfOptionsGroupedByCategory),
      disabled: isFormDisabled
    }
  )));
};
ActionRow.propTypes = {
  arrayOfOptionsGroupedByCategory: (prop_types_default()).array.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  isGrey: (prop_types_default()).bool.isRequired,
  label: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ConditionsModal_ActionRow = (ActionRow);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsModal/utils/createDefaultConditionsForm.js

const createConditionsForm = (conditions, valueObject) => {
  return conditions.reduce((acc, current) => {
    acc[current.id] = get_default()(valueObject, current.id, false);
    return acc;
  }, {});
};
const createCategoryForm = (arrayOfOptions, valueObject) => {
  return arrayOfOptions.reduce((acc, current) => {
    const [categoryName, relatedConditions] = current;
    const conditionsForm = createConditionsForm(relatedConditions, valueObject);
    acc[categoryName] = conditionsForm;
    return acc;
  }, {});
};
const createDefaultConditionsForm = (actionsToDisplay, modifiedData, arrayOfOptionsGroupedByCategory) => {
  return actionsToDisplay.reduce((acc, current) => {
    const valueFromModifiedData = get_default()(
      modifiedData,
      [...current.pathToConditionsObject, "conditions"],
      {}
    );
    const categoryDefaultForm = createCategoryForm(
      arrayOfOptionsGroupedByCategory,
      valueFromModifiedData
    );
    acc[current.pathToConditionsObject.join("..")] = categoryDefaultForm;
    return acc;
  }, {});
};
/* harmony default export */ const utils_createDefaultConditionsForm = (createDefaultConditionsForm);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ConditionsModal/index.js











const ConditionsModal = ({ actions, headerBreadCrumbs, isFormDisabled, onClosed, onToggle }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { availableConditions, modifiedData, onChangeConditions } = (0,hooks/* usePermissionsDataManager */.$_)();
  const arrayOfOptionsGroupedByCategory = (0,react.useMemo)(() => {
    return Object.entries(groupBy_default()(availableConditions, "category"));
  }, [availableConditions]);
  const actionsToDisplay = actions.filter(
    ({ isDisplayed, hasSomeActionsSelected, hasAllActionsSelected }) => isDisplayed && (hasSomeActionsSelected || hasAllActionsSelected)
  );
  const initState = (0,react.useMemo)(() => {
    return utils_createDefaultConditionsForm(
      actionsToDisplay,
      modifiedData,
      arrayOfOptionsGroupedByCategory
    );
  }, [actionsToDisplay, modifiedData, arrayOfOptionsGroupedByCategory]);
  const [state, setState] = (0,react.useState)(initState);
  const handleChange = (name, values) => {
    setState(
      (0,immer_esm/* default */.ZP)((draft) => {
        if (!draft[name]) {
          draft[name] = {};
        }
        if (!draft[name].default) {
          draft[name].default = {};
        }
        draft[name].default = values;
      })
    );
  };
  const handleSubmit = () => {
    const conditionsWithoutCategory = Object.entries(state).reduce((acc, current) => {
      const [key, value] = current;
      const merged = Object.values(value).reduce((acc1, current1) => {
        return { ...acc1, ...current1 };
      }, {});
      acc[key] = merged;
      return acc;
    }, {});
    onChangeConditions(conditionsWithoutCategory);
    onToggle();
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { labelledBy: "condition-modal-breadcrumbs", onClose: onClosed }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { id: "condition-modal-breadcrumbs", label: headerBreadCrumbs.join(", ") }, headerBreadCrumbs.map((label) => /* @__PURE__ */ react.createElement(Breadcrumbs/* Crumb */.$, { key: label }, upperFirst_default()(
    formatMessage({
      id: label,
      defaultMessage: label
    })
  ))))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, actionsToDisplay.length === 0 && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "Settings.permissions.conditions.no-actions",
    defaultMessage: "You first need to select actions (create, read, update, ...) before defining conditions on them."
  })), /* @__PURE__ */ react.createElement("ul", null, actionsToDisplay.map(({ actionId, label, pathToConditionsObject }, index) => {
    const name = pathToConditionsObject.join("..");
    return /* @__PURE__ */ react.createElement(
      ConditionsModal_ActionRow,
      {
        key: actionId,
        arrayOfOptionsGroupedByCategory,
        label,
        isFormDisabled,
        isGrey: index % 2 === 0,
        name,
        onChange: handleChange,
        value: get_default()(state, name, {})
      }
    );
  }))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onToggle }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleSubmit }, formatMessage({
        id: "Settings.permissions.conditions.apply",
        defaultMessage: "Apply"
      }))
    }
  ));
};
ConditionsModal.propTypes = {
  actions: prop_types_default().arrayOf(
    prop_types_default().shape({
      actionId: (prop_types_default()).string.isRequired,
      checkboxName: (prop_types_default()).string,
      hasSomeActionsSelected: (prop_types_default()).bool.isRequired,
      hasAllActionsSelected: (prop_types_default()).bool,
      isDisplayed: (prop_types_default()).bool.isRequired,
      label: (prop_types_default()).string
    })
  ).isRequired,
  headerBreadCrumbs: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  onClosed: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ConditionsModal = (ConditionsModal);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/constants.js
const cellWidth = `${120 / 16}rem`;
const firstRowWidth = `${200 / 16}rem`;
const rowHeight = `${53 / 16}rem`;

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/HiddenAction/index.js


const HiddenAction = styled_components_browser_esm/* default.div */.ZP.div`
  width: ${cellWidth};
`;
/* harmony default export */ const components_HiddenAction = (HiddenAction);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/CollapseLabel/index.js


const CollapseLabel = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  padding-right: ${({ theme }) => theme.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({ isCollapsable }) => isCollapsable && "cursor: pointer;"}
`;
/* harmony default export */ const components_CollapseLabel = (CollapseLabel);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/RowLabelWithCheckbox/index.js







const RowLabelWithCheckbox = ({
  children,
  isCollapsable,
  isActive,
  isFormDisabled,
  label,
  onChange,
  onClick,
  checkboxName,
  someChecked,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center", paddingLeft: 6, style: { width: firstRowWidth, flexShrink: 0 } }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2 }, /* @__PURE__ */ react.createElement(
    BaseCheckbox/* BaseCheckbox */.C,
    {
      name: checkboxName,
      "aria-label": formatMessage(
        {
          id: `Settings.permissions.select-all-by-permission`,
          defaultMessage: "Select all {label} permissions"
        },
        { label }
      ),
      disabled: isFormDisabled,
      onValueChange: (value2) => onChange({
        target: {
          name: checkboxName,
          value: value2
        }
      }),
      indeterminate: someChecked,
      value
    }
  )), /* @__PURE__ */ react.createElement(
    components_CollapseLabel,
    {
      title: label,
      alignItems: "center",
      isCollapsable,
      ...isCollapsable && {
        onClick,
        "aria-expanded": isActive,
        onKeyDown: ({ key }) => (key === "Enter" || key === " ") && onClick(),
        tabIndex: 0,
        role: "button"
      }
    },
    /* @__PURE__ */ react.createElement(
      Typography/* Typography */.Z,
      {
        fontWeight: isActive ? "bold" : "",
        textColor: isActive ? "primary600" : "neutral800",
        ellipsis: true
      },
      upperFirst_default()(label)
    ),
    children
  ));
};
RowLabelWithCheckbox.defaultProps = {
  children: null,
  checkboxName: "",
  onChange() {
  },
  value: false,
  someChecked: false,
  isCollapsable: false
};
RowLabelWithCheckbox.propTypes = {
  checkboxName: (prop_types_default()).string,
  children: (prop_types_default()).node,
  label: (prop_types_default()).string.isRequired,
  isCollapsable: (prop_types_default()).bool,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  onChange: (prop_types_default()).func,
  onClick: (prop_types_default()).func.isRequired,
  someChecked: (prop_types_default()).bool,
  value: (prop_types_default()).bool,
  isActive: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_RowLabelWithCheckbox = ((0,react.memo)(RowLabelWithCheckbox));

// EXTERNAL MODULE: ./node_modules/lodash/flattenDeep.js
var flattenDeep = __webpack_require__(42348);
var flattenDeep_default = /*#__PURE__*/__webpack_require__.n(flattenDeep);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(13218);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/utils/createArrayOfValues.js


const createArrayOfValues = (obj) => {
  if (!isObject_default()(obj)) {
    return [];
  }
  return flattenDeep_default()(
    Object.values(obj).map((value) => {
      if (isObject_default()(value)) {
        return createArrayOfValues(value);
      }
      return value;
    })
  );
};
/* harmony default export */ const utils_createArrayOfValues = (createArrayOfValues);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/utils/removeConditionKeyFromData.js
const removeConditionKeyFromData = (obj) => {
  if (!obj) {
    return null;
  }
  return Object.keys(obj).reduce((acc, current) => {
    if (current !== "conditions") {
      acc[current] = obj[current];
    }
    return acc;
  }, {});
};
/* harmony default export */ const utils_removeConditionKeyFromData = (removeConditionKeyFromData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/utils/getCheckboxState.js


const getCheckboxState = (dataObj) => {
  const dataWithoutCondition = utils_removeConditionKeyFromData(dataObj);
  const arrayOfValues = utils_createArrayOfValues(dataWithoutCondition);
  if (!arrayOfValues.length) {
    return { hasAllActionsSelected: false, hasSomeActionsSelected: false };
  }
  const hasAllActionsSelected = arrayOfValues.every((val) => val);
  const hasSomeActionsSelected = arrayOfValues.some((val) => val) && !hasAllActionsSelected;
  return { hasAllActionsSelected, hasSomeActionsSelected };
};
/* harmony default export */ const utils_getCheckboxState = (getCheckboxState);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/Collapse/utils/generateCheckboxesActions.js



const generateCheckboxesActions = (availableActions, modifiedData, pathToData) => {
  return availableActions.map(({ actionId, isDisplayed, applyToProperties, label }) => {
    if (!isDisplayed) {
      return { actionId, hasSomeActionsSelected: false, isDisplayed };
    }
    const baseCheckboxNameArray = [...pathToData.split(".."), actionId];
    const checkboxNameArray = isEmpty_default()(applyToProperties) ? [...baseCheckboxNameArray, "properties", "enabled"] : baseCheckboxNameArray;
    const checkboxName = checkboxNameArray.join("..");
    const conditionsValue = get_default()(modifiedData, [...baseCheckboxNameArray, "conditions"], null);
    const hasConditions = utils_createArrayOfValues(conditionsValue).some((val) => val);
    if (isEmpty_default()(applyToProperties)) {
      const value = get_default()(modifiedData, checkboxNameArray, false);
      return {
        actionId,
        checkboxName,
        hasAllActionsSelected: value,
        hasConditions,
        hasSomeActionsSelected: value,
        isDisplayed,
        isParentCheckbox: false,
        label,
        pathToConditionsObject: baseCheckboxNameArray
      };
    }
    const mainData = get_default()(modifiedData, checkboxNameArray, null);
    const { hasAllActionsSelected, hasSomeActionsSelected } = utils_getCheckboxState(mainData);
    return {
      actionId,
      checkboxName,
      hasAllActionsSelected,
      hasConditions,
      hasSomeActionsSelected,
      isDisplayed,
      isParentCheckbox: true,
      label,
      pathToConditionsObject: baseCheckboxNameArray
    };
  });
};
/* harmony default export */ const utils_generateCheckboxesActions = (generateCheckboxesActions);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/CarretIcon/index.js


const CarretIcon = (0,styled_components_browser_esm/* default */.ZP)(CarretDown/* default */.Z)`
  display: none;
  width: ${10 / 16}rem;
  transform: rotate(${({ $isActive }) => $isActive ? "180" : "0"}deg);
  margin-left: ${({ theme }) => theme.spaces[2]};
`;
/* harmony default export */ const CollapsePropertyMatrix_CarretIcon = (CarretIcon);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/utils/activeStyle.js


const activeStyle = (theme) => `
  ${Typography/* Typography */.Z} {
    color: ${theme.colors.primary600};
    font-weight: ${theme.fontWeights.bold}
  }
  ${CollapsePropertyMatrix_CarretIcon} {
    display: block;
    path {
      fill: ${theme.colors.primary600}
    };
  }
`;
/* harmony default export */ const utils_activeStyle = (activeStyle);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/Collapse/index.js

















const activeRowStyle = (theme, isActive) => `
  ${Collapse_Wrapper} {
    background-color: ${theme.colors.primary100};
    color: ${theme.colors.primary600};
    border-radius: ${isActive ? "2px 2px 0 0" : "2px"};
  }
  ${Chevron} {
    display: flex;
  }
  ${components_ConditionsButton} {
    display: block;
  }
  &:hover {
   ${utils_activeStyle(theme)}
  }

  &:focus-within {
    ${({ theme: theme2, isActive: isActive2 }) => activeRowStyle(theme2, isActive2)}
  }
  
`;
const Collapse_Wrapper = styled_components_browser_esm/* default.div */.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${rowHeight};
  background-color: ${({ isGrey, theme }) => isGrey ? theme.colors.neutral100 : theme.colors.neutral0};
  border: 1px solid transparent;
`;
const BoxWrapper = styled_components_browser_esm/* default.div */.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${components_ConditionsButton} {
    display: none;
  }
  ${({ isActive, theme }) => isActive && activeRowStyle(theme, isActive)}
  &:hover {
    ${({ theme, isActive }) => activeRowStyle(theme, isActive)}
  }
`;
const Cell = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  width: ${cellWidth};
  position: relative;
`;
const Chevron = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const TinyDot = styled_components_browser_esm/* default.span */.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary600};
`;
const AbsoluteBox = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`;
const Collapse = ({
  availableActions,
  isActive,
  isGrey,
  isFormDisabled,
  label,
  onClickToggle,
  pathToData
}) => {
  const [isModalOpen, setModalOpen] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { modifiedData, onChangeParentCheckbox, onChangeSimpleCheckbox } = (0,hooks/* usePermissionsDataManager */.$_)();
  const handleToggleModalIsOpen = () => {
    setModalOpen((s) => !s);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const mainData = get_default()(modifiedData, pathToData.split(".."), {});
  const dataWithoutCondition = (0,react.useMemo)(() => {
    return Object.keys(mainData).reduce((acc, current) => {
      acc[current] = omit_default()(mainData[current], "conditions");
      return acc;
    }, {});
  }, [mainData]);
  const { hasAllActionsSelected, hasSomeActionsSelected } = utils_getCheckboxState(dataWithoutCondition);
  const checkboxesActions = (0,react.useMemo)(() => {
    return utils_generateCheckboxesActions(availableActions, modifiedData, pathToData);
  }, [availableActions, modifiedData, pathToData]);
  const doesConditionButtonHasConditions = checkboxesActions.some(
    ({ hasConditions }) => hasConditions
  );
  return /* @__PURE__ */ react.createElement(BoxWrapper, { isActive }, /* @__PURE__ */ react.createElement(Collapse_Wrapper, { isGrey }, /* @__PURE__ */ react.createElement(
    components_RowLabelWithCheckbox,
    {
      isCollapsable: true,
      isFormDisabled,
      label,
      checkboxName: pathToData,
      onChange: onChangeParentCheckbox,
      onClick: onClickToggle,
      someChecked: hasSomeActionsSelected,
      value: hasAllActionsSelected,
      isActive
    },
    /* @__PURE__ */ react.createElement(Chevron, { paddingLeft: 2 }, isActive ? /* @__PURE__ */ react.createElement(ChevronUp/* default */.Z, null) : /* @__PURE__ */ react.createElement(ChevronDown/* default */.Z, null))
  ), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { style: { flex: 1 } }, checkboxesActions.map(
    ({
      actionId,
      hasConditions,
      hasAllActionsSelected: hasAllActionsSelected2,
      hasSomeActionsSelected: hasSomeActionsSelected2,
      isDisplayed,
      isParentCheckbox,
      checkboxName,
      label: permissionLabel
    }) => {
      if (!isDisplayed) {
        return /* @__PURE__ */ react.createElement(components_HiddenAction, { key: actionId });
      }
      if (isParentCheckbox) {
        return /* @__PURE__ */ react.createElement(Cell, { key: actionId, justifyContent: "center", alignItems: "center" }, hasConditions && /* @__PURE__ */ react.createElement(TinyDot, null), /* @__PURE__ */ react.createElement(
          BaseCheckbox/* BaseCheckbox */.C,
          {
            disabled: isFormDisabled,
            name: checkboxName,
            "aria-label": formatMessage(
              {
                id: `Settings.permissions.select-by-permission`,
                defaultMessage: "Select {label} permission"
              },
              { label: `${permissionLabel} ${label}` }
            ),
            onValueChange: (value) => {
              onChangeParentCheckbox({
                target: {
                  name: checkboxName,
                  value
                }
              });
            },
            indeterminate: hasSomeActionsSelected2,
            value: hasAllActionsSelected2
          }
        ));
      }
      return /* @__PURE__ */ react.createElement(Cell, { key: actionId, justifyContent: "center", alignItems: "center" }, hasConditions && /* @__PURE__ */ react.createElement(TinyDot, null), /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          disabled: isFormDisabled,
          indeterminate: hasConditions,
          name: checkboxName,
          onValueChange: (value) => {
            onChangeSimpleCheckbox({
              target: {
                name: checkboxName,
                value
              }
            });
          },
          value: hasAllActionsSelected2
        }
      ));
    }
  )), isModalOpen && /* @__PURE__ */ react.createElement(
    components_ConditionsModal,
    {
      headerBreadCrumbs: [label, "Settings.permissions.conditions.conditions"],
      actions: checkboxesActions,
      isFormDisabled,
      onClosed: handleModalClose,
      onToggle: handleToggleModalIsOpen
    }
  )), /* @__PURE__ */ react.createElement(AbsoluteBox, null, /* @__PURE__ */ react.createElement(
    components_ConditionsButton,
    {
      onClick: handleToggleModalIsOpen,
      hasConditions: doesConditionButtonHasConditions
    }
  )));
};
Collapse.propTypes = {
  availableActions: (prop_types_default()).array.isRequired,
  isActive: (prop_types_default()).bool.isRequired,
  isGrey: (prop_types_default()).bool.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  label: (prop_types_default()).string.isRequired,
  onClickToggle: (prop_types_default()).func.isRequired,
  pathToData: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ContentTypeCollapse_Collapse = (Collapse);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/utils/generateHeadersFromActions.js
const generateHeadersFromActions = (actions, propertyName) => {
  return actions.map((action) => {
    const isActionRelatedToCurrentProperty = Array.isArray(action.applyToProperties) && action.applyToProperties.indexOf(propertyName) !== -1 && action.isDisplayed;
    return { label: action.label, actionId: action.actionId, isActionRelatedToCurrentProperty };
  });
};
/* harmony default export */ const utils_generateHeadersFromActions = (generateHeadersFromActions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/Header/index.js






const HeaderLabel = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  width: ${cellWidth};
  flex-shrink: 0;
`;
const PropertyLabelWrapper = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  width: ${firstRowWidth};
  height: ${rowHeight};
  flex-shrink: 0;
`;
const Header = ({ headers, label }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const translatedLabel = formatMessage(
    {
      id: "Settings.roles.form.permission.property-label",
      defaultMessage: "{label} permissions"
    },
    { label }
  );
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(PropertyLabelWrapper, { alignItems: "center", paddingLeft: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral500" }, translatedLabel)), headers.map((header) => {
    if (!header.isActionRelatedToCurrentProperty) {
      return /* @__PURE__ */ react.createElement(HeaderLabel, { key: header.label });
    }
    return /* @__PURE__ */ react.createElement(HeaderLabel, { justifyContent: "center", key: header.label }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral500" }, formatMessage({
      id: `Settings.roles.form.permissions.${header.label.toLowerCase()}`,
      defaultMessage: header.label
    })));
  }));
};
Header.propTypes = {
  headers: prop_types_default().arrayOf(
    prop_types_default().shape({
      label: (prop_types_default()).string.isRequired,
      isActionRelatedToCurrentProperty: (prop_types_default()).bool.isRequired
    })
  ).isRequired,
  label: (prop_types_default()).string.isRequired
};
/* harmony default export */ const CollapsePropertyMatrix_Header = (Header);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/RequiredSign/index.js


const Required = styled_components_browser_esm/* default.span */.ZP.span`
  color: ${({ theme }) => theme.colors.danger700};
  padding-left: ${({ theme }) => theme.spaces[1]}px;
`;
const RequiredSign = () => /* @__PURE__ */ react.createElement(Required, null, "*");
/* harmony default export */ const components_RequiredSign = (RequiredSign);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/utils/getAvailableActions.js
const getAvailableActions = (actions, targetSubject) => {
  return actions.map((action) => {
    const isDisplayed = Array.isArray(action.subjects) && action.subjects.indexOf(targetSubject) !== -1;
    return { ...action, isDisplayed };
  });
};
/* harmony default export */ const utils_getAvailableActions = (getAvailableActions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Curve/index.js




const StyledBox = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme }) => theme.colors.primary200};
    display: block;
  }
`;
const Svg = styled_components_browser_esm/* default.svg */.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
const Curve = (props) => /* @__PURE__ */ react.createElement(StyledBox, null, /* @__PURE__ */ react.createElement(
  Svg,
  {
    width: "20",
    height: "23",
    viewBox: "0 0 20 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  },
  /* @__PURE__ */ react.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",
      fill: "#D9D8FF"
    }
  )
));
Curve.defaultProps = {
  fill: "primary200"
};
Curve.propTypes = {
  fill: (prop_types_default()).string
};
/* harmony default export */ const components_Curve = ((0,react.memo)(Curve));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/SubActionRow/index.js
















const SubActionRow_Cell = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  width: ${cellWidth};
  position: relative;
`;
const RowWrapper = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  height: ${rowHeight};
`;
const SubActionRow_Wrapper = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  padding-left: ${31 / 16}rem;
`;
const LeftBorderTimeline = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  border-left: ${({ isVisible, theme }) => isVisible ? `4px solid ${theme.colors.primary200}` : "4px solid transparent"};
`;
const RowStyle = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  padding-left: ${({ theme }) => theme.spaces[4]};
  width: ${({ level }) => 145 - level * 36}px;

  ${({ isCollapsable, theme }) => isCollapsable && `
      ${CollapsePropertyMatrix_CarretIcon} {
        display: block;
        color: ${theme.colors.neutral100};
      }
      &:hover {
        ${utils_activeStyle(theme)}
      }
  `}
  ${({ isActive, theme }) => isActive && utils_activeStyle(theme)};
`;
const TopTimeline = styled_components_browser_esm/* default.div */.ZP.div`
  padding-top: ${({ theme }) => theme.spaces[2]};
  margin-top: ${({ theme }) => theme.spaces[2]};
  width: ${4 / 16}rem;
  background-color: ${({ theme }) => theme.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;
const SubActionRow = ({
  childrenForm,
  isFormDisabled,
  recursiveLevel,
  pathToDataFromActionRow,
  propertyActions,
  parentName,
  propertyName
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { modifiedData, onChangeParentCheckbox, onChangeSimpleCheckbox } = (0,hooks/* usePermissionsDataManager */.$_)();
  const [rowToOpen, setRowToOpen] = (0,react.useState)(null);
  const handleClickToggleSubLevel = (name) => {
    setRowToOpen((prev) => {
      if (prev === name) {
        return null;
      }
      return name;
    });
  };
  const displayedRecursiveChildren = (0,react.useMemo)(() => {
    if (!rowToOpen) {
      return null;
    }
    return childrenForm.find(({ value }) => value === rowToOpen);
  }, [rowToOpen, childrenForm]);
  return /* @__PURE__ */ react.createElement(SubActionRow_Wrapper, null, /* @__PURE__ */ react.createElement(TopTimeline, null), childrenForm.map(({ label, value, required, children: subChildrenForm }, index) => {
    const isVisible = index + 1 < childrenForm.length;
    const isArrayType = Array.isArray(subChildrenForm);
    const isActive = rowToOpen === value;
    return /* @__PURE__ */ react.createElement(LeftBorderTimeline, { key: value, isVisible }, /* @__PURE__ */ react.createElement(RowWrapper, null, /* @__PURE__ */ react.createElement(components_Curve, { color: "primary200" }), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { style: { flex: 1 } }, /* @__PURE__ */ react.createElement(RowStyle, { level: recursiveLevel, isActive, isCollapsable: isArrayType }, /* @__PURE__ */ react.createElement(
      components_CollapseLabel,
      {
        alignItems: "center",
        isCollapsable: isArrayType,
        ...isArrayType && {
          onClick: () => handleClickToggleSubLevel(value),
          "aria-expanded": isActive,
          onKeyDown: ({ key }) => (key === "Enter" || key === " ") && handleClickToggleSubLevel(value),
          tabIndex: 0,
          role: "button"
        },
        title: label
      },
      /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: true }, upperFirst_default()(label)),
      required && /* @__PURE__ */ react.createElement(components_RequiredSign, null),
      /* @__PURE__ */ react.createElement(CollapsePropertyMatrix_CarretIcon, { $isActive: isActive })
    )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { style: { flex: 1 } }, propertyActions.map(
      ({ actionId, label: propertyLabel, isActionRelatedToCurrentProperty }) => {
        if (!isActionRelatedToCurrentProperty) {
          return /* @__PURE__ */ react.createElement(components_HiddenAction, { key: actionId });
        }
        const checkboxName = [
          ...pathToDataFromActionRow.split(".."),
          actionId,
          "properties",
          propertyName,
          ...parentName.split(".."),
          value
        ];
        const checkboxValue = get_default()(modifiedData, checkboxName, false);
        if (!subChildrenForm) {
          return /* @__PURE__ */ react.createElement(SubActionRow_Cell, { key: propertyLabel, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ react.createElement(
            BaseCheckbox/* BaseCheckbox */.C,
            {
              disabled: isFormDisabled,
              name: checkboxName.join(".."),
              "aria-label": formatMessage(
                {
                  id: `Settings.permissions.select-by-permission`,
                  defaultMessage: "Select {label} permission"
                },
                { label: `${parentName} ${label} ${propertyLabel}` }
              ),
              onValueChange: (value2) => {
                onChangeSimpleCheckbox({
                  target: {
                    name: checkboxName.join(".."),
                    value: value2
                  }
                });
              },
              value: checkboxValue
            }
          ));
        }
        const { hasAllActionsSelected, hasSomeActionsSelected } = utils_getCheckboxState(checkboxValue);
        return /* @__PURE__ */ react.createElement(SubActionRow_Cell, { key: propertyLabel, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ react.createElement(
          BaseCheckbox/* BaseCheckbox */.C,
          {
            key: propertyLabel,
            disabled: isFormDisabled,
            name: checkboxName.join(".."),
            "aria-label": formatMessage(
              {
                id: `Settings.permissions.select-by-permission`,
                defaultMessage: "Select {label} permission"
              },
              { label: `${parentName} ${label} ${propertyLabel}` }
            ),
            onValueChange: (value2) => {
              onChangeParentCheckbox({
                target: {
                  name: checkboxName.join(".."),
                  value: value2
                }
              });
            },
            value: hasAllActionsSelected,
            indeterminate: hasSomeActionsSelected
          }
        ));
      }
    )))), displayedRecursiveChildren && isActive && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(
      SubActionRow,
      {
        isFormDisabled,
        parentName: `${parentName}..${value}`,
        pathToDataFromActionRow,
        propertyActions,
        propertyName,
        recursiveLevel: recursiveLevel + 1,
        childrenForm: displayedRecursiveChildren.children
      }
    )));
  }));
};
SubActionRow.propTypes = {
  childrenForm: (prop_types_default()).array.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  parentName: (prop_types_default()).string.isRequired,
  pathToDataFromActionRow: (prop_types_default()).string.isRequired,
  propertyActions: (prop_types_default()).array.isRequired,
  propertyName: (prop_types_default()).string.isRequired,
  recursiveLevel: (prop_types_default()).number.isRequired
};
/* harmony default export */ const CollapsePropertyMatrix_SubActionRow = ((0,react.memo)(SubActionRow));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/ActionRow/utils/getRowLabelCheckboxeState.js


const getActionIdsFromPropertyActions = (propertyActions) => {
  const actionIds = propertyActions.reduce((acc, current) => {
    if (current.isActionRelatedToCurrentProperty) {
      acc.push(current.actionId);
    }
    return acc;
  }, []);
  return actionIds;
};
const getRowLabelCheckboxeState = (propertyActions, modifiedData, pathToContentType, propertyToCheck, targetKey) => {
  const actionIds = getActionIdsFromPropertyActions(propertyActions);
  const data = actionIds.reduce((acc, current) => {
    const pathToData = [
      ...pathToContentType.split(".."),
      current,
      "properties",
      propertyToCheck,
      targetKey
    ];
    const mainData = get_default()(modifiedData, pathToData, false);
    acc[current] = mainData;
    return acc;
  }, {});
  return utils_getCheckboxState(data);
};
/* harmony default export */ const utils_getRowLabelCheckboxeState = (getRowLabelCheckboxeState);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/ActionRow/index.js
















const ActionRow_Cell = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  width: ${cellWidth};
  position: relative;
`;
const ActionRow_Wrapper = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  height: ${rowHeight};
  flex: 1;

  ${({ isCollapsable, theme }) => isCollapsable && `
      ${CollapsePropertyMatrix_CarretIcon} {
        display: block;
        color: ${theme.colors.neutral100};
      }
      &:hover {
        ${utils_activeStyle(theme)}
      }
  `}
  ${({ isActive, theme }) => isActive && utils_activeStyle(theme)};
`;
const ActionRow_ActionRow = ({
  childrenForm,
  label,
  isFormDisabled,
  name,
  required,
  pathToData,
  propertyActions,
  propertyName,
  isOdd
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [rowToOpen, setRowToOpen] = (0,react.useState)(null);
  const {
    modifiedData,
    onChangeCollectionTypeLeftActionRowCheckbox,
    onChangeParentCheckbox,
    onChangeSimpleCheckbox
  } = (0,hooks/* usePermissionsDataManager */.$_)();
  const isActive = rowToOpen === name;
  const recursiveChildren = (0,react.useMemo)(() => {
    if (!Array.isArray(childrenForm)) {
      return [];
    }
    return childrenForm;
  }, [childrenForm]);
  const isCollapsable = recursiveChildren.length > 0;
  const handleClick = (0,react.useCallback)(() => {
    if (isCollapsable) {
      setRowToOpen((prev) => {
        if (prev === name) {
          return null;
        }
        return name;
      });
    }
  }, [isCollapsable, name]);
  const handleChangeLeftRowCheckbox = ({ target: { value } }) => {
    onChangeCollectionTypeLeftActionRowCheckbox(pathToData, propertyName, name, value);
  };
  const { hasAllActionsSelected, hasSomeActionsSelected } = (0,react.useMemo)(() => {
    return utils_getRowLabelCheckboxeState(propertyActions, modifiedData, pathToData, propertyName, name);
  }, [propertyActions, modifiedData, pathToData, propertyName, name]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    ActionRow_Wrapper,
    {
      alignItems: "center",
      isCollapsable,
      isActive,
      background: isOdd ? "neutral100" : "neutral0"
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(
      components_RowLabelWithCheckbox,
      {
        onChange: handleChangeLeftRowCheckbox,
        onClick: handleClick,
        isCollapsable,
        isFormDisabled,
        label,
        someChecked: hasSomeActionsSelected,
        value: hasAllActionsSelected,
        isActive
      },
      required && /* @__PURE__ */ react.createElement(components_RequiredSign, null),
      /* @__PURE__ */ react.createElement(CollapsePropertyMatrix_CarretIcon, { $isActive: isActive })
    ), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, propertyActions.map(({ label: label2, isActionRelatedToCurrentProperty, actionId }) => {
      if (!isActionRelatedToCurrentProperty) {
        return /* @__PURE__ */ react.createElement(components_HiddenAction, { key: label2 });
      }
      const checkboxName = [
        ...pathToData.split(".."),
        actionId,
        "properties",
        propertyName,
        name
      ];
      if (!isCollapsable) {
        const checkboxValue = get_default()(modifiedData, checkboxName, false);
        return /* @__PURE__ */ react.createElement(ActionRow_Cell, { key: actionId, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ react.createElement(
          BaseCheckbox/* BaseCheckbox */.C,
          {
            disabled: isFormDisabled,
            name: checkboxName.join(".."),
            "aria-label": formatMessage(
              {
                id: `Settings.permissions.select-by-permission`,
                defaultMessage: "Select {label} permission"
              },
              { label: `${name} ${label2}` }
            ),
            onValueChange: (value) => {
              onChangeSimpleCheckbox({
                target: {
                  name: checkboxName.join(".."),
                  value
                }
              });
            },
            value: checkboxValue
          }
        ));
      }
      const data = get_default()(modifiedData, checkboxName, {});
      const { hasAllActionsSelected: hasAllActionsSelected2, hasSomeActionsSelected: hasSomeActionsSelected2 } = utils_getCheckboxState(data);
      return /* @__PURE__ */ react.createElement(ActionRow_Cell, { key: label2, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          disabled: isFormDisabled,
          name: checkboxName.join(".."),
          onValueChange: (value) => {
            onChangeParentCheckbox({
              target: {
                name: checkboxName.join(".."),
                value
              }
            });
          },
          "aria-label": formatMessage(
            {
              id: `Settings.permissions.select-by-permission`,
              defaultMessage: "Select {label} permission"
            },
            { label: `${name} ${label2}` }
          ),
          value: hasAllActionsSelected2,
          indeterminate: hasSomeActionsSelected2
        }
      ));
    })))
  ), isActive && /* @__PURE__ */ react.createElement(
    CollapsePropertyMatrix_SubActionRow,
    {
      childrenForm: recursiveChildren,
      isFormDisabled,
      parentName: name,
      pathToDataFromActionRow: pathToData,
      propertyName,
      propertyActions,
      recursiveLevel: 0
    }
  ));
};
ActionRow_ActionRow.defaultProps = {
  childrenForm: [],
  required: false
};
ActionRow_ActionRow.propTypes = {
  childrenForm: (prop_types_default()).array,
  label: (prop_types_default()).string.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  name: (prop_types_default()).string.isRequired,
  pathToData: (prop_types_default()).string.isRequired,
  propertyActions: (prop_types_default()).array.isRequired,
  propertyName: (prop_types_default()).string.isRequired,
  required: (prop_types_default()).bool,
  isOdd: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const CollapsePropertyMatrix_ActionRow = ((0,react.memo)(ActionRow_ActionRow));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/CollapsePropertyMatrix/index.js







const CollapsePropertyMatrix_Wrapper = styled_components_browser_esm/* default.div */.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`;
const CollapsePropertyMatrix = ({
  availableActions,
  childrenForm,
  isFormDisabled,
  label,
  pathToData,
  propertyName
}) => {
  const propertyActions = (0,react.useMemo)(
    () => utils_generateHeadersFromActions(availableActions, propertyName),
    [availableActions, propertyName]
  );
  return /* @__PURE__ */ react.createElement(CollapsePropertyMatrix_Wrapper, null, /* @__PURE__ */ react.createElement(CollapsePropertyMatrix_Header, { label, headers: propertyActions }), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, childrenForm.map(({ children: childrenForm2, label: label2, value, required }, i) => /* @__PURE__ */ react.createElement(
    CollapsePropertyMatrix_ActionRow,
    {
      childrenForm: childrenForm2,
      key: value,
      label: label2,
      isFormDisabled,
      name: value,
      required,
      propertyActions,
      pathToData,
      propertyName,
      isOdd: i % 2 === 0
    }
  ))));
};
CollapsePropertyMatrix.propTypes = {
  childrenForm: (prop_types_default()).array.isRequired,
  availableActions: (prop_types_default()).array.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  label: (prop_types_default()).string.isRequired,
  pathToData: (prop_types_default()).string.isRequired,
  propertyName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ContentTypeCollapse_CollapsePropertyMatrix = (CollapsePropertyMatrix);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapse/index.js






const ContentTypeCollapse_Wrapper = styled_components_browser_esm/* default.div */.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({ theme, isActive }) => isActive && `border: 1px solid ${theme.colors.primary600};`}
`;
const ContentTypeCollapse = ({
  allActions,
  contentTypeName,
  label,
  index,
  isActive,
  isFormDisabled,
  onClickToggleCollapse,
  pathToData,
  properties
}) => {
  const handleClickToggleCollapse = (0,react.useCallback)(() => {
    onClickToggleCollapse(contentTypeName);
  }, [contentTypeName, onClickToggleCollapse]);
  const availableActions = (0,react.useMemo)(() => {
    return utils_getAvailableActions(allActions, contentTypeName);
  }, [allActions, contentTypeName]);
  return /* @__PURE__ */ react.createElement(ContentTypeCollapse_Wrapper, { isActive }, /* @__PURE__ */ react.createElement(
    ContentTypeCollapse_Collapse,
    {
      availableActions,
      isActive,
      isGrey: index % 2 === 0,
      isFormDisabled,
      label,
      onClickToggle: handleClickToggleCollapse,
      pathToData
    }
  ), isActive && properties.map(({ label: propertyLabel, value, children: childrenForm }) => {
    return /* @__PURE__ */ react.createElement(
      ContentTypeCollapse_CollapsePropertyMatrix,
      {
        availableActions,
        childrenForm,
        isFormDisabled,
        label: propertyLabel,
        pathToData,
        propertyName: value,
        key: value
      }
    );
  }));
};
ContentTypeCollapse.propTypes = {
  allActions: (prop_types_default()).array.isRequired,
  contentTypeName: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  isActive: (prop_types_default()).bool.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  label: (prop_types_default()).string.isRequired,
  onClickToggleCollapse: (prop_types_default()).func.isRequired,
  pathToData: (prop_types_default()).string.isRequired,
  properties: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_ContentTypeCollapse = (ContentTypeCollapse);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypeCollapses/index.js



const ContentTypeCollapses = ({ actions, isFormDisabled, pathToData, subjects }) => {
  const [collapseToOpen, setCollapseToOpen] = (0,react.useState)(null);
  const handleClickToggleCollapse = (collapseName) => {
    const nextCollapseToOpen = collapseToOpen === collapseName ? null : collapseName;
    setCollapseToOpen(nextCollapseToOpen);
  };
  return subjects.map(({ uid, label, properties }, index) => {
    return /* @__PURE__ */ react.createElement(
      components_ContentTypeCollapse,
      {
        allActions: actions,
        key: uid,
        contentTypeName: uid,
        label,
        isActive: collapseToOpen === uid,
        isFormDisabled,
        index,
        onClickToggleCollapse: handleClickToggleCollapse,
        pathToData: `${pathToData}..${uid}`,
        properties
      }
    );
  });
};
ContentTypeCollapses.defaultProps = {
  actions: [],
  subjects: []
};
ContentTypeCollapses.propTypes = {
  actions: (prop_types_default()).array.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  pathToData: (prop_types_default()).string.isRequired,
  subjects: prop_types_default().arrayOf(
    prop_types_default().shape({
      uid: (prop_types_default()).string.isRequired,
      label: (prop_types_default()).string.isRequired,
      properties: (prop_types_default()).array.isRequired
    })
  )
};
/* harmony default export */ const components_ContentTypeCollapses = ((0,react.memo)(ContentTypeCollapses));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/GlobalActions/utils/findDisplayedActions.js
const findDisplayedActions = (actions) => actions.filter(({ subjects }) => subjects && subjects.length);
/* harmony default export */ const utils_findDisplayedActions = (findDisplayedActions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/GlobalActions/utils/getRowLabelCheckboxesState.js


const getActionsIds = (array) => array.map(({ actionId }) => actionId);
const getRelatedActionIdData = (actionIdArray, dataObj) => {
  return actionIdArray.reduce((acc, actionId) => {
    Object.keys(dataObj).forEach((ctUid) => {
      const actionIdData = get_default()(dataObj, [ctUid, actionId], {});
      const actionIdState = { [ctUid]: utils_removeConditionKeyFromData(actionIdData) };
      if (!acc[actionId]) {
        acc[actionId] = actionIdState;
      } else {
        acc[actionId] = { ...acc[actionId], ...actionIdState };
      }
    });
    return acc;
  }, {});
};
const getCheckboxesState = (properties, modifiedData) => {
  const actionsIds = getActionsIds(properties);
  const relatedActionsData = getRelatedActionIdData(actionsIds, modifiedData);
  const checkboxesState = Object.keys(relatedActionsData).reduce((acc, current) => {
    acc[current] = utils_getCheckboxState(relatedActionsData[current]);
    return acc;
  }, {});
  return checkboxesState;
};
/* harmony default export */ const getRowLabelCheckboxesState = (getCheckboxesState);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/GlobalActions/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/GlobalActions/index.js









const CenteredStack = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  width: ${cellWidth};
  flex-shrink: 0;
`;
const GlobalActions = ({ actions, isFormDisabled, kind }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { modifiedData, onChangeCollectionTypeGlobalActionCheckbox } = (0,hooks/* usePermissionsDataManager */.$_)();
  const displayedActions = (0,react.useMemo)(() => {
    return utils_findDisplayedActions(actions);
  }, [actions]);
  const checkboxesState = (0,react.useMemo)(() => {
    return getRowLabelCheckboxesState(displayedActions, modifiedData[kind]);
  }, [modifiedData, displayedActions, kind]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 4, paddingTop: 6, style: { paddingLeft: firstRowWidth } }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 0 }, displayedActions.map(({ label, actionId }) => {
    return /* @__PURE__ */ react.createElement(
      CenteredStack,
      {
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        key: actionId,
        gap: 3
      },
      /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral500" }, formatMessage({
        id: `Settings.roles.form.permissions.${label.toLowerCase()}`,
        defaultMessage: label
      })),
      /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          disabled: isFormDisabled,
          onValueChange: (value) => {
            onChangeCollectionTypeGlobalActionCheckbox(kind, actionId, value);
          },
          name: actionId,
          "aria-label": formatMessage(
            {
              id: `Settings.permissions.select-all-by-permission`,
              defaultMessage: "Select all {label} permissions"
            },
            {
              label: formatMessage({
                id: `Settings.roles.form.permissions.${label.toLowerCase()}`,
                defaultMessage: label
              })
            }
          ),
          value: get_default()(checkboxesState, [actionId, "hasAllActionsSelected"], false),
          indeterminate: get_default()(checkboxesState, [actionId, "hasSomeActionsSelected"], false)
        }
      )
    );
  })));
};
GlobalActions.defaultProps = {
  actions: []
};
GlobalActions.propTypes = {
  actions: prop_types_default().arrayOf(
    prop_types_default().shape({
      label: (prop_types_default()).string.isRequired,
      actionId: (prop_types_default()).string.isRequired,
      subjects: (prop_types_default()).array.isRequired
    })
  ),
  isFormDisabled: (prop_types_default()).bool.isRequired,
  kind: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_GlobalActions = ((0,react.memo)(GlobalActions));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/ContentTypes/index.js







const ContentTypes_StyledBox = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  overflow-x: auto;
`;
const ContentTypes = ({ isFormDisabled, kind, layout: { actions, subjects } }) => {
  const sortedSubjects = sortBy_default()([...subjects], "label");
  return /* @__PURE__ */ react.createElement(ContentTypes_StyledBox, { background: "neutral0" }, /* @__PURE__ */ react.createElement(components_GlobalActions, { actions, kind, isFormDisabled }), /* @__PURE__ */ react.createElement(
    components_ContentTypeCollapses,
    {
      actions,
      isFormDisabled,
      pathToData: kind,
      subjects: sortedSubjects
    }
  ));
};
ContentTypes.propTypes = {
  isFormDisabled: (prop_types_default()).bool.isRequired,
  kind: (prop_types_default()).string.isRequired,
  layout: prop_types_default().shape({
    actions: (prop_types_default()).array,
    subjects: prop_types_default().arrayOf(
      prop_types_default().shape({
        uid: (prop_types_default()).string.isRequired,
        label: (prop_types_default()).string.isRequired,
        properties: (prop_types_default()).array.isRequired
      })
    )
  }).isRequired
};
/* harmony default export */ const components_ContentTypes = ((0,react.memo)(ContentTypes));

// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 4 modules
var contexts = __webpack_require__(47713);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PermissionsDataManagerProvider/index.js



const PermissionsDataManagerProvider = ({ children, value }) => {
  return /* @__PURE__ */ react.createElement(contexts/* PermissionsDataManagerContext.Provider */.$l.Provider, { value }, children);
};
PermissionsDataManagerProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  value: prop_types_default().exact({
    availableConditions: (prop_types_default()).array.isRequired,
    modifiedData: (prop_types_default()).object.isRequired,
    onChangeCollectionTypeLeftActionRowCheckbox: (prop_types_default()).func.isRequired,
    onChangeConditions: (prop_types_default()).func.isRequired,
    onChangeSimpleCheckbox: (prop_types_default()).func.isRequired,
    onChangeParentCheckbox: (prop_types_default()).func.isRequired,
    onChangeCollectionTypeGlobalActionCheckbox: (prop_types_default()).func.isRequired
  }).isRequired
};
/* harmony default export */ const components_PermissionsDataManagerProvider = (PermissionsDataManagerProvider);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(74756);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(63081);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/SubCategory/utils/formatActions.js


const formatActions = (actions, modifiedData, pathToData) => {
  return actions.map((action) => {
    const checkboxName = [...pathToData, action.action, "properties", "enabled"];
    const checkboxValue = get_default()(modifiedData, checkboxName, false);
    const conditionValue = get_default()(modifiedData, [...pathToData, action.action, "conditions"], {});
    const hasConditions = utils_createArrayOfValues(conditionValue).some((val) => val);
    return {
      ...action,
      isDisplayed: checkboxValue,
      checkboxName: checkboxName.join(".."),
      hasSomeActionsSelected: checkboxValue,
      value: checkboxValue,
      hasConditions,
      label: action.displayName,
      actionId: action.action,
      pathToConditionsObject: [...pathToData, action.action]
    };
  });
};
/* harmony default export */ const utils_formatActions = (formatActions);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/SubCategory/utils/getConditionsButtonState.js

const getConditionsButtonState = (valueObj) => {
  const relatedData = Object.entries(valueObj).reduce((acc, current) => {
    const [catName, { conditions }] = current;
    acc[catName] = conditions;
    return acc;
  }, {});
  const arrayOfValues = utils_createArrayOfValues(relatedData);
  return arrayOfValues.some((val) => val);
};
/* harmony default export */ const utils_getConditionsButtonState = (getConditionsButtonState);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/SubCategory/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/SubCategory/index.js











const Border = styled_components_browser_esm/* default.div */.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const CheckboxWrapper = styled_components_browser_esm/* default.div */.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({ hasConditions, disabled, theme }) => hasConditions && `
    &:before {
      content: '';
      position: absolute;
      top: ${-4 / 16}rem;
      left: ${-8 / 16}rem;
      width: ${6 / 16}rem;
      height: ${6 / 16}rem;
      border-radius: ${20 / 16}rem;
      background: ${disabled ? theme.colors.neutral100 : theme.colors.primary600};
    }
  `}
`;
const SubCategory = ({ categoryName, isFormDisabled, subCategoryName, actions, pathToData }) => {
  const [isModalOpen, setModalOpen] = (0,react.useState)(false);
  const { modifiedData, onChangeParentCheckbox, onChangeSimpleCheckbox } = (0,hooks/* usePermissionsDataManager */.$_)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const mainData = get_default()(modifiedData, pathToData, {});
  const dataWithoutCondition = (0,react.useMemo)(() => {
    return Object.keys(mainData).reduce((acc, current) => {
      acc[current] = utils_removeConditionKeyFromData(mainData[current]);
      return acc;
    }, {});
  }, [mainData]);
  const { hasAllActionsSelected, hasSomeActionsSelected } = utils_getCheckboxState(dataWithoutCondition);
  const handleToggleModalIsOpen = () => {
    setModalOpen((s) => !s);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const formattedActions = utils_formatActions(actions, modifiedData, pathToData);
  const doesButtonHasCondition = utils_getConditionsButtonState(get_default()(modifiedData, [...pathToData], {}));
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", alignItems: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, subCategoryName)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      name: pathToData.join(".."),
      disabled: isFormDisabled,
      onValueChange: (value) => {
        onChangeParentCheckbox({
          target: {
            name: pathToData.join(".."),
            value
          }
        });
      },
      indeterminate: hasSomeActionsSelected,
      value: hasAllActionsSelected
    },
    formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
  ))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 2, style: { flex: 1 } }, formattedActions.map(({ checkboxName, value, action, displayName, hasConditions }) => {
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3, key: action }, /* @__PURE__ */ react.createElement(CheckboxWrapper, { disabled: isFormDisabled, hasConditions }, /* @__PURE__ */ react.createElement(
      Checkbox/* Checkbox */.X,
      {
        name: checkboxName,
        disabled: isFormDisabled,
        onValueChange: (value2) => {
          onChangeSimpleCheckbox({
            target: {
              name: checkboxName,
              value: value2
            }
          });
        },
        value
      },
      displayName
    )));
  })), /* @__PURE__ */ react.createElement(
    components_ConditionsButton,
    {
      hasConditions: doesButtonHasCondition,
      onClick: handleToggleModalIsOpen
    }
  ))), isModalOpen && /* @__PURE__ */ react.createElement(
    components_ConditionsModal,
    {
      headerBreadCrumbs: [categoryName, subCategoryName],
      actions: formattedActions,
      isFormDisabled,
      onClosed: handleModalClose,
      onToggle: handleToggleModalIsOpen
    }
  ));
};
SubCategory.propTypes = {
  actions: (prop_types_default()).array.isRequired,
  categoryName: (prop_types_default()).string.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  subCategoryName: (prop_types_default()).string.isRequired,
  pathToData: (prop_types_default()).array.isRequired
};
/* harmony default export */ const PluginsAndSettings_SubCategory = (SubCategory);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/Row/index.js






const PermissionRow = ({
  childrenForm,
  kind,
  name,
  isOpen,
  isFormDisabled,
  isWhite,
  onOpenCategory,
  pathToData
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleClick = () => {
    onOpenCategory(name);
  };
  const categoryName = (0,react.useMemo)(() => {
    const split = name.split("::");
    return split.pop();
  }, [name]);
  return /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded: isOpen,
      onToggle: handleClick,
      id: `accordion-${name}`,
      variant: isWhite ? "primary" : "secondary"
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.B,
      {
        title: upperFirst_default()(categoryName),
        description: `${formatMessage(
          { id: "Settings.permissions.category" },
          { category: categoryName }
        )} ${kind === "plugins" ? "plugin" : kind}`
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 6 }, childrenForm.map(({ actions, subCategoryName, subCategoryId }) => /* @__PURE__ */ react.createElement(
      PluginsAndSettings_SubCategory,
      {
        key: subCategoryName,
        actions,
        categoryName,
        isFormDisabled,
        subCategoryName,
        pathToData: [...pathToData, subCategoryId]
      }
    ))))
  );
};
PermissionRow.defaultProps = {};
PermissionRow.propTypes = {
  childrenForm: (prop_types_default()).array.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  isWhite: (prop_types_default()).bool.isRequired,
  kind: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onOpenCategory: (prop_types_default()).func.isRequired,
  pathToData: (prop_types_default()).array.isRequired
};
/* harmony default export */ const Row = (PermissionRow);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/PluginsAndSettings/index.js




const PluginsAndSettingsPermissions = ({ isFormDisabled, kind, layout }) => {
  const [openedCategory, setOpenedCategory] = (0,react.useState)(null);
  const handleOpenCategory = (categoryName) => {
    setOpenedCategory(categoryName === openedCategory ? null : categoryName);
  };
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 6, background: "neutral0" }, layout.map(({ category, categoryId, childrenForm }, index) => {
    return /* @__PURE__ */ react.createElement(
      Row,
      {
        key: category,
        childrenForm,
        kind,
        isFormDisabled,
        isOpen: openedCategory === category,
        isWhite: index % 2 === 1,
        name: category,
        onOpenCategory: handleOpenCategory,
        pathToData: [kind, categoryId]
      }
    );
  }));
};
PluginsAndSettingsPermissions.propTypes = {
  isFormDisabled: (prop_types_default()).bool.isRequired,
  kind: (prop_types_default()).string.isRequired,
  layout: prop_types_default().arrayOf(
    prop_types_default().shape({
      category: (prop_types_default()).string.isRequired,
      categoryId: (prop_types_default()).string.isRequired,
      childrenForm: prop_types_default().arrayOf(
        prop_types_default().shape({
          actions: (prop_types_default()).array.isRequired
        })
      ).isRequired
    }).isRequired
  ).isRequired
};
/* harmony default export */ const PluginsAndSettings = (PluginsAndSettingsPermissions);

// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(82492);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/findMatchingPermissions.js
const findMatchingPermission = (permissions, action, subject) => permissions.find((perm) => perm.action === action && perm.subject === subject);
/* harmony default export */ const findMatchingPermissions = (findMatchingPermission);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/createDefaultCTFormFromLayout.js





const createDefaultCTFormFromLayout_createDefaultConditionsForm = (conditions, initialConditions = []) => conditions.reduce((acc, current) => {
  acc[current.id] = initialConditions.indexOf(current.id) !== -1;
  return acc;
}, {});
const createDefaultPropertyForms = ({ children }, propertyValues, prefix = "") => {
  return children.reduce((acc, current) => {
    if (current.children) {
      return {
        ...acc,
        [current.value]: createDefaultPropertyForms(
          current,
          propertyValues,
          `${prefix}${current.value}.`
        )
      };
    }
    const hasProperty = propertyValues.indexOf(`${prefix}${current.value}`) !== -1;
    acc[current.value] = hasProperty;
    return acc;
  }, {});
};
const createDefaultPropertiesForm = (propertiesArray, ctLayout, matchingPermission) => {
  return propertiesArray.reduce(
    (acc, currentPropertyName) => {
      const foundProperty = ctLayout.properties.find(({ value }) => value === currentPropertyName);
      if (foundProperty) {
        const matchingPermissionPropertyValues = get_default()(
          matchingPermission,
          ["properties", foundProperty.value],
          []
        );
        const propertyForm = createDefaultPropertyForms(
          foundProperty,
          matchingPermissionPropertyValues
        );
        acc.properties[currentPropertyName] = propertyForm;
      }
      return acc;
    },
    { properties: {} }
  );
};
const findLayouts = (allLayouts, subjects) => {
  return subjects.reduce((acc, current) => {
    const foundLayout = allLayouts.find(({ uid }) => uid === current) || null;
    if (foundLayout) {
      acc[current] = foundLayout;
    }
    return acc;
  }, {});
};
const createDefaultCTFormFromLayout = ({ subjects }, actionArray, conditionArray, initialPermissions = []) => {
  return actionArray.reduce((defaultForm, current) => {
    const actionSubjects = current.subjects;
    const subjectLayouts = findLayouts(subjects, actionSubjects);
    if (isEmpty_default()(subjectLayouts)) {
      return defaultForm;
    }
    const contentTypesActions = Object.keys(subjectLayouts).reduce((acc, currentCTUID) => {
      const { actionId, applyToProperties } = current;
      const currentSubjectLayout = subjectLayouts[currentCTUID];
      const properties = currentSubjectLayout.properties.map(({ value }) => value);
      const doesNothaveProperty = properties.every(
        (property) => (applyToProperties || []).indexOf(property) === -1
      );
      const matchingPermission = findMatchingPermissions(initialPermissions, actionId, currentCTUID);
      const conditionsForm = createDefaultCTFormFromLayout_createDefaultConditionsForm(
        conditionArray,
        get_default()(matchingPermission, "conditions", [])
      );
      if (isEmpty_default()(applyToProperties) || doesNothaveProperty) {
        set_default()(acc, [currentCTUID, actionId], {
          properties: {
            enabled: matchingPermission !== void 0
          },
          conditions: conditionsForm
        });
        return acc;
      }
      const propertiesForm = createDefaultPropertiesForm(
        applyToProperties,
        subjectLayouts[currentCTUID],
        matchingPermission
      );
      set_default()(acc, [currentCTUID, actionId], { ...propertiesForm, conditions: conditionsForm });
      return acc;
    }, {});
    return merge_default()(defaultForm, contentTypesActions);
  }, {});
};
/* harmony default export */ const utils_createDefaultCTFormFromLayout = (createDefaultCTFormFromLayout);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/createDefaultPluginsFormFromLayout.js


const createSubCategoryForm = (actions, conditions, permissions) => {
  return actions.reduce((acc, current) => {
    const foundMatchingPermission = findMatchingPermissions(permissions, current.action, null);
    acc[current.action] = {
      properties: {
        enabled: foundMatchingPermission !== void 0
      },
      conditions: createDefaultCTFormFromLayout_createDefaultConditionsForm(
        conditions,
        foundMatchingPermission?.conditions ?? []
      )
    };
    return acc;
  }, {});
};
const createChildrenDefaultForm = (childrenForm, conditions, initialPermissions) => {
  return childrenForm.reduce((acc, current) => {
    acc[current.subCategoryId] = createSubCategoryForm(
      current.actions,
      conditions,
      initialPermissions
    );
    return acc;
  }, {});
};
const createDefaultPluginsFormFromLayout = (pluginsLayout, conditions, initialPermissions = []) => {
  return pluginsLayout.reduce((acc, { categoryId, childrenForm }) => {
    const childrenDefaultForm = createChildrenDefaultForm(
      childrenForm,
      conditions,
      initialPermissions
    );
    acc[categoryId] = childrenDefaultForm;
    return acc;
  }, {});
};
/* harmony default export */ const utils_createDefaultPluginsFormFromLayout = (createDefaultPluginsFormFromLayout);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/formatLayoutForSettingsAndPlugins.js

const replaceName = (name) => name.split(" ").join("-");
const formatLayout = (layout, groupByKey) => {
  return Object.entries(groupBy_default()(layout, groupByKey)).map(([itemName, item]) => ({
    category: itemName,
    categoryId: replaceName(itemName),
    childrenForm: Object.entries(groupBy_default()(item, "subCategory")).map(
      ([subCategoryName, actions]) => ({
        subCategoryName,
        subCategoryId: replaceName(subCategoryName),
        actions
      })
    )
  }));
};
/* harmony default export */ const formatLayoutForSettingsAndPlugins = (formatLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/init.js



const init = (layout, permissions) => {
  const {
    conditions,
    sections: { collectionTypes, singleTypes, plugins, settings }
  } = layout;
  const layouts = {
    collectionTypes,
    singleTypes,
    plugins: formatLayoutForSettingsAndPlugins(plugins, "plugin"),
    settings: formatLayoutForSettingsAndPlugins(settings, "category")
  };
  const defaultForm = {
    collectionTypes: utils_createDefaultCTFormFromLayout(
      collectionTypes,
      collectionTypes.actions || [],
      conditions,
      permissions
    ),
    singleTypes: utils_createDefaultCTFormFromLayout(
      singleTypes,
      singleTypes.actions || [],
      conditions,
      permissions
    ),
    plugins: utils_createDefaultPluginsFormFromLayout(layouts.plugins, conditions, permissions),
    settings: utils_createDefaultPluginsFormFromLayout(layouts.settings, conditions, permissions)
  };
  return {
    initialData: defaultForm,
    modifiedData: defaultForm,
    layouts
  };
};
/* harmony default export */ const Permissions_init = (init);

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/updateConditionsToFalse.js




const updateConditionsToFalse = (obj) => {
  return Object.keys(obj).reduce((acc, current) => {
    const currentValue = obj[current];
    if (isObject_default()(currentValue) && !has_default()(currentValue, "conditions")) {
      return { ...acc, [current]: updateConditionsToFalse(currentValue) };
    }
    if (isObject_default()(currentValue) && has_default()(currentValue, "conditions")) {
      const isActionEnabled = utils_createArrayOfValues(omit_default()(currentValue, "conditions")).some(
        (val) => val
      );
      if (!isActionEnabled) {
        const updatedConditions = Object.keys(currentValue.conditions).reduce((acc1, current2) => {
          acc1[current2] = false;
          return acc1;
        }, {});
        return { ...acc, [current]: { ...currentValue, conditions: updatedConditions } };
      }
    }
    acc[current] = currentValue;
    return acc;
  }, {});
};
/* harmony default export */ const utils_updateConditionsToFalse = (updateConditionsToFalse);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/updateValues.js

const updateValues = (obj, valueToSet, isFieldUpdate = false) => {
  return Object.keys(obj).reduce((acc, current) => {
    const currentValue = obj[current];
    if (current === "conditions" && !isFieldUpdate) {
      acc[current] = currentValue;
      return acc;
    }
    if (isObject_default()(currentValue)) {
      return { ...acc, [current]: updateValues(currentValue, valueToSet, current === "fields") };
    }
    acc[current] = valueToSet;
    return acc;
  }, {});
};
/* harmony default export */ const utils_updateValues = (updateValues);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/reducer.js








const initialState = {
  initialData: {},
  modifiedData: {},
  layouts: {}
};
const reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX": {
      const { collectionTypeKind, actionId, value } = action;
      const pathToData = ["modifiedData", collectionTypeKind];
      Object.keys(get_default()(state, pathToData)).forEach((collectionType) => {
        const collectionTypeActionData = get_default()(
          state,
          [...pathToData, collectionType, actionId],
          void 0
        );
        if (collectionTypeActionData) {
          let updatedValues = utils_updateValues(collectionTypeActionData, value);
          if (!value && updatedValues.conditions) {
            const updatedConditions = utils_updateValues(updatedValues.conditions, false);
            updatedValues = { ...updatedValues, conditions: updatedConditions };
          }
          set_default()(draftState, [...pathToData, collectionType, actionId], updatedValues);
        }
      });
      break;
    }
    case "ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX": {
      const { pathToCollectionType, propertyName, rowName, value } = action;
      let nextModifiedDataState = cloneDeep_default()(state.modifiedData);
      const pathToModifiedDataCollectionType = pathToCollectionType.split("..");
      const objToUpdate = get_default()(nextModifiedDataState, pathToModifiedDataCollectionType, {});
      Object.keys(objToUpdate).forEach((actionId) => {
        if (has_default()(objToUpdate[actionId], `properties.${propertyName}`)) {
          const objValue = get_default()(objToUpdate, [actionId, "properties", propertyName, rowName]);
          const pathToDataToSet = [
            ...pathToModifiedDataCollectionType,
            actionId,
            "properties",
            propertyName,
            rowName
          ];
          if (!isObject_default()(objValue)) {
            set_default()(nextModifiedDataState, pathToDataToSet, value);
          } else {
            const updatedValue = utils_updateValues(objValue, value);
            set_default()(nextModifiedDataState, pathToDataToSet, updatedValue);
          }
        }
      });
      if (!value) {
        nextModifiedDataState = utils_updateConditionsToFalse(nextModifiedDataState);
      }
      set_default()(draftState, "modifiedData", nextModifiedDataState);
      break;
    }
    case "ON_CHANGE_CONDITIONS": {
      Object.entries(action.conditions).forEach((array) => {
        const [stringPathToData, conditionsToUpdate] = array;
        set_default()(
          draftState,
          ["modifiedData", ...stringPathToData.split(".."), "conditions"],
          conditionsToUpdate
        );
      });
      break;
    }
    case "ON_CHANGE_SIMPLE_CHECKBOX": {
      let nextModifiedDataState = cloneDeep_default()(state.modifiedData);
      set_default()(nextModifiedDataState, [...action.keys.split("..")], action.value);
      if (!action.value) {
        nextModifiedDataState = utils_updateConditionsToFalse(nextModifiedDataState);
      }
      set_default()(draftState, "modifiedData", nextModifiedDataState);
      break;
    }
    case "ON_CHANGE_TOGGLE_PARENT_CHECKBOX": {
      const { keys, value } = action;
      const pathToValue = [...keys.split("..")];
      let nextModifiedDataState = cloneDeep_default()(state.modifiedData);
      const oldValues = get_default()(nextModifiedDataState, pathToValue, {});
      const updatedValues = utils_updateValues(oldValues, value);
      set_default()(nextModifiedDataState, pathToValue, updatedValues);
      if (!value) {
        nextModifiedDataState = utils_updateConditionsToFalse(nextModifiedDataState);
      }
      set_default()(draftState, ["modifiedData"], nextModifiedDataState);
      break;
    }
    case "RESET_FORM": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "SET_FORM_AFTER_SUBMIT": {
      draftState.initialData = state.modifiedData;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const Permissions_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/formatSettingsPermissionsToAPI.js
const createConditionsArray = (conditions) => {
  return Object.entries(conditions).filter(([, conditionValue]) => {
    return conditionValue;
  }).map(([conditionName]) => conditionName);
};
const createPermission = (array) => {
  const [actionName, { conditions }] = array;
  return {
    action: actionName,
    subject: null,
    conditions: createConditionsArray(conditions),
    properties: {}
  };
};
const createPermissionsArrayFromCategory = (categoryPermissions) => {
  return Object.values(categoryPermissions).reduce((acc, current) => {
    const permissions = Object.entries(current).reduce((acc1, current1) => {
      const [
        ,
        {
          properties: { enabled }
        }
      ] = current1;
      if (!enabled) {
        return acc1;
      }
      const permission = createPermission(current1);
      acc1.push(permission);
      return acc1;
    }, []);
    return [...acc, ...permissions];
  }, []);
};
const formatSettingsPermissionsToAPI = (settingsPermissionsObject) => {
  return Object.values(settingsPermissionsObject).reduce((acc, current) => {
    const currentCategoryPermissions = createPermissionsArrayFromCategory(current);
    return [...acc, ...currentCategoryPermissions];
  }, []);
};
/* harmony default export */ const utils_formatSettingsPermissionsToAPI = (formatSettingsPermissionsToAPI);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/formatContentTypesPermissionToAPI.js



const createPropertyArray = (propertyValue, prefix = "") => {
  return Object.entries(propertyValue).reduce((acc, current) => {
    const [name, value] = current;
    if (isObject_default()(value)) {
      return [...acc, ...createPropertyArray(value, `${prefix}${name}.`)];
    }
    if (value && !isObject_default()(value)) {
      acc.push(`${prefix}${name}`);
    }
    return acc;
  }, []);
};
const createPermissionWithProperties = (action, subject, { conditions, properties }) => {
  return Object.entries(properties).reduce(
    (acc, current) => {
      const [propertyName, propertyValue] = current;
      acc.properties[propertyName] = createPropertyArray(propertyValue);
      return acc;
    },
    { action, subject, conditions: createConditionsArray(conditions), properties: {} }
  );
};
const createPermissionWithoutProperties = (action, subject, { conditions }) => {
  return {
    action,
    subject,
    properties: {},
    conditions: createConditionsArray(conditions)
  };
};
const createSubjectPermissions = (subject, actions) => {
  const permissions = Object.entries(actions).reduce((acc, current) => {
    const [actionName, permissions2] = current;
    const shouldCreatePermission = utils_createArrayOfValues(permissions2).some((val) => val);
    if (!shouldCreatePermission) {
      return acc;
    }
    if (!permissions2?.properties?.enabled) {
      const createdPermissionsArray = createPermissionWithProperties(
        actionName,
        subject,
        permissions2
      );
      return [...acc, createdPermissionsArray];
    }
    if (!permissions2.properties.enabled) {
      return acc;
    }
    const permission = createPermissionWithoutProperties(actionName, subject, permissions2);
    acc.push(permission);
    return acc;
  }, []);
  return permissions;
};
const formatContentTypesPermissionToAPI = (contentTypesPermissions) => {
  const permissions = Object.entries(contentTypesPermissions).reduce((allPermissions, current) => {
    const [subject, currentSubjectActions] = current;
    const permissions2 = createSubjectPermissions(subject, currentSubjectActions);
    return [...allPermissions, ...permissions2];
  }, []);
  return permissions;
};
/* harmony default export */ const utils_formatContentTypesPermissionToAPI = (formatContentTypesPermissionToAPI);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/formatPermissionsToAPI.js


const formatPermissionsToAPI = (modifiedData) => {
  const pluginsPermissions = utils_formatSettingsPermissionsToAPI(modifiedData.plugins);
  const settingsPermissions = utils_formatSettingsPermissionsToAPI(modifiedData.settings);
  const collectionTypesPermissions = utils_formatContentTypesPermissionToAPI(
    modifiedData.collectionTypes
  );
  const singleTypesPermissions = utils_formatContentTypesPermissionToAPI(modifiedData.singleTypes);
  return [
    ...pluginsPermissions,
    ...settingsPermissions,
    ...collectionTypesPermissions,
    ...singleTypesPermissions
  ];
};
/* harmony default export */ const utils_formatPermissionsToAPI = (formatPermissionsToAPI);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/utils/tabLabels.js
const TAB_LABELS = [
  {
    labelId: "app.components.LeftMenuLinkContainer.collectionTypes",
    defaultMessage: "Collection Types",
    id: "collectionTypes"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.singleTypes",
    id: "singleTypes",
    defaultMessage: "Single Types"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.plugins",
    defaultMessage: "Plugins",
    id: "plugins"
  },
  {
    labelId: "app.components.LeftMenuLinkContainer.settings",
    defaultMessage: "Settings",
    id: "settings"
  }
];
/* harmony default export */ const tabLabels = (TAB_LABELS);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/index.js














const Permissions = (0,react.forwardRef)(({ layout, isFormDisabled, permissions }, ref) => {
  const [{ initialData, layouts, modifiedData }, dispatch] = (0,react.useReducer)(
    Permissions_reducer,
    initialState,
    () => Permissions_init(layout, permissions)
  );
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,react.useImperativeHandle)(ref, () => {
    return {
      getPermissions() {
        const collectionTypesDiff = (0,helper_plugin_esm/* difference */.e5)(
          initialData.collectionTypes,
          modifiedData.collectionTypes
        );
        const singleTypesDiff = (0,helper_plugin_esm/* difference */.e5)(initialData.singleTypes, modifiedData.singleTypes);
        const contentTypesDiff = { ...collectionTypesDiff, ...singleTypesDiff };
        let didUpdateConditions;
        if (isEmpty_default()(contentTypesDiff)) {
          didUpdateConditions = false;
        } else {
          didUpdateConditions = Object.values(contentTypesDiff).some((permission) => {
            return Object.values(permission).some(
              (permissionValue) => has_default()(permissionValue, "conditions")
            );
          });
        }
        return { permissionsToSend: utils_formatPermissionsToAPI(modifiedData), didUpdateConditions };
      },
      resetForm() {
        dispatch({ type: "RESET_FORM" });
      },
      setFormAfterSubmit() {
        dispatch({ type: "SET_FORM_AFTER_SUBMIT" });
      }
    };
  });
  const handleChangeCollectionTypeLeftActionRowCheckbox = (pathToCollectionType, propertyName, rowName, value) => {
    dispatch({
      type: "ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",
      pathToCollectionType,
      propertyName,
      rowName,
      value
    });
  };
  const handleChangeCollectionTypeGlobalActionCheckbox = (collectionTypeKind, actionId, value) => {
    dispatch({
      type: "ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",
      collectionTypeKind,
      actionId,
      value
    });
  };
  const handleChangeConditions = (conditions) => {
    dispatch({ type: "ON_CHANGE_CONDITIONS", conditions });
  };
  const handleChangeSimpleCheckbox = (0,react.useCallback)(({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_SIMPLE_CHECKBOX",
      keys: name,
      value
    });
  }, []);
  const handleChangeParentCheckbox = (0,react.useCallback)(({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_TOGGLE_PARENT_CHECKBOX",
      keys: name,
      value
    });
  }, []);
  return /* @__PURE__ */ react.createElement(
    components_PermissionsDataManagerProvider,
    {
      value: {
        availableConditions: layout.conditions,
        modifiedData,
        onChangeConditions: handleChangeConditions,
        onChangeSimpleCheckbox: handleChangeSimpleCheckbox,
        onChangeParentCheckbox: handleChangeParentCheckbox,
        onChangeCollectionTypeLeftActionRowCheckbox: handleChangeCollectionTypeLeftActionRowCheckbox,
        onChangeCollectionTypeGlobalActionCheckbox: handleChangeCollectionTypeGlobalActionCheckbox
      }
    },
    /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.v,
      {
        id: "tabs",
        label: formatMessage({
          id: "Settings.permissions.users.tabs.label",
          defaultMessage: "Tabs Permissions"
        })
      },
      /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, tabLabels.map((tabLabel) => /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, { key: tabLabel.id }, formatMessage({ id: tabLabel.labelId, defaultMessage: tabLabel.defaultMessage })))),
      /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, { style: { position: "relative" } }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
        components_ContentTypes,
        {
          layout: layouts.collectionTypes,
          kind: "collectionTypes",
          isFormDisabled
        }
      )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
        components_ContentTypes,
        {
          layout: layouts.singleTypes,
          kind: "singleTypes",
          isFormDisabled
        }
      )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
        PluginsAndSettings,
        {
          layout: layouts.plugins,
          kind: "plugins",
          isFormDisabled
        }
      )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
        PluginsAndSettings,
        {
          layout: layouts.settings,
          kind: "settings",
          isFormDisabled
        }
      )))
    )
  );
});
Permissions.defaultProps = {
  permissions: [],
  layout: {
    conditions: [],
    sections: {
      collectionTypes: {},
      singleTypes: {
        actions: []
      },
      settings: [],
      plugins: []
    }
  }
};
Permissions.propTypes = {
  layout: (prop_types_default()).object,
  isFormDisabled: (prop_types_default()).bool.isRequired,
  permissions: (prop_types_default()).array
};
/* harmony default export */ const components_Permissions = ((0,react.memo)(Permissions));


/***/ }),

/***/ 92100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Roles_ProtectedEditPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 15 modules
var helper_plugin_esm = __webpack_require__(41647);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var src_permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/Permissions/index.js + 53 modules
var Permissions = __webpack_require__(18280);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js
var Textarea = __webpack_require__(61467);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/RoleForm/index.js




const RoleForm = ({ disabled, role, values, errors, onChange, onBlur }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, role ? role.name : formatMessage({
    id: "global.details",
    defaultMessage: "Details"
  }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral500", variant: "pi" }, role ? role.description : formatMessage({
    id: "Settings.roles.form.description",
    defaultMessage: "Name and description of the role"
  })))), /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: true, variant: "secondary" }, formatMessage(
    {
      id: "Settings.roles.form.button.users-with-role",
      defaultMessage: "{number, plural, =0 {# users} one {# user} other {# users}} with this role"
    },
    { number: role.usersCount }
  ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      disabled,
      name: "name",
      error: errors.name && formatMessage({ id: errors.name }),
      label: formatMessage({
        id: "global.name",
        defaultMessage: "Name"
      }),
      onChange,
      onBlur,
      value: values.name || ""
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Textarea/* Textarea */.g,
    {
      disabled,
      label: formatMessage({
        id: "global.description",
        defaultMessage: "Description"
      }),
      id: "description",
      error: errors.name && formatMessage({ id: errors.name }),
      onChange,
      onBlur
    },
    values.description || ""
  )))));
};
RoleForm.defaultProps = {
  disabled: false,
  role: null,
  values: { name: "", description: "" }
};
RoleForm.propTypes = {
  disabled: (prop_types_default()).bool,
  errors: (prop_types_default()).object.isRequired,
  onBlur: (prop_types_default()).func.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  role: (prop_types_default()).object,
  values: (prop_types_default()).object
};
/* harmony default export */ const components_RoleForm = (RoleForm);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/components/index.js



// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/utils/schema.js


const schema = es/* object */.Ry().shape({
  name: es/* string */.Z_().required(helper_plugin_esm/* translatedErrors.required */.I0.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/EditPage/index.js











const EditPage = () => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)("/settings/roles/:id");
  const [isSubmitting, setIsSubmiting] = (0,react.useState)(false);
  const permissionsRef = (0,react.useRef)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.o1)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.rS)();
  const { isLoading: isLayoutLoading, data: permissionsLayout } = (0,hooks/* useFetchPermissionsLayout */.U_)(id);
  const {
    role,
    permissions: rolePermissions,
    isLoading: isRoleLoading,
    onSubmitSucceeded
  } = (0,hooks/* useFetchRole */.Dq)(id);
  const { put } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const handleEditRoleSubmit = async (data) => {
    try {
      lockApp();
      setIsSubmiting(true);
      const { permissionsToSend, didUpdateConditions } = permissionsRef.current.getPermissions();
      await put(`/admin/roles/${id}`, data);
      if (role.code !== "strapi-super-admin") {
        await put(`/admin/roles/${id}/permissions`, {
          permissions: permissionsToSend
        });
        if (didUpdateConditions) {
          trackUsage("didUpdateConditions");
        }
      }
      permissionsRef.current.setFormAfterSubmit();
      onSubmitSucceeded({ name: data.name, description: data.description });
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved" }
      });
    } catch (err) {
      console.error(err.response);
      const errorMessage = get_default()(err, "response.payload.message", "An error occured");
      const message = get_default()(err, "response.payload.data.permissions[0]", errorMessage);
      toggleNotification({
        type: "warning",
        message
      });
    } finally {
      setIsSubmiting(false);
      unlockApp();
    }
  };
  const isFormDisabled = role.code === "strapi-super-admin";
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.SL, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      enableReinitialize: true,
      initialValues: {
        name: role.name,
        description: role.description
      },
      onSubmit: handleEditRoleSubmit,
      validationSchema: utils_schema,
      validateOnChange: false
    },
    ({ handleSubmit, values, errors, handleChange, handleBlur }) => /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            disabled: role.code === "strapi-super-admin",
            onClick: handleSubmit,
            loading: isSubmitting,
            size: "L"
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        )),
        title: formatMessage({
          id: "Settings.roles.edit.title",
          defaultMessage: "Edit a role"
        }),
        subtitle: formatMessage({
          id: "Settings.roles.create.description",
          defaultMessage: "Define the rights given to the role"
        }),
        navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/roles" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(
      components_RoleForm,
      {
        isLoading: isRoleLoading,
        disabled: isFormDisabled,
        errors,
        values,
        onChange: handleChange,
        onBlur: handleBlur,
        role
      }
    ), !isLayoutLoading && !isRoleLoading ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(
      Permissions/* default */.Z,
      {
        isFormDisabled,
        permissions: rolePermissions,
        ref: permissionsRef,
        layout: permissionsLayout
      }
    )) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.dO, null)))))
  ));
};
/* harmony default export */ const Roles_EditPage = (EditPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ProtectedEditPage/index.js





const ProtectedEditPage = () => {
  const permissions = (0,react.useMemo)(() => {
    return {
      read: src_permissions/* default.settings.roles.read */.Z.settings.roles.read,
      update: src_permissions/* default.settings.roles.update */.Z.settings.roles.update
    };
  }, []);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,helper_plugin_esm/* useRBAC */.ss)(permissions);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.dO, null);
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.l_, { to: "/" });
  }
  return /* @__PURE__ */ react.createElement(Roles_EditPage, null);
};
/* harmony default export */ const Roles_ProtectedEditPage = (ProtectedEditPage);


/***/ }),

/***/ 44174:
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ 81119:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ 55189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayAggregator = __webpack_require__(44174),
    baseAggregator = __webpack_require__(81119),
    baseIteratee = __webpack_require__(67206),
    isArray = __webpack_require__(1469);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ 42348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY) : [];
}

module.exports = flattenDeep;


/***/ }),

/***/ 7739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(89465),
    createAggregator = __webpack_require__(55189);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),

/***/ 48734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ F),
/* harmony export */   y: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46449);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13819);
/* harmony import */ var _hooks_useId_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2504);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75515);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11047);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41580);








const v = ({ theme: r, expanded: o, variant: t, disabled: i, error: a }) => a ? `1px solid ${r.colors.danger600} !important` : i ? `1px solid ${r.colors.neutral150}` : o ? `1px solid ${r.colors.primary600}` : t === "primary" ? `1px solid ${r.colors.neutral0}` : `1px solid ${r.colors.neutral100}`, j = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z)``, k = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x)`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({ theme: r }) => r.colors.primary600};

    ${j} {
      color: ${({ theme: r, expanded: o }) => o ? void 0 : r.colors.primary700};
    }

    ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
      color: ${({ theme: r, expanded: o }) => o ? void 0 : r.colors.primary600};
    }

    & > ${_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k} {
      background: ${({ theme: r }) => r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({ theme: r }) => r.colors.primary200};
    }
  }
`, F = ({ children: r, disabled: o = !1, error: t, expanded: i = !1, hasErrorMessage: a = !0, id: f, onToggle: s, toggle: c, size: e = "M", variant: d = "primary", shadow: $ }) => {
  const l = (0,_hooks_useId_js__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .M)(f), x = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({ expanded: i, onToggle: s, toggle: c, id: l, size: e, variant: d, disabled: o }), [o, i, l, s, e, c, d]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AccordionContext_js__WEBPACK_IMPORTED_MODULE_7__/* .AccordionContext.Provider */ .S.Provider, { value: x, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(k, { "data-strapi-expanded": i, disabled: o, "aria-disabled": o, expanded: i, hasRadius: !0, variant: d, error: t, shadow: $, children: r }), t && a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x, { paddingTop: 1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, { variant: "pi", textColor: "danger600", children: t }) })] });
};



/***/ }),

/***/ 63081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13819);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);



const p = ({ children: r, ...n }) => {
  const { expanded: i, id: o } = (0,_AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useAccordion */ .A)();
  if (!i)
    return null;
  const c = `accordion-content-${o}`, e = `accordion-label-${o}`, t = `accordion-desc-${o}`;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { role: "region", id: c, "aria-labelledby": e, "aria-describedby": t, ...n, children: r });
};



/***/ }),

/***/ 13819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ r),
/* harmony export */   S: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const t = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  disabled: !1,
  expanded: !1,
  id: "",
  size: "M",
  variant: "primary"
}), r = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(t);



/***/ }),

/***/ 74756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Q)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(13819);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/utils.js
const utils_n = ({ expanded: e, disabled: t, variant: a }) => {
  let r = "neutral100";
  return e ? r = "primary100" : t ? r = "neutral150" : a === "primary" && (r = "neutral0"), r;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(52624);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js










const L = (0,styled_components_browser_esm/* default */.ZP)(TextButton/* TextButton */.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme: o, expanded: e }) => e ? o.colors.primary600 : o.colors.neutral500};
    }
  }
`, P = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  min-height: ${({ theme: o, size: e }) => o.sizes.accordions[e]};
  border-radius: ${({ theme: o, expanded: e }) => e ? `${o.borderRadius} ${o.borderRadius} 0 0` : o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({ theme: o }) => o.colors.primary600};
      }
    }
  }
`, Q = ({ title: o, description: e, as: $ = "span", togglePosition: l = "right", action: g, ...w }) => {
  const { onToggle: s, toggle: m, expanded: r, id: c, size: t, variant: C, disabled: n } = (0,AccordionContext/* useAccordion */.A)(), T = `accordion-content-${c}`, h = `accordion-label-${c}`, k = `accordion-desc-${c}`, a = t === "M" ? 6 : 4, u = t === "M" ? a : a - 2, v = utils_n({ expanded: r, disabled: n, variant: C }), j = {
    as: $,
    fontWeight: t === "S" ? "bold" : void 0,
    id: h,
    textColor: r ? "primary600" : "neutral700",
    ellipsis: !0,
    variant: t === "M" ? "delta" : void 0
  }, z = r ? "primary600" : "neutral600", B = r ? "primary200" : "neutral200", f = t === "M" ? `${32 / 16}rem` : `${24 / 16}rem`, x = () => {
    n || (m && !s ? (console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'), m()) : s && s());
  }, b = (0,jsx_runtime.jsx)(Flex/* Flex */.k, { justifyContent: "center", borderRadius: "50%", height: f, width: f, transform: r ? "rotate(180deg)" : void 0, "data-strapi-dropdown": !0, "aria-hidden": !0, as: "span", background: B, cursor: n ? "not-allowed" : "pointer", onClick: x, shrink: 0, children: (0,jsx_runtime.jsx)(Icon/* Icon */.J, { as: CarretDown/* default */.Z, width: t === "M" ? `${11 / 16}rem` : `${8 / 16}rem`, color: r ? "primary600" : "neutral600" }) });
  return (0,jsx_runtime.jsx)(P, { paddingBottom: u, paddingLeft: a, paddingRight: a, paddingTop: u, background: v, expanded: r, size: t, justifyContent: "space-between", cursor: n ? "not-allowed" : "", children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { gap: 3, flex: 1, maxWidth: "100%", children: [l === "left" && b, (0,jsx_runtime.jsx)(L, { onClick: x, "aria-disabled": n, "aria-expanded": r, "aria-controls": T, "aria-labelledby": h, "data-strapi-accordion-toggle": !0, expanded: r, type: "button", flex: 1, minWidth: 0, ...w, children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Accordion/* AccordionTypography */.y, { ...j, children: o }), e && (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "p", id: k, textColor: z, children: e })] }) }), l === "right" && (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { gap: 3, children: [b, g] }), l === "left" && g] }) });
};



/***/ }),

/***/ 2407:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ h),
/* harmony export */   O: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16405);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46449);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63237);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75515);







const s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)`
  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral500};
    }
  }
  :last-of-type ${_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x} {
    display: none;
  }
  :last-of-type ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
    color: ${({ theme: r }) => r.colors.neutral800};
    font-weight: ${({ theme: r }) => r.fontWeights.bold};
  }
`, h = ({ children: r }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(s, { inline: !0, as: "li", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, { variant: "pi", textColor: "neutral600", children: r }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { "aria-hidden": !0, paddingLeft: 3, paddingRight: 3, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}) })] });
h.displayName = "Crumb";
const c = ({ children: r, label: n, ...a }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k, { ...a, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__/* .VisuallyHidden */ .T, { children: n }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", { "aria-hidden": !0, children: r })] });
c.displayName = "Breadcrumbs";



/***/ }),

/***/ 38953:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46449);
/* harmony import */ var _MultiSelect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67730);



const o = ({ options: a, ...t }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_js__WEBPACK_IMPORTED_MODULE_1__/* .MultiSelect */ .NU, { ...t, children: a.map((e) => "children" in e ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_js__WEBPACK_IMPORTED_MODULE_1__/* .MultiSelectGroup */ .Ab, { label: e.label, values: e.children.map((l) => l.value.toString()), children: e.children.map((l) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, { value: l.value, children: l.label }, l.value)) }, e.label) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_js__WEBPACK_IMPORTED_MODULE_1__/* .MultiSelectOption */ .ML, { value: e.value, children: e.label }, e.value)) }), d = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_MultiSelect_js__WEBPACK_IMPORTED_MODULE_1__/* .MultiSelectOption */ .ML)`
  padding-left: ${({ theme: a }) => a.spaces[7]};
`;



/***/ })

}]);