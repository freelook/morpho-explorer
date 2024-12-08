import { Flex, Text } from '@radix-ui/themes'
import styles from './VaultDetailsRow.module.css'

export const VaultDetailsRow = ({
  title,
  body
}: Readonly<{ title: string; body: React.ReactNode }>) => {
  return (
    <Flex direction="column" gap="4px" width="100%">
      <Text className={styles.title} size="3">
        {title}
      </Text>
      <Text className={styles.body} size="2">
        {body}
      </Text>
    </Flex>
  )
}
