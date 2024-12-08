'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const Provider = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000 // important: to avoid refetching immediately on the client
          }
        }
      })
  )
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
