import { useRef, useEffect } from 'react'

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        callback?.()
      }
    }
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref, callback])
  return ref
}
