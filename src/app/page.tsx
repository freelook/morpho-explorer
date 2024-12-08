import { Box } from '@radix-ui/themes'
import { VaultSearch } from '@/features/VaultSearch'

export async function generateStaticParams() {
  /* static options here */
  return []
}

export default function SearchPage() {
  return (
    <Box>
      <VaultSearch />
    </Box>
  )
}
