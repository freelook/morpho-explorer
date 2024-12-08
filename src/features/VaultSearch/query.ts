import { Address, isAddress } from 'viem'
import { request } from '@/helpers'

const QUERY_BY_NAME = (searchInput: string) => `query VaultSearchByName {
    vaults(first: 10 where:{
      whitelisted: true,
      search: "${searchInput}"
    }) {
      items {
        address
        chain {
          id
        }
        metadata {
          image
        }
        name
      }
    }
}`

const QUERY_BY_ADDRESS = (address: Address) => `query VaultSearchByFullAddress {
  vaults(first: 10 where:{
    whitelisted: true,
		address_in: ["${address}"]
  }) {
    items {
      address
      chain {
        id
      }
      metadata {
        image
      }
      name
    }
  }
}`

export const getVaults = async (searchInput: string) => {
  try {
    const res = await request({
      query: isAddress(searchInput) ? QUERY_BY_ADDRESS(searchInput) : QUERY_BY_NAME(searchInput)
    })
    const result = await res.json()
    return result?.data?.vaults?.items || []
  } catch (e) {
    console.error(e)
    return []
  }
}
