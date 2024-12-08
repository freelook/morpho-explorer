'use client'

import { useForm } from '@tanstack/react-form'
import { Section } from '@/components/Section'
import { VaultSearchInput } from './components'
import styles from './VaultSearch.module.css'

export const VaultSearch = () => {
  const form = useForm({
    defaultValues: {
      searchInput: ''
    }
  })

  return (
    <Section className={styles.card}>
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <form.Field name="searchInput" asyncDebounceMs={500}>
          {field => <VaultSearchInput field={field} />}
        </form.Field>
      </form>
    </Section>
  )
}
