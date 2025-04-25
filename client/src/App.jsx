import { useTheme } from "./components/ui/ThemeProvider";
import { Button } from "@/components/ui/button";
import Navbar from './components/ui/Navbar';
import Login from './pages/login';
import './App.css';

function App() {
  const { theme } = useTheme(); // Get current theme

  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Login />
      </div>
    </main>
  )
}

export default App