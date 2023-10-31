import React from 'react'
import styles from './Text.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type TextSize =
  | 'default'
  | 'xxxl'
  | 'xxl'
  | 'xl'
  | 'l'
  | 'm'
  | 's'
  | 'xs'
  | 'xxs'
  | '4s'
  | '5s'
  | '6s'
type TextPosition = 'start' | 'center'

export type TextProps = Required<React.PropsWithChildren> & {
  className?: string
  /**
   * Available text sizes on the site
   */
  size?: TextSize
  /**
   * Available text positions on the site
   */
  position?: TextPosition
  /**
   * Defining the tag for the top element
   */
  as?: keyof JSX.IntrinsicElements | React.FC
}

/**
 * Primary UI component for working with texts
 */
const Text: React.FC<TextProps> = ({
  children,
  className,
  size = 'default',
  position = 'start',
  as = 'p',
}): JSX.Element => {
  const CustomTag = as

  return (
    <CustomTag
      data-testid="text-Text"
      className={cx('text', `text_size_${size}`, `text_position_${position}`, className)}
    >
      {children}
    </CustomTag>
  )
}

export default Text
