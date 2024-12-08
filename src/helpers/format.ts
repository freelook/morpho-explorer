import { type Address } from 'viem'
import numeral from 'numeral'

export const formatUSD = (value: string | number) => {
  return ['$', numeral(value).format('0.[00]a')].join('')
}

export const formatAPY = (apy: string | number) => {
  return [Number(apy).toFixed(2), '%'].join('')
}

export const formatAddress = (address: Address, characters = 5): string => {
  return `${address.substring(0, characters)}...${address.substring(42 - characters)}`
}
