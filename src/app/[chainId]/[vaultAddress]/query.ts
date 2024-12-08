import { request } from '@/helpers'
import { VaultPageParams } from './types'

const QUERY = ({ vaultAddress, chainId }: VaultPageParams) => `query VaulyData {
    vaultByAddress(address: "${vaultAddress}" chainId: ${chainId}) {
      metadata {
        image
        curators {
          name
        }
      }
      name
      whitelisted
      state {
        owner
        totalAssetsUsd
        netApy
      }
    }
  }`

export async function gatVault(variables: VaultPageParams) {
  try {
    const res = await request({ query: QUERY(variables) })
    const result = await res.json()
    return result?.data?.vaultByAddress || {}
  } catch (e) {
    console.error(e)
    return {}
  }
}
