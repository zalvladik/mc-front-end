import './App.css'

import { Suspense, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'

import LoadingPage from './pages/LoadingPage'
import { Router } from './router'

const App = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  })

  return (
    <Suspense fallback={<LoadingPage />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
