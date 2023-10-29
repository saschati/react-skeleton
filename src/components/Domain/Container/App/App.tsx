import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/app/store/redux/store'
import env from '@/app/config/env'

const App: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={env.routeBaseName}>{children}</BrowserRouter>
    </Provider>
  )
}

export default App
