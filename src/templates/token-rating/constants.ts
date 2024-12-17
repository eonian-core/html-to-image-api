import { CSSProperties } from 'react'

/**
 * Common
 */
export const positiveChangeColor = 'hsl(142, 71%, 45%)'
export const negativeChangeColor = 'hsl(0, 84%, 60%)'
export const dimColor = 'rgba(0, 0, 0, 0.5)'

/**
 * <GradientWrapper />
 */
export const gradientWrapperColors: [string, string][] = [['rgba(247,149,51,1)', 'rgba(8,237,96,1)']]
export const gradientWrapperPadding = '10px'

/**
 * <Card />
 */
export const cardStyles: CSSProperties = {
  backgroundColor: '#fff',
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
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
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
  },
} satisfies Record<string, CSSProperties>

/**
 * <WinnerToken />
 */
export const winnerTokenLogoSize = 56
export const winnerTokenWreathIconSize = 64
export const winnerToken = {
  root: {},
  logoWrapper: {
    outline: `2px solid rgba(0, 0, 0, 0.15)`,
  },
  wreathIcon: {
    color: 'rgba(0, 0, 0, 0.3)',
    transform: `rotate(-20deg) translateX(0%) translateY(20%)`,
  },
  wreathIconMirror: {
    transform: `rotate(20deg) translateX(0%) translateY(20%) scaleX(-1)`,
  },
  labelWrapper: {
    marginTop: '12px',
  },
  labelSymbol: {
    color: dimColor,
  },
  priceWrapper: {
    marginTop: 10,
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
    marginTop: 20,
  },
  item: {
    padding: `0 4px`,
    color: dimColor,
    gap: 6,
  },
  itemPriceChangeBar: {
    background: `linear-gradient(240deg, var(--color) 0%, rgba(255,255,255,1) 100%)`,
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
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.6)'
  }
} satisfies Record<string, CSSProperties & Partial<{ '--color': string }>>
