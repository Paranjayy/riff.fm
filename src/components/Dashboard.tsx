import { User, Music, Disc, ListMusic, TrendingUp, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const demoData = {
  metadata: { title: "Demo User's Stats", timestamp: new Date().toISOString() },
  topArtists: [
    { name: 'The Weeknd', plays: '1,240', image: 'https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca' },
    { name: 'Taylor Swift', plays: '980', image: 'https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7' },
    { name: 'Lana Del Rey', plays: '850', image: 'https://i.scdn.co/image/ab6761610000e5eb06f04f40ecb8ca92cb714908' },
    { name: 'Arctic Monkeys', plays: '720', image: 'https://i.scdn.co/image/ab67616d0000b273ab1e3b16de1c7ec009880e97' },
  ],
  topTracks: [
    { name: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', image: 'https://i.scdn.co/image/ab67616d0000b2738ecc33f195df6aa257c39eaa' },
    { name: 'Cruel Summer', artist: 'Taylor Swift', duration: '2:58', image: 'https://i.scdn.co/image/ab67616d0000b27351b3e9bb2b71cef8628b2c70' },
    { name: 'Video Games', artist: 'Lana Del Rey', duration: '4:42', image: 'https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b' },
    { name: 'Do I Wanna Know?', artist: 'Arctic Monkeys', duration: '4:32', image: 'https://i.scdn.co/image/ab67616d0000b2733186471e5280d90457a7edd0' },
  ],
  historyTimeline: [
    { name: 'Jan', plays: 400 },
    { name: 'Feb', plays: 300 },
    { name: 'Mar', plays: 600 },
    { name: 'Apr', plays: 800 },
    { name: 'May', plays: 500 },
    { name: 'Jun', plays: 900 },
  ]
}

const Dashboard = ({ externalData }: { externalData?: any }) => {
  const data = externalData || demoData
  const userData = data.metadata || demoData.metadata
  
  const stats = [
    { label: 'Total Tracks', value: data.totalPlays?.toLocaleString() || '2,482', icon: Music },
    { label: 'Top Genre', value: 'Indie Pop', icon: Disc },
    { label: 'Uniqueness', value: '88%', icon: ListMusic },
    { label: 'Compatibility', value: '94%', icon: User },
  ]

  const topArtists = data.topArtists || demoData.topArtists
  const topTracks = data.topTracks || demoData.topTracks
  const historyTimeline = data.historyTimeline || demoData.historyTimeline

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Profile Header */}
      <section className="glass-card p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1 relative">
           <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Paranjay" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute bottom-1 right-1 w-8 h-8 bg-primary rounded-full border-4 border-card flex items-center justify-center">
            <TrendingUp size={14} className="text-white" />
          </div>
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl font-extrabold mb-1">{userData.title.split("'")[0]}'s Stats</h1>
          <p className="text-muted-foreground mb-4">Last synced: {new Date(userData.timestamp).toLocaleDateString()}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg border border-white/5">
                <stat.icon size={16} className="text-primary" />
                <span className="text-sm font-medium">{stat.value} {stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
           <button className="bg-secondary hover:bg-secondary/80 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
            Share Profile
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Artists */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <User className="text-primary" size={24} /> Top Artists
            </h2>
            <button className="text-sm text-primary font-medium hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {topArtists.map((artist, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card item-card cursor-pointer group"
              >
                <img src={artist.image} alt={artist.name} className="item-image rounded-full group-hover:scale-110 transition-transform duration-500" />
                <div className="item-info">
                  <div className="item-name">{artist.name}</div>
                  <div className="item-detail">{artist.plays} plays this month</div>
                </div>
                <div className="text-2xl font-black text-white/5 group-hover:text-primary/20 transition-colors">0{i+1}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top Tracks */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Music className="text-primary" size={24} /> Top Tracks
            </h2>
            <button className="text-sm text-primary font-medium hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {topTracks.map((track, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card item-card cursor-pointer group"
              >
                <img src={track.image} alt={track.name} className="item-image group-hover:rotate-12 transition-transform duration-500" />
                <div className="item-info">
                  <div className="item-name truncate">{track.name}</div>
                  <div className="item-detail">{track.artist}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{track.duration}</span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Music size={14} className="text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Genre Cloud & Top Track Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 glass-card p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-primary" size={24} /> Genre Cloud
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Indie Pop', 'Synthwave', 'Alternative', 'Dream Pop', 'Lo-Fi', 'Art Rock', 'Shoegaze', 'Neo-Psychedelia'].map((genre, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.1, color: '#1db954' }}
                className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-bold border border-white/5 cursor-default transition-colors"
                style={{ fontSize: `${Math.max(12, 24 - i * 1.5)}px`, opacity: 1 - i * 0.08 }}
              >
                {genre}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="glass-card p-8 flex flex-col items-center justify-center text-center gap-4 border-primary/20">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-primary">Monthly Highlight</div>
          <img src={topArtists[0].image} alt="Artist" className="w-32 h-32 rounded-full shadow-2xl shadow-primary/20" />
          <div>
            <h3 className="text-xl font-bold">{topArtists[0].name}</h3>
            <p className="text-muted-foreground text-sm">Your most frequent companion this month.</p>
          </div>
          <button className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:scale-[1.02] transition-transform">
            View Analysis
          </button>
        </section>
      </div>

      {/* History Timeline */}
      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Clock className="text-primary" size={24} /> History Timeline
        </h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={historyTimeline}>
              <defs>
                <linearGradient id="colorPlays" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1db954" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#1db954" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff60', fontSize: 12 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff60', fontSize: 12 }} 
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#121214', border: '1px solid #ffffff10', borderRadius: '12px' }}
                itemStyle={{ color: '#1db954' }}
              />
              <Area 
                type="monotone" 
                dataKey="plays" 
                stroke="#1db954" 
                fillOpacity={1} 
                fill="url(#colorPlays)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
