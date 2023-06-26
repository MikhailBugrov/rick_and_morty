import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMemo, useCallback } from 'react';
import QueryString from 'qs';

export const useQueryStringParams = <T extends { page: number }>(): [T, (params: Partial<T>) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedParams = useMemo(() => QueryString.parse(searchParams.toString()) as Partial<T>, [searchParams]);

  const listSearchParams = useMemo(() => ({
    ...parsedParams,
    page: Number(parsedParams.page || 1),
  }) as T, [parsedParams]);

  const updateSearchParams = useCallback((params: Partial<T>) => {
    const newSearchParams = { ...parsedParams, ...params };
    const nonEmptyParams = Object.fromEntries(
      Object.entries(newSearchParams).filter(([key, value]) => Boolean(value)),
    );

    setSearchParams(QueryString.stringify(nonEmptyParams));
  }, [parsedParams, setSearchParams]);

  useEffect(() => {
    updateSearchParams(listSearchParams);
  }, [listSearchParams, updateSearchParams]);

  return [listSearchParams, updateSearchParams];
};