import { useState } from 'react'
import { Music, Users, BarChart2, History } from 'lucide-react'
import { motion } from 'framer-motion'
import Dashboard from './components/Dashboard'
import Compare from './components/Compare'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'compare'>('dashboard')
  const [isImported, setIsImported] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, we would use jszip here. For now, we'll simulate the import.
    if (e.target.files && e.target.files[0]) {
      setIsImported(true)
      setShowDemo(false)
    }
  }

  if (!isImported && !showDemo) {
    return (
      <div className="min-h-screen bg-secondary flex flex-col items-center justify-center p-6 text-center space-y-10">
        <div className="space-y-4 max-w-2xl">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-primary rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-primary/40"
          >
            <Music className="text-white" size={48} />
          </motion.div>
          <h1 className="text-6xl font-black tracking-tight">Your Music, <span className="gradient-text">Visualized.</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Import your Spotify data to unlock deep insights into your listening habits, 
            artist obsession, and soul-matching with friends.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <label className="flex-1 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold cursor-pointer transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
            <input type="file" className="hidden" accept=".zip" onChange={handleImport} />
            Import Data (.zip)
          </label>
          <button 
            onClick={() => setShowDemo(true)}
            className="flex-1 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-white/10"
          >
            See Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full pt-12">
          {[
            { title: 'Taste Match', desc: 'Compare your soul with anyone.', icon: Users },
            { title: 'Real-time Stats', desc: 'Your top artists & tracks.', icon: BarChart2 },
            { title: 'Habit Analysis', desc: 'When do you really listen?', icon: History }
          ].map((feature, i) => (
            <div key={i} className="glass-card p-6 space-y-2 text-left border-white/5">
              <feature.icon className="text-primary mb-2" size={24} />
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-secondary text-foreground">
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
