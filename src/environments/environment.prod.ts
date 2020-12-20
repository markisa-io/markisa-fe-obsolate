import { Environment } from '@abp/ng.core';

const baseUrl = 'https://dev-markisa.inveeu.com';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Markisa',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://api.dev-markisa.inveeu.com',
    redirectUri: baseUrl,
    clientId: 'Markisa_App',
    responseType: 'code',
    scope: 'offline_access Markisa',
    strictDiscoveryDocumentValidation: false
  },
  apis: {
    default: {
      url: 'https://api.dev-markisa.inveeu.com',
      rootNamespace: 'Markisa',
    },
  },
} as Environment;
