import { Card } from './components/card'
import { CategoryCaption } from './components/category-caption'
import { GradientWrapper } from './components/gradient-wrapper'
import { Header } from './components/header'
import { TokenList } from './components/token-list'
import { WinnerToken } from './components/winner-token'
import { Token } from './types'

interface Props {
  type: number
  category: string
  tokens: Token[]
}

export default function Rating({ type, category, tokens }: Props) {
  tokens = tokens.sort((a, b) => b.priceChange - a.priceChange).slice(0, 5)
  return (
    <GradientWrapper type={type}>
      <Card>
        <Header text="Top Crypto of the Day" />
        <CategoryCaption type={type} categoryName={category} />
        <WinnerToken token={tokens[0]} />
        <TokenList tokens={tokens.slice(1)} />
      </Card>
    </GradientWrapper>
  )
}
