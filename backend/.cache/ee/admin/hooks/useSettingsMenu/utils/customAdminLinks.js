import adminPermissions from '../../../../../admin/src/permissions';

const items = [];

if (window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)) {
  items.push({
    intlLabel: { id: 'global.auditLogs', defaultMessage: 'Audit Logs' },
    to: '/settings/audit-logs?pageSize=50&page=1&sort=date:DESC',
    id: 'auditLogs',
    isDisplayed: false,
    permissions: adminPermissions.settings.auditLogs.main,
  });
}

const customAdminLinks = items;

export default customAdminLinks;
