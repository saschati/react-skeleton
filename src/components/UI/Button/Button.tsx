import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

type ButtonColor = 'black' | 'white' | 'transparent'

type ButtonType =
  | {
      type: 'submit'
      onClick?: never
    }
  | {
      type?: Exclude<JSX.IntrinsicElements['button']['type'], 'submit'>
      /**
       * Button handler if it is not defined as **submit** type
       */
      onClick: React.MouseEventHandler<HTMLButtonElement>
    }

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'onClick' | 'type'> &
  ButtonType & {
    /**
     * Button color with pre-defined colors
     */
    color?: ButtonColor
    /**
     * Text in the middle of the button
     */
    text: string
  }

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  text,
  color = 'black',
  onClick,
  type = 'button',
  ...rest
}): JSX.Element => {
  return (
    <button type={type} className={cx('btn', `btn_color_${color}`)} onClick={onClick} {...rest}>
      {text}
    </button>
  )
}

export default Button
