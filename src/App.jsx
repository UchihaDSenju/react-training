import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import ContentPage from "./components/ContentPage";
import Content from "./components/Content";
import About from "./components/About";

function App() {

  // Creates a new DataRouter to manage that application paths
  // A list of RouteObject entries are given
  const router = createBrowserRouter([
    {
      path: '*',
      element: <ErrorPage />
    },
    {
      path: '/home',
      element: <Navigate to='/' replace={true}/> // this redirects to original path and removes the `/home` entry from the history stack such that you cannot go back to it
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/content',
      element: <ContentPage />,
      children: [
        // Having index as true means that this element will be first rendered when <ContentPage /> is rendered at index path ('/content')
        {
          index: true,
          element: <Navigate to="index_content" replace={true} />
        },
        {
          path: 'index_content',
          element: <Content />
        },
        {
          path: 'about',
          element: <About />
        },
      ]
    }
  ]);

  return (
    <>
      {/* Renders the UI for the given DataRouter */}
      <RouterProvider router={router} />
    </>
  )
}

export default App

/**
 * A DataRouter is an interface where application paths are tracked 
 * It is tracked by the History interface which adds entry to the browser's session history stack
 * 1) Configure `const routes`
 * 2) Add this to the RouterProvider
 */