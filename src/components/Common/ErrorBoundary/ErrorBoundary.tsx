import Text, { TextProps } from '@/UI/Text'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './ErrorBoundary.module.scss'

const cx = classNames.bind(styles)

export type ErrorBoundaryProps = Required<React.PropsWithChildren> & {
  message: string
  text?: Omit<TextProps, 'children'>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary error: ', error, errorInfo)
  }

  clearError = () => {
    this.setState({ hasError: false })
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      const { className, ...textProps } = this.props.text || {}

      return (
        <Text className={cx('errorBoundary', className)} {...textProps}>
          {this.props.message}
        </Text>
      )
    }

    return this.props.children as JSX.Element
  }
}

export default ErrorBoundary
