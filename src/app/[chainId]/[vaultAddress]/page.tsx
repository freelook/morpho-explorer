import { Box } from '@radix-ui/themes'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { VaultDetails } from '@/features/VaultDetails'
import { gatVault } from './query'
import { VaultPageParams } from './types'

export default async function VaultPage({ params }: { params: Promise<VaultPageParams> }) {
  const { chainId, vaultAddress } = await params

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['vault', chainId, vaultAddress],
    queryFn: () => gatVault({ chainId, vaultAddress })
  })

  return (
    <Box>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <VaultDetails {...{ chainId, vaultAddress }} />
      </HydrationBoundary>
    </Box>
  )
}
