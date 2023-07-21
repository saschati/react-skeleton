import React from 'react'
import { RouterAccess, route } from '../router'
import Path from '../path'

const HomeController = React.lazy(() => import('@/controllers/Home/HomeController'))

export default [route(Path.HOME, HomeController, RouterAccess.ALL)]
