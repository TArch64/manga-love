import { QueryOptions, OperationVariables } from 'apollo-client';
import { useApollo } from './use-apollo';

export function useQuery<Result, Variables = OperationVariables>(options: QueryOptions): Promise<Result> {
    return useApollo().query(options).then((result) => result.data);
}
