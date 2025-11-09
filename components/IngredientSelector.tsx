'use client';

import { useMemo, useState } from 'react';
import type { Ingredient } from '@/lib/types';
import { useSelection } from '@/components/SelectionContext';
import clsx from 'clsx';

const ingredientEmojis: Record<string, string> = {
  water: '??',
  oil: '???',
  ice: '??',
  salt: '??',
  sugar: '??',
  vinegar: '??',
  bakingSoda: '??',
  balloon: '??',
  paperTowel: '??',
  ribbon: '??',
  foodColoring: '??',
  string: '??',
  cup: '??',
  spoon: '??',
};

export function IngredientSelector({ allIngredients }: { allIngredients: Ingredient[] }) {
  const { selected, toggle, clear, query, setQuery } = useSelection();
  const [showAll, setShowAll] = useState(false);

  const ingredients = useMemo(() => {
    const low = query.toLowerCase();
    return allIngredients
      .filter(i => i.toLowerCase().includes(low))
      .sort((a, b) => a.localeCompare(b));
  }, [allIngredients, query]);

  const visible = showAll ? ingredients : ingredients.slice(0, 16);

  return (
    <div className="card p-3">
      <div className="flex items-center gap-2 mb-2">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search ingredients..."
          className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm"
        />
        <button className="btn btn-ghost text-sm" onClick={() => setShowAll(v => !v)}>
          {showAll ? 'Less' : 'More'}
        </button>
        <button className="btn btn-ghost text-sm" onClick={clear}>Clear</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {visible.map((i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={clsx(
              'px-3 py-2 rounded-2xl text-sm border transition',
              selected.has(i)
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10'
            )}
          >
            <span className="mr-1">{ingredientEmojis[i] ?? '??'}</span>
            {i}
          </button>
        ))}
      </div>
      {ingredients.length > 16 && (
        <div className="mt-3 text-center">
          <button className="btn btn-ghost text-sm" onClick={() => setShowAll(v => !v)}>
            {showAll ? 'Show fewer' : 'Show all'} ({ingredients.length})
          </button>
        </div>
      )}
    </div>
  );
}
