'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import type { Experiment, Ingredient } from '@/lib/types';

export type SelectionState = {
  selected: Set<Ingredient>;
  toggle: (ingredient: Ingredient) => void;
  clear: () => void;
  query: string;
  setQuery: (q: string) => void;
};

const SelectionContext = createContext<SelectionState | null>(null);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<Set<Ingredient>>(new Set());
  const [query, setQuery] = useState('');

  const value = useMemo<SelectionState>(() => ({
    selected,
    toggle: (i: Ingredient) => {
      setSelected(prev => {
        const next = new Set(prev);
        if (next.has(i)) next.delete(i);
        else next.add(i);
        return next;
      });
    },
    clear: () => setSelected(new Set()),
    query,
    setQuery,
  }), [selected, query]);

  return (
    <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>
  );
}

export function useSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) throw new Error('useSelection must be used within SelectionProvider');
  return ctx;
}
