import { headerStyles } from '../constants'

interface Props {
  text: string
}

export function Header({ text }: Props) {
  return <h1 style={{ ...headerStyles, margin: 0, textAlign: 'center' }}>{text}</h1>
}
