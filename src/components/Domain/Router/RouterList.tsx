import React, { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from '@/config/routes'
import useAuth from '@/hooks/useAuth'
import { NoFoundComponent, RouterAccess } from '@/config/router'

const RouterList: React.FC = (): JSX.Element => {
  const { user } = useAuth()

  const filterRouters = useMemo(() => {
    return routes.filter(({ access }) => {
      if (access === RouterAccess.AUTH && user.isGuest() === true) {
        return false
      }

      if (access === RouterAccess.GUEST && user.isGuest() === false) {
        return false
      }

      return true
    })
  }, [user])

  const routeComponents = useMemo(() => {
    return filterRouters.map(({ path, Component }) => {
      return <Route key={path} path={path} element={<Component />} />
    })
  }, [filterRouters])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeComponents}
        <Route path="*" element={<NoFoundComponent />} />
      </Routes>
    </Suspense>
  )
}

export default RouterList
