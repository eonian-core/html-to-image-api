import { headerStyles } from '../constants'
import styles from './header.module.scss'

interface Props {
  text: string
}

export function Header({ text }: Props) {
  return <h1 style={{ 
    ...headerStyles, 
    margin: 0, 
    textAlign: 'center',
  }}
  className={styles.header}
  >{text}</h1>
}
