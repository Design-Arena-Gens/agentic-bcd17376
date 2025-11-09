'use client';

import { useMemo } from 'react';
import type { Experiment } from '@/lib/types';
import { useSelection } from '@/components/SelectionContext';
import { ExperimentCard } from '@/components/ExperimentCard';

export function ExperimentList({ allExperiments }: { allExperiments: Experiment[] }) {
  const { selected, query } = useSelection();

  const results = useMemo(() => {
    const selectedList = Array.from(selected);
    const lowQ = query.toLowerCase();
    return allExperiments.filter(exp => {
      const matchesIngredients = selectedList.every(i => exp.ingredients.includes(i));
      const matchesQuery = !lowQ ||
        exp.title.toLowerCase().includes(lowQ) ||
        exp.summary.toLowerCase().includes(lowQ) ||
        exp.tags.some(t => t.toLowerCase().includes(lowQ));
      return matchesIngredients && matchesQuery;
    });
  }, [allExperiments, selected, query]);

  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-500">
        Showing <span className="font-semibold">{results.length}</span> experiment{results.length === 1 ? '' : 's'}
      </div>
      <div className="grid gap-3">
        {results.map(exp => (
          <ExperimentCard key={exp.slug} exp={exp} />
        ))}
      </div>
      {results.length === 0 && (
        <div className="text-center text-gray-500 text-sm py-6">No matches yet. Try fewer filters or different keywords.</div>
      )}
    </div>
  );
}
