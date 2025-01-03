import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// importing Pages
import {
  LoginPage,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  UpdateUser,
  UpdateUserPassword,
  HomeLayout,
  Landing,
  Single_Task,
  EditTasks,
  Error,
  About,
  NewsLetter,
} from './Pages'

// importing components
import { ErrorElement } from './Components'

// importing actions
import { action as registerAction } from './Pages/RegisterPage'
import { action as loginAction } from './Pages/LoginPage'
import { action as updateUserAction } from './Pages/UpdateUser'
import { action as createTaskAction } from './Pages/Landing'
import { action as editTaskAction } from './Pages/EditTasks'

// importing loaders
import { loader as getAllTasksLoader } from './Pages/Landing'
import { loader as getSingleTaskLoader } from './Pages/SingleTask'
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
    path: '/updateUserDetails',
    element: <UpdateUser />,
    errorElement: <Error />,
    action: updateUserAction(store),
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
        action: createTaskAction,
        loader: getAllTasksLoader,
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
      {
        path: 'singleTask/:id',
        element: <Single_Task />,
        errorElement: <Error />,
        loader: getSingleTaskLoader,
      },
      {
        path: 'editTasks/:id',
        element: <EditTasks />,
        errorElement: <Error />,
        action: editTaskAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
