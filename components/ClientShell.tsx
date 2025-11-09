'use client';

import { SelectionProvider } from '@/components/SelectionContext';
import { IngredientSelector } from '@/components/IngredientSelector';
import { ExperimentList } from '@/components/ExperimentList';
import type { Experiment, Ingredient } from '@/lib/types';

export function ClientShell({
  allExperiments,
  allIngredients,
}: {
  allExperiments: Experiment[];
  allIngredients: Ingredient[];
}) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold">What do you have at home?</h1>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Pick ingredients and we will suggest exciting experiments. Great for kids, with adult-friendly science notes.</p>
      <SelectionProvider>
        <IngredientSelector allIngredients={allIngredients} />
        <ExperimentList allExperiments={allExperiments} />
      </SelectionProvider>
    </div>
  );
}
