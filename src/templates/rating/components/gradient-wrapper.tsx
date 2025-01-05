import { gradientWrapperColors, gradientWrapperPadding } from '../constants'

export function GradientWrapper({ type, children }: React.PropsWithChildren<{ type: number }>) {
  const [start, end] = gradientWrapperColors[type % gradientWrapperColors.length]
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom right, ${start}, ${end})`,
        padding: gradientWrapperPadding,
      }}
    >
      {children}
    </div>
  )
}
