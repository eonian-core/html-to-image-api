import { PropsWithChildren } from 'react'
import { cardStyles } from '../constants'

export function Card({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        ...cardStyles,
      }}
    >
      {children}
    </div>
  )
}
