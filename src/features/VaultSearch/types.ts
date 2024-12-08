import { Address } from 'viem'

export type VaultType = {
  name: string
  chain: { id: number }
  address: Address
  metadata: { image: string }
}
