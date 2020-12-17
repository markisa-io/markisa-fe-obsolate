import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Markisa',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44372',
    redirectUri: baseUrl,
    clientId: 'Markisa_App',
    responseType: 'code',
    scope: 'offline_access Markisa',
  },
  apis: {
    default: {
      url: 'https://localhost:44372',
      rootNamespace: 'Markisa',
    },
  },
} as Environment;
