import { CSSProperties } from 'react'
import { negativeChangeColor, positiveChangeColor, tokenList, tokenListIconSize } from '../constants'
import { Token } from '../types'
import { formatUSD } from '../utils/format-usd'

interface Props {
  tokens: Token[]
}

export function TokenList({ tokens }: Props) {
  const [minPriceChange, maxPriceChange] = getMinMaxPriceChange(tokens)
  return (
    <div
      style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ...tokenList.root }}
    >
      {tokens.map((token, index) => (
        <TokenInfo
          key={token.name}
          token={token}
          index={index}
          minPriceChange={minPriceChange}
          maxPriceChange={maxPriceChange}
        />
      ))}
    </div>
  )
}

interface TokenInfoProps {
  token: Token
  index: number
  minPriceChange: number
  maxPriceChange: number
}

function TokenInfo({ token, index, minPriceChange, maxPriceChange }: TokenInfoProps) {
  const barFlexBasis = getFlexBasis(token, minPriceChange, maxPriceChange)
  return (
    <div style={{ ...tokenList.item, display: 'flex', alignItems: 'center' }}>
      <div>#{index + 2}</div>
      <div
        style={
          {
            display: 'flex',
            alignItems: 'center',
            flexBasis: `${barFlexBasis}%`,
            justifyContent: 'space-between',
            ...tokenList.itemPriceChangeBar,
            '--color': token.priceChange < 0 ? negativeChangeColor : positiveChangeColor,
          } as CSSProperties
        }
      >
        <img src={token.icon} width={tokenListIconSize} height={tokenListIconSize} alt={token.symbol} />
        <span style={{ paddingLeft: 8 }}>{token.priceChange}%</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', ...tokenList.itemInfo }}>
        <div style={tokenList.itemInfoPrice}>{formatUSD(token.price)}</div>
        <div>{token.symbol}</div>
      </div>
    </div>
  )
}

function getMinMaxPriceChange(tokens: Token[]): [number, number] {
  const values = tokens.map((token) => token.priceChange)
  return [Math.min(...values), Math.max(...values)]
}

function getFlexBasis(token: Token, min: number, max: number): number {
  const minFlexBasis = 20
  const maxFlexBasis = 60
  return ((token.priceChange - min) / (max - min)) * (maxFlexBasis - minFlexBasis) + minFlexBasis
}
