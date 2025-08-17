import { useState } from 'react'
import './App.css'
import SidebarToggle from './components/SidebarToggle';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (

    <div className="relative">
      <SidebarToggle onClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>


  )
}

export default App
