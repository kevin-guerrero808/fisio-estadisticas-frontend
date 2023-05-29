import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import allRoutesProject from './config/routes'
import 'normalize.css';

import './App.scss'

const App = () => {
  const color = {
    primaryColor: '#0069A3',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  };
  return (
    <BrowserRouter>
      <Routes>
        { allRoutesProject.map((route, i) => (
          <Route key={route.path} path={route.path} element={<route.layout><route.component /></route.layout>} />
        )) }
      </Routes>
    </BrowserRouter>
  )
}

export default App