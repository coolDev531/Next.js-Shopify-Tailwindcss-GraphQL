export const appInstallationQuery = /* GraphQL */ `
  query getAppInstallation {
    appInstallation {
      accessScopes {
        handle
      }
      activeSubscriptions {
        createdAt
        currentPeriodEnd
        id
        name
        returnUrl
        status
        test
        trialDays
      }
    }
  }
`;
