import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// importing Pages
import {
  LoginPage,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  UpdateUserPassword,
  HomeLayout,
  Landing,
  Error,
  About,
  NewsLetter,
} from './Pages'

// importing components
import { ErrorElement } from './Components'

// importing actions
import { action as registerAction } from './Pages/RegisterPage'
import { action as loginAction } from './Pages/LoginPage'

// import store.js
import { store } from '../store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />,
    errorElement: <Error />,
    action: registerAction,
  },

  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/forgotPassword',
    element: <ForgotPassword />,
    errorElement: <Error />,
  },
  {
    path: '/resetPassword',
    element: <ResetPassword />,
    errorElement: <Error />,
  },
  {
    path: '/updateUserPassword',
    element: <UpdateUserPassword />,
    errorElement: <Error />,
  },
  {
    path: '/dashboard',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'newsLetter',
        element: <NewsLetter />,
        errorElement: <ErrorElement />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
