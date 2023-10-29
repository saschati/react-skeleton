import { createContext } from 'react'

export enum Device {
  DESKTOP = 'desktop',
  LAPTOP = 'laptop',
  TABLET = 'tablet',
  MOBILE = 'mobile',
}

export interface LayoutContextValue {
  device: Device
  size: {
    width: number
    height: number
  }
}

export const LayoutContext = createContext<LayoutContextValue | null>(null)
