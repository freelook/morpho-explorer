import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Flex, Box, TextField, Spinner } from '@radix-ui/themes'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { FieldApi } from '@tanstack/react-form'
import { ArrowRight } from '@/components/Icons'
import { useOutsideClick } from '@/hooks'
import { VaultType } from '@/features/VaultSearch/types'
import { useVaults } from '@/features/VaultSearch/hooks'
import styles from './VaultSearchInput.module.css'

export const VaultSearchInput = ({
  field
}: Readonly<{
  field: FieldApi<
    {
      searchInput: string
    },
    'searchInput',
    undefined,
    undefined,
    string
  >
}>) => {
  const [searchInput] = useDebounce(field.state.value, 500)
  const [focus, setFocus] = useState(false)
  const { data: vaults, isLoading, isError } = useVaults(searchInput)
  const ref = useOutsideClick(() => setFocus(false))

  return (
    <Flex direction="column" width="100%" gap="8px">
      <Box className={styles.label}>Vault Address</Box>
      <TextField.Root
        ref={ref}
        placeholder="Enter Vault Address or Name..."
        name={field.name}
        color={isError ? 'red' : undefined}
        value={field.state.value}
        onFocus={() => setFocus(true)}
        onBlur={field.handleBlur}
        onChange={e => {
          field.handleChange(e.target.value)
        }}
      >
        <TextField.Slot />
        {isLoading && (
          <TextField.Slot>
            <Spinner />
          </TextField.Slot>
        )}
      </TextField.Root>

      {vaults?.length ? (
        <ul className={clsx([styles.dropdown, { [styles.hidden]: !focus }])}>
          {vaults?.map((vault: VaultType, i: number) => {
            return (
              <li key={i}>
                <Link href={`/${vault.chain.id}/${vault.address}`}>
                  <Flex align="center" justify="between" width="100%">
                    <Flex gap="4px">
                      <Image src={vault.metadata.image} alt={vault.name} width={20} height={20} />
                      {vault.name}
                    </Flex>

                    <ArrowRight />
                  </Flex>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : null}
    </Flex>
  )
}
