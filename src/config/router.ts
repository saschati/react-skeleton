import React from 'react'
import Path from './path'
import NoFoundController from '@/controllers/Error/NoFoundController'

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

export const NoFoundComponent = NoFoundController
