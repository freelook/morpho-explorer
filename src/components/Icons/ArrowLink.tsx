import { SVGProps } from 'react'

export const ArrowLink = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.175736 7.82426C0.410051 8.05858 0.78995 8.05858 1.02426 7.82426L6.8 2.04853V6.6C6.8 6.93137 7.06863 7.2 7.4 7.2C7.73137 7.2 8 6.93137 8 6.6V0.6C8 0.26863 7.73137 0 7.4 0H1.4C1.06863 0 0.8 0.26863 0.8 0.6C0.8 0.93137 1.06863 1.2 1.4 1.2H5.95147L0.175736 6.97574C-0.0585786 7.21005 -0.0585786 7.58995 0.175736 7.82426Z"
        fill="#191D20"
        fillOpacity="0.6"
      />
    </svg>
  )
}