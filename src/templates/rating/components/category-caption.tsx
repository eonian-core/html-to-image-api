import { categoryCaptionFontStyles, gradientWrapperColors } from '../constants'

interface Props {
  type: number
  categoryName: string
}

export function CategoryCaption({ type, categoryName }: Props) {
  const [start] = gradientWrapperColors[type % gradientWrapperColors.length]
  return (
    <h3 style={{ marginTop: 8, textAlign: 'center', ...categoryCaptionFontStyles.root }}>
      Category <span style={{ ...categoryCaptionFontStyles.category, color: start }}>{categoryName}</span>
    </h3>
  )
}
