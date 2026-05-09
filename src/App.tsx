import { useState } from 'react'
import { Music } from 'lucide-react'
import Dashboard from './components/Dashboard'
import Compare from './components/Compare'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'compare'>('dashboard')

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card mx-4 mt-4 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Music className="text-primary-foreground" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">riff<span className="text-primary">.fm</span></span>
        </div>
        
        <div className="flex gap-1 bg-secondary/50 p-1 rounded-full border border-border">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'dashboard' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-muted'}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'compare' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-muted'}`}
          >
            Taste Match
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 hover:bg-muted rounded-full transition-colors">
            <Music size={20} />
          </a>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
            Connect Spotify
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8">
        {activeTab === 'dashboard' ? <Dashboard /> : <Compare />}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border mt-auto">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>© 2026 riff.fm. Built with Antigravity.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
