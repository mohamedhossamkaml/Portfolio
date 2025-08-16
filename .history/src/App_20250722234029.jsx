import { useState } from 'react'
import './App.css'
import SidebarToggle from './components/SidebarToggle';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (

    <div className="relative">
      <SidebarToggle onClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <HeroSection />
    </div>


  )
}

export default App
