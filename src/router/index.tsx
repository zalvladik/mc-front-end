import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AuctionLayout from 'src/layouts/AuctionLayout'
import AuthLayout from 'src/layouts/AuthLayout'
import NavLayout from 'src/layouts/NavLayouts'
import { RoutesPath } from 'src/router/routes'

const ErrorPage = lazy(() => import('src/pages/ErrorPage'))
const HomePage = lazy(() => import('src/pages/HomePage'))
const RulePage = lazy(() => import('src/pages/RulePage'))
const SignInPage = lazy(() => import('src/pages/SignInPage'))
const ProfilePage = lazy(() => import('src/pages/ProfilePage'))
const InventoryPage = lazy(() => import('src/pages/InventoryPage'))
const WikiPage = lazy(() => import('src/pages/WikiPage'))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: RoutesPath.HOME, element: <HomePage /> },
      { path: RoutesPath.RULES, element: <RulePage /> },
      { path: RoutesPath.SIGN_IN, element: <SignInPage /> },
      {
        path: RoutesPath.USER,
        element: <AuthLayout />,
        children: [
          { path: RoutesPath.PROFILE, element: <ProfilePage /> },
          { path: RoutesPath.INVENTORY, element: <InventoryPage /> },
          {
            path: RoutesPath.AUCTION,
            element: <AuctionLayout />,
          },
          { path: RoutesPath.WIKI, element: <WikiPage /> },
        ],
      },
    ],
  },
])
