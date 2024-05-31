import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import BookPage from "./pages/books/[slug]";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/book/:slug",
    element: <BookPage />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;