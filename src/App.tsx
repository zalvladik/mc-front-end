import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Router } from './router'

import LoadingPage from './pages/LoadingPage'

import './App.css'

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false, refetchOnWindowFocus: false, refetchOnMount: false },
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
