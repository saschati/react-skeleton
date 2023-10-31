import React from 'react'
import classNames from 'classnames/bind'
import styles from './PulsatingPreloader.module.scss'

const cx = classNames.bind(styles)

type PulsatingPreloaderColor = 'black'
type PulsatingPreloaderSize = 'small' | 'normal' | 'big'
type PulsatingPreloaderWeight = 'thin' | 'bold'

export type PulsatingPreloaderProps = {
  /**
   * The color of the pulse wave
   */
  color?: PulsatingPreloaderColor
  /**
   * Preloader size
   */
  size?: PulsatingPreloaderSize
  /**
   * Pulse wave thickness
   */
  weight?: PulsatingPreloaderWeight
}

/**
 * Primary UI of the preloader for use during downloads or uploading data
 */
const PulsatingPreloader: React.FC<PulsatingPreloaderProps> = ({
  color = 'black',
  size = 'small',
  weight = 'thin',
}): JSX.Element => {
  return (
    <div
      className={cx(
        'preloader',
        `preloader_color_${color}`,
        `preloader_size_${size}`,
        `preloader_weight_${weight}`,
      )}
    />
  )
}

export default PulsatingPreloader
