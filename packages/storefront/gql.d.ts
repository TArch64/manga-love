/* eslint-disable @typescript-eslint/no-duplicate-imports */

declare module '*.gql' {
    import { DocumentNode } from 'graphql';

    const content: DocumentNode;
    export default content;
}

declare module '*.graphql' {
    import { DocumentNode } from 'graphql';

    const content: DocumentNode;
    export default content;
}
