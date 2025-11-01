import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContractPage from './components/ContractPage/ContractPage.jsx'
import Register from './components/Register/Register.jsx'

import Dashboard from './components/Dashboard/Dashboard.jsx'
import { AppKitProvider } from './WagmiProvider.jsx'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tree2 from './components/Tree3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppKitProvider>
      <Provider store={store}>

                    <Router>
       <App/>

                    </Router>
       </Provider>
    </AppKitProvider>
  </StrictMode>
)
