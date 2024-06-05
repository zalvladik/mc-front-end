import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from 'src/layouts/AuthLayout'
import NavLayout from 'src/layouts/NavLayouts'
import { RoutesPath } from 'src/router/routes'

const ErrorPage = lazy(() => import('src/pages/ErrorPage'))
const HomePage = lazy(() => import('src/pages/HomePage'))
const RulePage = lazy(() => import('src/pages/RulePage'))
const WikiPage = lazy(() => import('src/pages/WikiPage'))
const SignInPage = lazy(() => import('src/pages/SignInPage'))
const AuctionPage = lazy(() => import('src/pages/AuctionPage'))
const ProfilePage = lazy(() => import('src/pages/ProfilePage'))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: RoutesPath.HOME, element: <HomePage /> },
      { path: RoutesPath.RULES, element: <RulePage /> },
      { path: RoutesPath.WIKI, element: <WikiPage /> },
      { path: RoutesPath.SIGN_IN, element: <SignInPage /> },
      { path: RoutesPath.AUCTION, element: <AuctionPage /> },
      {
        path: RoutesPath.PROFILE,
        element: <AuthLayout />,
        children: [{ path: RoutesPath.PROFILE, element: <ProfilePage /> }],
      },
    ],
  },
])