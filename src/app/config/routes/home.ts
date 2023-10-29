import React from 'react'
import { RouterAccess, route } from '../router'
import Path from '../path'

const HomePage = React.lazy(() => import('@/pages/Home/HomePage'))

export default [route(Path.HOME, HomePage, RouterAccess.ALL)]
