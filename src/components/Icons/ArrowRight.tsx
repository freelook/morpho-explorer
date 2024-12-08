import { SVGProps } from 'react'

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.33337 5.49972L0.666707 5.49972"
        stroke="#434C53"
        strokeOpacity="0.9"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00004 1.16638L9.33337 5.49972L5.00004 9.83305"
        stroke="#434C53"
        strokeOpacity="0.9"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
