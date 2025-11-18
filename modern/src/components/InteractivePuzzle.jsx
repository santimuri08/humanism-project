import { useState, useEffect } from 'react'
import { motion, Reorder } from 'framer-motion'
import { Lock, Unlock, RotateCcw, Sparkles, Trophy } from 'lucide-react'

export default function InteractivePuzzle() {
  const [puzzlePieces, setPuzzlePieces] = useState([
    { id: '1', title: 'Welcome', content: 'Drag me around!', color: 'from-blue-400 to-blue-600', size: 'normal', locked: false },
    { id: '2', title: 'Design', content: 'Resize by clicking!', color: 'from-purple-400 to-purple-600', size: 'normal', locked: false },
    { id: '3', title: 'History', content: 'Find the pattern...', color: 'from-pink-400 to-pink-600', size: 'normal', locked: false },
    { id: '4', title: 'Secret', content: '🔒 Unlock me!', color: 'from-gray-400 to-gray-600', size: 'normal', locked: true },
    { id: '5', title: 'Modern', content: 'Interactive fun!', color: 'from-green-400 to-green-600', size: 'normal', locked: false },
    { id: '6', title: 'Bonus', content: '🔒 Hidden treasure!', color: 'from-gray-400 to-gray-600', size: 'normal', locked: true },
  ])
  
  const [unlockedCount, setUnlockedCount] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  
  // Check if puzzle is solved (correct order)
  const correctOrder = ['1', '2', '3', '4', '5', '6']
  
  useEffect(() => {
    const currentOrder = puzzlePieces.map(p => p.id)
    const isCorrectOrder = JSON.stringify(currentOrder) === JSON.stringify(correctOrder)
    
    if (isCorrectOrder && puzzlePieces.some(p => p.locked)) {
      // Unlock all pieces!
      const unlocked = puzzlePieces.map(p => ({ ...p, locked: false }))
      setPuzzlePieces(unlocked)
      setShowCelebration(true)
      setTimeout(() => setShowCelebration(false), 3000)
    }
  }, [puzzlePieces])
  
  // Toggle piece size
  const toggleSize = (id) => {
    setPuzzlePieces(prev => prev.map(p => 
      p.id === id && !p.locked
        ? { ...p, size: p.size === 'normal' ? 'large' : p.size === 'large' ? 'small' : 'normal' }
        : p
    ))
  }
  
  // Unlock a specific piece (when conditions are met)
  const unlockPiece = (id) => {
    setPuzzlePieces(prev => prev.map(p => 
      p.id === id && p.locked
        ? { ...p, locked: false, color: 'from-yellow-400 to-orange-600' }
        : p
    ))
    setUnlockedCount(prev => prev + 1)
  }
  
  // Reset puzzle
  const resetPuzzle = () => {
    setPuzzlePieces([
      { id: '1', title: 'Welcome', content: 'Drag me around!', color: 'from-blue-400 to-blue-600', size: 'normal', locked: false },
      { id: '2', title: 'Design', content: 'Resize by clicking!', color: 'from-purple-400 to-purple-600', size: 'normal', locked: false },
      { id: '3', title: 'History', content: 'Find the pattern...', color: 'from-pink-400 to-pink-600', size: 'normal', locked: false },
      { id: '4', title: 'Secret', content: '🔒 Unlock me!', color: 'from-gray-400 to-gray-600', size: 'normal', locked: true },
      { id: '5', title: 'Modern', content: 'Interactive fun!', color: 'from-green-400 to-green-600', size: 'normal', locked: false },
      { id: '6', title: 'Bonus', content: '🔒 Hidden treasure!', color: 'from-gray-400 to-gray-600', size: 'normal', locked: true },
    ])
    setUnlockedCount(0)
    setShowCelebration(false)
  }
  
  return (
    <div className="relative w-full p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">
          🧩 Interactive Puzzle
        </h2>
        <p className="text-center text-secondary mb-4 text-sm sm:text-base">
          Drag pieces to rearrange • Click to resize • Arrange in order 1-6 to unlock secrets!
        </p>
        
        {/* Controls */}
        <div className="flex justify-center gap-4 flex-wrap">
          <motion.button
            onClick={resetPuzzle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </motion.button>
          
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base">
            <Trophy className="w-4 h-4 text-yellow-500" />
            Unlocked: {unlockedCount}
          </div>
        </div>
      </div>
      
      {/* Celebration Effect */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-8 py-6 rounded-2xl shadow-2xl text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-4 animate-pulse" />
              <h3 className="text-3xl font-bold mb-2">🎉 Puzzle Solved!</h3>
              <p className="text-lg">All secrets unlocked!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Puzzle Grid - Draggable/Reorderable */}
      <Reorder.Group
        axis="y"
        values={puzzlePieces}
        onReorder={setPuzzlePieces}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {puzzlePieces.map((piece) => (
          <Reorder.Item
            key={piece.id}
            value={piece}
            dragListener={!piece.locked}
            className={`
              ${piece.size === 'small' ? 'sm:col-span-1' : ''}
              ${piece.size === 'normal' ? 'sm:col-span-1' : ''}
              ${piece.size === 'large' ? 'sm:col-span-2' : ''}
            `}
          >
            <motion.div
              layout
              onClick={() => toggleSize(piece.id)}
              whileHover={{ scale: piece.locked ? 1 : 1.02 }}
              whileTap={{ scale: piece.locked ? 1 : 0.98 }}
              className={`
                relative overflow-hidden rounded-2xl shadow-xl
                bg-gradient-to-br ${piece.color}
                cursor-${piece.locked ? 'not-allowed' : 'grab'}
                active:cursor-${piece.locked ? 'not-allowed' : 'grabbing'}
                transition-all duration-300
                ${piece.locked ? 'opacity-60' : 'opacity-100'}
                ${piece.size === 'small' ? 'h-32' : ''}
                ${piece.size === 'normal' ? 'h-48' : ''}
                ${piece.size === 'large' ? 'h-64' : ''}
              `}
            >
              {/* Piece Number Badge */}
              <div className="absolute top-3 left-3 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-white">
                {piece.id}
              </div>
              
              {/* Lock/Unlock Button */}
              <div className="absolute top-3 right-3">
                {piece.locked ? (
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      // Simple unlock: click 3 times
                      const clicks = parseInt(e.currentTarget.dataset.clicks || '0') + 1
                      e.currentTarget.dataset.clicks = clicks
                      if (clicks >= 3) {
                        unlockPiece(piece.id)
                        e.currentTarget.dataset.clicks = '0'
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <Lock className="w-4 h-4 text-white" />
                  </motion.button>
                ) : (
                  <Unlock className="w-5 h-5 text-white/70" />
                )}
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{piece.title}</h3>
                <p className="text-sm sm:text-base opacity-90">{piece.content}</p>
                
                {piece.locked && (
                  <p className="text-xs mt-2 opacity-70">Click lock 3 times</p>
                )}
              </div>
              
              {/* Drag Handle Indicator */}
              {!piece.locked && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              )}
              
              {/* Size Indicator */}
              <div className="absolute bottom-3 right-3 text-xs text-white/50 font-mono">
                {piece.size}
              </div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      
      {/* Instructions */}
      <div className="max-w-4xl mx-auto mt-12 glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 gradient-text">How to Play:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl">👆</span>
            <div>
              <p className="font-semibold">Drag to Rearrange</p>
              <p className="text-secondary">Click and drag any unlocked piece to move it</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-2xl">📏</span>
            <div>
              <p className="font-semibold">Click to Resize</p>
              <p className="text-secondary">Click a piece to cycle: normal → large → small</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔓</span>
            <div>
              <p className="font-semibold">Unlock Secrets</p>
              <p className="text-secondary">Click locked pieces 3 times to unlock</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="font-semibold">Solve the Puzzle</p>
              <p className="text-secondary">Arrange pieces in order 1-6 to win!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden Achievement Section (unlocked when all pieces are unlocked) */}
      {puzzlePieces.every(p => !p.locked) && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-2xl p-6 text-white text-center"
        >
          <Trophy className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">🎊 Achievement Unlocked!</h3>
          <p className="text-lg mb-4">You've discovered all the hidden sections!</p>
          <div className="glass bg-white/20 rounded-xl p-4 mt-4">
            <p className="text-sm">
              <strong>Secret Revealed:</strong> The true beauty of Humanist Modernism 
              lies in its playful interaction with timeless design principles!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}