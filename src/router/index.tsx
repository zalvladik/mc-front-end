import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import NavLayout from 'src/layouts/NavLayouts'
import { RoutesPath } from 'src/router/routes'

const ErrorPage = lazy(() => import('src/pages/ErrorPage'))
const HomePage = lazy(() => import('src/pages/HomePage'))
// const RulePage = lazy(() => import('src/pages/RulePage'))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: RoutesPath.HOME, element: <HomePage /> },
      // { path: RoutesPath.RULES, element: <RulePage /> },
    ],
  },
])
