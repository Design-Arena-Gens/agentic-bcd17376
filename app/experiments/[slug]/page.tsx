import { experiments } from '@/data/experiments';
import { notFound } from 'next/navigation';
import { Tag } from '@/components/Tag';
import { MediaGallery } from '@/components/MediaGallery';

export function generateStaticParams() {
  return experiments.map(e => ({ slug: e.slug }));
}

export default function ExperimentDetail({ params }: { params: { slug: string } }) {
  const exp = experiments.find(e => e.slug === params.slug);
  if (!exp) return notFound();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold">{exp.title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{exp.summary}</p>
        <div className="flex flex-wrap gap-2">
          <Tag>{exp.durationMinutes} min</Tag>
          <Tag>Age {exp.ageRange}</Tag>
          {exp.tags.map(t => (<Tag key={t}>{t}</Tag>))}
        </div>
      </div>

      <MediaGallery images={exp.images} videos={exp.videos} />

      <section className="card p-4 space-y-2">
        <h2 className="font-bold text-lg">What you need</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
          {exp.ingredients.map(i => (<li key={i}>{i}</li>))}
        </ul>
      </section>

      <section className="card p-4 space-y-2">
        <h2 className="font-bold text-lg">Steps</h2>
        <ol className="list-decimal list-inside space-y-1">
          {exp.steps.map((s, idx) => (
            <li key={idx} className="text-sm text-gray-800 dark:text-gray-100">{s}</li>
          ))}
        </ol>
      </section>

      {exp.safetyNotes && (
        <section className="card p-4">
          <h2 className="font-bold text-lg">Safety</h2>
          <p className="text-sm text-gray-800 dark:text-gray-100">{exp.safetyNotes}</p>
        </section>
      )}

      <section className="card p-4 space-y-2">
        <h2 className="font-bold text-lg">For adults: the science</h2>
        <p className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap">{exp.learnMore}</p>
      </section>

      <section className="card p-4 space-y-2">
        <h2 className="font-bold text-lg">Explain to kids</h2>
        <p className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap">{exp.explainToKid}</p>
      </section>
    </div>
  );
}
