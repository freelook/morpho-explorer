import Link from 'next/link'
import { Button, Flex } from '@radix-ui/themes'

export default function NotFound() {
  return (
    <Flex direction="column" align="center" gap="8px">
      <h3>Not Found</h3>
      <p>We could not find the page you were looking for.</p>
      <Link href="/">
        <Button size="3" radius="full">
          Try again
        </Button>
      </Link>
    </Flex>
  )
}
