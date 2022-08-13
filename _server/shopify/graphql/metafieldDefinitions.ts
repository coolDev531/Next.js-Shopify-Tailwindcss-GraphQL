export const metafieldDefinitionsQuery = /* GraphQL */ `
  query metafieldDefinitions($ownerType: MetafieldOwnerType!) {
    metafieldDefinitions(first: 250, ownerType: $ownerType) {
      edges {
        node {
          key
          type {
            name
          }
        }
      }
    }
  }
`;
