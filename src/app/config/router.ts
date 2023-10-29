import React from 'react'
import Path from './path'
import NoFoundPage from '@/pages/Error/NoFoundPage'

export enum RouterAccess {
  ALL,
  AUTH,
  GUEST,
}

export interface Route {
  path: Path
  Component: React.ComponentType
  access: RouterAccess
}

export const route = (path: Path, Component: React.ComponentType, access: RouterAccess): Route => {
  return { path, Component, access }
}

export const routeToPath = <P extends object = object>(path: Path, params: P) => {
  const newPath = path.replace(/:(?<name>[\w]+)\/?/g, (...matches) => {
    const group = matches[matches.length - 1] as { name: keyof P }
    const replace = params[group.name]

    return `${replace}/`
  })

  return newPath.slice(0, -1)
}

export const NoFoundComponent = NoFoundPage
