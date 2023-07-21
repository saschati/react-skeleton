import React from 'react'
import styles from './Layout.module.scss'
import LayoutProvider from '../Provider/LayoutProvider'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Layout: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <LayoutProvider>
      <div className={cx('layout')}>
        <header className={cx('layout__header')}>Header</header>
        <main className={cx('layout__content')}>{children}</main>
        <footer className={cx('layout__footer')}>Footer</footer>
      </div>
    </LayoutProvider>
  )
}

export default Layout
