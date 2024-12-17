import {
  negativeChangeColor,
  positiveChangeColor,
  winnerToken,
  winnerTokenLogoSize,
  winnerTokenWreathIconSize,
} from '../constants'
import { Token } from '../types'
import { formatUSD } from '../utils/format-usd'
import IconBoxArrow from './icons/icon-box-arrow'
import IconLaurelWreath from './icons/laurel-wreath-icon'

interface Props {
  token: Token
}

export function WinnerToken({ token }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...winnerToken.root }}>
      <Icon token={token} />
      <Label token={token} />
      <PriceInfo token={token} />
    </div>
  )
}

function Icon({ token }: Props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          margin: 'auto',
          borderRadius: '50%',
          overflow: 'hidden',
          width: '56px',
          height: '56px',
          boxSizing: 'content-box',
          ...winnerToken.logoWrapper,
        }}
      >
        <img src={token.icon} width={winnerTokenLogoSize} height={winnerTokenLogoSize} alt={token.symbol} />
      </div>
      <IconLaurelWreath
        width={winnerTokenWreathIconSize}
        height={winnerTokenWreathIconSize}
        style={winnerToken.wreathIcon}
      />
      <IconLaurelWreath
        width={winnerTokenWreathIconSize}
        height={winnerTokenWreathIconSize}
        style={{ ...winnerToken.wreathIcon, ...winnerToken.wreathIconMirror }}
      />
    </div>
  )
}

function Label({ token }: Props) {
  return (
    <div style={winnerToken.labelWrapper}>
      <span>{token.name}</span>
      &nbsp;
      <span style={winnerToken.labelSymbol}>{token.symbol}</span>
    </div>
  )
}

function PriceInfo({ token }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', ...winnerToken.priceWrapper }}>
      <div
        style={{
          ...winnerToken.priceChange,
          color: token.priceChange >= 0 ? positiveChangeColor : negativeChangeColor,
        }}
      >
        <IconBoxArrow direction={token.priceChange >= 0 ? 'top' : 'bottom'} />
        &nbsp;
        {token.priceChange}%
      </div>
      &nbsp;
      <div style={{ ...winnerToken.price }}>{formatUSD(token.price)}</div>
    </div>
  )
}
