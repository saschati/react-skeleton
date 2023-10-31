import React, { useImperativeHandle, useRef } from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type RIcon =
  | {
      ricon?: JSX.Element
      riconClassName?: never
    }
  | {
      /**
       * JSX element icons on the left
       */
      ricon: JSX.Element
      /**
       * The style class for the icon on the left
       */
      riconClassName: string
    }

export type InputHandle = {
  focus: () => void
}

export type InputProps = JSX.IntrinsicElements['input'] &
  RIcon & {
    /**
     * Input type from possible [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
     */
    type: React.HTMLInputTypeAttribute
    /**
     * Reference to the component
     */
    ref?: React.Ref<HTMLInputElement> | null
    /**
     * Message about an error when inputting
     */
    errorMessage?: string
  }

/**
 * UI element of the form for outputting the input text or other input by type.
 *
 * Ref Methods:
 *
 * `focus` - Force focus on input.
 */
const Input = React.forwardRef<InputHandle, InputProps>(
  ({ type, className, ricon, riconClassName, errorMessage, ...rest }, ref): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null)

    const inputHandler = () => ({
      focus: () => inputRef.current?.focus(),
    })

    useImperativeHandle(ref, inputHandler, [])

    return (
      <div className={cx('input', className)}>
        <div className={cx('input__group')}>
          <input ref={inputRef} className={cx('input__handler')} type={type} {...rest} />
          {ricon && <div className={cx('input__ricon', riconClassName)}>{ricon}</div>}
        </div>
        {errorMessage && <div className={cx('input__errorMessage')}>{errorMessage}</div>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
