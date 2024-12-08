'use client'

import { Section } from '@/components/Section'
import { useQuery } from '@tanstack/react-query'
import { gatVault } from '@/app/[chainId]/[vaultAddress]/query'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useCallback } from 'react'
import { Box, Flex, Text, Heading, Button } from '@radix-ui/themes'
import { VaultDetailsRow } from './components'
import { extractChain } from 'viem'
import { mainnet, base } from 'viem/chains'
import { useQueryClient } from '@tanstack/react-query'
import { formatAddress, formatAPY, formatUSD } from '@/helpers/format'
import { ArrowLink, ArrowLeftRight } from '@/components/Icons'
import { VaultDetailsProps, ExpectedChain } from './types'
import styles from './VaultDetails.module.css'

export const VaultDetails = ({ chainId, vaultAddress }: Readonly<VaultDetailsProps>) => {
  const { data: vault } = useQuery({
    queryKey: ['vault', chainId, vaultAddress],
    queryFn: () => gatVault({ chainId, vaultAddress })
  })

  const chain = extractChain({
    chains: [mainnet, base],
    id: Number(chainId) as ExpectedChain
  })

  const queryClient = useQueryClient()
  const refresh = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['vault', chainId, vaultAddress] })
  }, [queryClient, chainId, vaultAddress])

  if (!vault?.whitelisted) {
    return notFound()
  }

  return (
    <Section className={styles.card}>
      <Flex width="100%" direction="column" gap="8px">
        <Flex align="center" gap="8px">
          <Image alt={vault?.name} src={vault?.metadata?.image} width={66} height={66} />
          <Flex direction="column" width="100%">
            <Heading className={styles.heading} size="3">
              {vault?.name}
            </Heading>
            <Text className={styles.secondary} size="1">
              {vault?.metadata?.curators?.map(({ name }: { name: string }) => name).join(', ')}
            </Text>
          </Flex>
        </Flex>
        <Box className={styles.divider} />
        <VaultDetailsRow
          title="Total Supply (USD)"
          body={formatUSD(vault?.state?.totalAssetsUsd)}
        />
        <VaultDetailsRow title="Instant Net APY" body={formatAPY(vault?.state?.netApy)} />
        <VaultDetailsRow
          title="Vault Owner"
          body={
            <Link
              className={styles.link}
              href={`${chain?.blockExplorers?.default?.url}/address/${vault?.state?.owner}`}
              target="_blank"
            >
              <Flex align="center" gap="4px">
                {formatAddress(vault?.state?.owner)}
                <ArrowLink />
              </Flex>
            </Link>
          }
        />
        <Flex justify="end">
          <Button className={styles.button} onClick={refresh}>
            <ArrowLeftRight />
          </Button>
        </Flex>
      </Flex>
    </Section>
  )
}
