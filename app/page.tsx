import { experiments, listAllIngredients } from '@/data/experiments';
import { ClientShell } from '@/components/ClientShell';

export default function Home() {
  // NOTE: Using a Client Component wrapper for selector + list
  return (
    <ClientShell
      allExperiments={experiments}
      allIngredients={listAllIngredients(experiments)}
    />
  );
}
