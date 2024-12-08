import { ENDPOINT } from '@/constants'

export const request = ({ query }: { query: string }) =>
  fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query
    })
  })
