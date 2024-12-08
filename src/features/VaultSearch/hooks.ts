import { useQuery } from '@tanstack/react-query'
import { getVaults } from './query'

export const useVaults = (searchInput: string) => {
  return useQuery({
    queryKey: ['vaults', searchInput],
    enabled: !!searchInput,
    queryFn: () => getVaults(searchInput)
  })
}
