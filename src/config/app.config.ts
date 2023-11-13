interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Team',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Edit your customer information',
    'Manage car sharing bookings',
    'View car information',
    'View your bookings',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage team information',
    'Manage business information',
    'Manage car sharing information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/0717516f-a517-413f-b5a8-d2443f325957',
};
