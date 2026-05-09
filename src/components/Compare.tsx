import { useState } from 'react'
import { Zap, Heart, Shield, Share2, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Compare = () => {
  const [matching, setMatching] = useState(false)
  const [matched, setMatched] = useState(false)

  const handleMatch = () => {
    setMatching(true)
    setTimeout(() => {
      setMatching(false)
      setMatched(true)
    }, 2000)
  }

  const sharedArtists = [
    { name: 'The Weeknd', match: '100%', image: 'https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca' },
    { name: 'Taylor Swift', match: '92%', image: 'https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7' },
    { name: 'Arctic Monkeys', match: '85%', image: 'https://i.scdn.co/image/ab67616d0000b273ab1e3b16de1c7ec009880e97' },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">Taste <span className="gradient-text">Match</span></h1>
        <p className="text-xl text-muted-foreground">Compare your musical soul with anyone in the world.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* User 1 */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-full border-4 border-primary p-1 shadow-2xl shadow-primary/20 bg-card overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Paranjay" alt="You" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">You</h3>
            <p className="text-sm text-primary font-semibold uppercase tracking-widest">Paranjay</p>
          </div>
        </div>

        {/* Action Center */}
        <div className="flex flex-col items-center gap-6">
          <AnimatePresence mode="wait">
            {!matched ? (
              <motion.button
                key="match-btn"
                onClick={handleMatch}
                disabled={matching}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all ${matching ? 'bg-muted' : 'bg-primary shadow-xl shadow-primary/40 hover:shadow-primary/60'}`}
              >
                {matching ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap size={32} className="text-white" />
                  </motion.div>
                ) : (
                  <Zap size={32} className="text-white" />
                )}
                {matching && (
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="48" cy="48" r="44"
                      fill="none" stroke="currentColor" strokeWidth="4"
                      className="text-primary opacity-20"
                    />
                    <motion.circle
                      cx="48" cy="48" r="44"
                      fill="none" stroke="currentColor" strokeWidth="4"
                      strokeDasharray="276"
                      initial={{ strokeDashoffset: 276 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2 }}
                      className="text-primary"
                    />
                  </svg>
                )}
              </motion.button>
            ) : (
              <motion.div
                key="match-score"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="text-6xl font-black text-primary">87%</div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Match Score</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User 2 */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-full border-4 border-dashed border-muted p-1 bg-secondary/20 flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
            {!matched ? (
              <Plus size={48} className="text-muted-foreground group-hover:text-primary transition-colors" />
            ) : (
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Friend" alt="Friend" className="w-full h-full object-cover rounded-full" />
            )}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">{matched ? 'Friend' : 'Add Person'}</h3>
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest">{matched ? '@music_lover' : 'Enter Username'}</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {matched && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Analysis Box */}
            <div className="glass-card p-10 relative overflow-hidden border-primary/20">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Heart size={200} />
              </div>
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Shield size={32} className="text-primary" /> Taste Analysis
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  You and <span className="text-white font-semibold">@music_lover</span> share a deep connection through 
                  <span className="text-primary"> Indie Pop</span> and <span className="text-primary">Alternative Rock</span>. 
                  Both of you have been listening to <span className="text-white font-semibold">The Weeknd</span> religiously lately. 
                  Your listening habits overlap significantly in the late evenings, suggesting similar "vibe" periods.
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/20">
                    <Share2 size={18} /> Share Results
                  </button>
                </div>
              </div>
            </div>

            {/* Shared Artists */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Your Shared Artists</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sharedArtists.map((artist, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="glass-card p-4 flex flex-col items-center gap-4 text-center border-white/5"
                  >
                    <img src={artist.image} alt={artist.name} className="w-24 h-24 rounded-full" />
                    <div>
                      <div className="font-bold">{artist.name}</div>
                      <div className="text-sm text-primary font-bold">{artist.match} Shared Passion</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Compare
