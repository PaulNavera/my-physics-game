import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useGameStore = create(
  persist(
    (set, get) => ({
      // Game state
      currentGame: null, // 'story-mode' | 'encyclopedia'
      gameProgress: {
        game1: { completed: false, score: 0, unlocked: true },
        game2: { completed: false, score: 0, unlocked: false }
      },
      
      // UI state
      showTutorial: true,
      soundEnabled: true,
      musicEnabled: true,
      
      // Actions
      startGame: (gameType) => set({ currentGame: gameType }),
      
      completeGame: (gameId, score) => set((state) => ({
        gameProgress: {
          ...state.gameProgress,
          [gameId]: {
            ...state.gameProgress[gameId],
            completed: true,
            score: Math.max(state.gameProgress[gameId].score, score)
          }
        }
      })),
      
      unlockGame: (gameId) => set((state) => ({
        gameProgress: {
          ...state.gameProgress,
          [gameId]: {
            ...state.gameProgress[gameId],
            unlocked: true
          }
        }
      })),
      
      toggleTutorial: () => set((state) => ({ showTutorial: !state.showTutorial })),
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      toggleMusic: () => set((state) => ({ musicEnabled: !state.musicEnabled })),
      
      resetProgress: () => set({
        gameProgress: {
          game1: { completed: false, score: 0, unlocked: true },
          game2: { completed: false, score: 0, unlocked: false }
        }
      })
    }),
    {
      name: 'physics-game-storage',
      partialize: (state) => ({
        gameProgress: state.gameProgress,
        showTutorial: state.showTutorial,
        soundEnabled: state.soundEnabled,
        musicEnabled: state.musicEnabled
      })
    }
  )
); 