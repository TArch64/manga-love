import { OperationVariables, QueryOptions } from 'apollo-client';
import { Ref, useAsync } from '@nuxtjs/composition-api';
import { useQuery } from './use-query';

export function useQueryAsync<Result, Variables = OperationVariables>(options: QueryOptions): Ref<Result | null> {
    return useAsync<Result | null>(() => useQuery<Result>(options).catch(() => null));
}
