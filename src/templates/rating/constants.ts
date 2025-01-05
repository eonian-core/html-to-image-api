import { CSSProperties } from 'react'

/**
 * Common
 */
export const positiveChangeColor = 'hsl(142, 71%, 55%)'
export const negativeChangeColor = 'hsl(0, 84%, 60%)'
export const dimColor = 'hsl(240, 6%, 90%)'

/**
 * <GradientWrapper />
 */
export const gradientWrapperColors: [string, string][] = [
  ['#ef4e7b', '#fde68b'],
  ['#f87272', '#bbf7d0'],
  ['#5073b8', 'hsla(38, 72%, 69%, .671)'],
  ['#f37055', '#a166ab'],
  ['#d52a60', '#637cee'],
]
export const gradientWrapperPadding = '16px'

/**
 * <Card />
 */
export const cardStyles: CSSProperties = {
  background: 'linear-gradient(to bottom right, hsl(240, 4%, 14%) 15%, hsl(240, 5%, 20%) 35%, hsl(240, 4%, 12%) 55%)',
  borderRadius: '8px',
  padding: '24px 8px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)', // Elevation #3
}

/**
 * <Header />
 */
export const headerStyles: CSSProperties = {
  fontWeight: 600,
  fontSize: '28px',
  fontStyle: 'normal',
  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.2)',
  color: '#363636',
}

/**
 * <CategoryCaption />
 */
export const categoryCaptionFontStyles = {
  root: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '15px',
    color: dimColor,
  },
  category: {
    /* "color" is the first one of current `gradientWrapperColors` */
    fontWeight: 500,
  },
} satisfies Record<string, CSSProperties>

/**
 * <WinnerToken />
 */
export const winnerTokenLogoSize = 84
export const winnerTokenWreathIconSize = 64
export const winnerToken = {
  root: {},
  logoWrapper: {
    outline: `2px solid rgba(255, 255, 255, 0.7)`,
  },
  wreathIcon: {
    color: 'rgba(255, 255, 255, 0.9)',
    filter: 'drop-shadow(0px 0px 10px #fff)',
    transform: `rotate(-20deg) translateX(-30%) translateY(45%)`,
  },
  wreathIconMirror: {
    transform: `rotate(20deg) translateX(30%) translateY(45%) scaleX(-1)`,
  },
  labelWrapper: {
    marginTop: '40px',
  },
  labelSymbol: {
    color: dimColor,
  },
  priceWrapper: {
    marginTop: 7,
  },
  priceChange: {
    fontWeight: 600,
    fontSize: '18px',
    fontStyle: 'normal',
  },
  price: {
    fontSize: '18px',
    color: dimColor,
  },
} satisfies Record<string, CSSProperties>

/**
 * <TokenList />
 */
export const tokenListIconSize = 20
export const tokenList = {
  root: {
    marginTop: 25,
    marginBottom: 35,
    marginLeft: 40,
    marginRight: 40,
  },
  item: {
    padding: `0 4px`,
    color: dimColor,
    gap: 6,
  },
  itemPriceChangeBar: {
    background: `linear-gradient(240deg, var(--color) 0%, rgba(255,255,255,0) 100%)`,
    borderRadius: 4,
    gap: 4,
    paddingRight: 4,
    color: '#fff',
    fontWeight: 500,
  },
  itemInfo: {
    gap: 4
  },
  itemInfoPrice: {
    fontWeight: 'bold',
    color: 'hsl(0, 0%, 100%)',
  }
} satisfies Record<string, CSSProperties & Partial<{ '--color': string }>>
