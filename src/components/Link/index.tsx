import { Reload } from '../Reload'
import { IperLink, LinkContainer, LinkVariantColor } from './styles'
import { ReactNode } from 'react'

interface LinkProps {
  variant?: LinkVariantColor
  text?: string
  href?: string
  iconRight?: ReactNode
  iconLeft?: ReactNode
  children?: ReactNode
}

export function Link({
  variant = 'mainColor',
  text,
  href,
  iconRight,
  iconLeft,
  children,
}: LinkProps) {
  return (
    <LinkContainer variant={variant}>
      {text && (
        <IperLink variant={variant}>
          <Reload variant={5} />
          <a href={href}>
            {iconLeft}
            {text}
            {iconRight}
          </a>
        </IperLink>
      )}
      <div className="button">
        <Reload variant={5} />
        {children}
      </div>
    </LinkContainer>
  )
}
