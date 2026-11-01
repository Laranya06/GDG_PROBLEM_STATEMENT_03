import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { PortfolioMode } from '@/types/portfolio';

const STORAGE_KEY = 'portfolio-mode';

interface PortfolioModeContextValue {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
}

const PortfolioModeContext = createContext<PortfolioModeContextValue | null>(null);

function readInitialMode(): PortfolioMode {
  return localStorage.getItem(STORAGE_KEY) === 'team' ? 'team' : 'individual';
}

export function PortfolioModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>(readInitialMode);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode }), [mode]);

  return <PortfolioModeContext.Provider value={value}>{children}</PortfolioModeContext.Provider>;
}

export function usePortfolioMode(): PortfolioModeContextValue {
  const context = useContext(PortfolioModeContext);
  if (!context) throw new Error('usePortfolioMode must be used within PortfolioModeProvider');
  return context;
}
