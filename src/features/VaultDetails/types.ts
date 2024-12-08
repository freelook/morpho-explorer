import { Address } from 'viem'

export type VaultDetails = {
  metadata: {
    image: string
    curators: string[]
  }
  name: string
  whitelisted: boolean
  state: {
    owner: Address
    totalAssetsUsd: number
    netApy: number
  }
}

export interface VaultDetailsProps {
  chainId: string
  vaultAddress: string
}

export type ExpectedChain = 1 | 8453
