import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HeroSection from "./pages/student/HeroSection";
import Login from "./pages/login";
import "./App.css";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element:(
          <>
          <HeroSection />,
          <Courses/>
          </>
        ),
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "my-learning",
        element: <MyLearning />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ],
  },
]);

function App() {
  return (
    <main>
      <ThemeProvider>
      <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}

export default App;