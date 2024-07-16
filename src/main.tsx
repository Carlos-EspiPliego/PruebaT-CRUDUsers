import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { UsersApp } from './UsersApp.tsx'
import { store } from '@store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UsersApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
