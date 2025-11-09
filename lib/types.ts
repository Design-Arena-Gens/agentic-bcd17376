export type Ingredient = string;

export type VideoMedia = {
  type: 'youtube' | 'mp4';
  url: string; // youtube embed url or mp4 path
  title?: string;
};

export type Experiment = {
  slug: string;
  title: string;
  summary: string;
  ingredients: Ingredient[];
  steps: string[];
  durationMinutes: number;
  ageRange: string; // e.g., "4-8"
  tags: string[];
  learnMore: string; // adult-facing explanation
  explainToKid: string; // kid-facing explanation
  safetyNotes?: string;
  images: string[]; // paths under /public
  videos?: VideoMedia[];
};
