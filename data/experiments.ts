import type { Experiment, Ingredient } from '@/lib/types';

export const experiments: Experiment[] = [
  {
    slug: 'homemade-lava-lamp',
    title: 'Homemade Lava Lamp',
    summary: 'Make colorful blobs dance with oil, water, and fizzing tablets.',
    ingredients: ['water', 'oil', 'foodColoring', 'effervescentTablet', 'cup'],
    steps: [
      'Fill a clear cup 2/3 with oil and 1/3 with water (water goes in last).',
      'Add a few drops of food coloring (it sinks to the water).',
      'Drop half an effervescent tablet and watch the blobs rise and fall!',
      'Add more tablet pieces to keep it going.'
    ],
    durationMinutes: 10,
    ageRange: '4-10',
    tags: ['chemistry', 'density', 'gases'],
    learnMore: 'Oil and water do not mix because oil is non-polar and water is polar. Food coloring dissolves in water but not oil. The tablet produces carbon dioxide gas in the water, forming bubbles that carry colored water upward. When bubbles pop, the dense water falls back down.',
    explainToKid: 'Oil and water are like two friends that don?t hold hands. The fizzy tablet makes tiny bubbles that grab the colored water and carry it up. When the bubbles pop, the water falls back down like rain!',
    safetyNotes: 'Do not drink the mixture. Supervise young children around tablets.',
    images: ['/images/lava-lamp.svg'],
    videos: [{ type: 'youtube', url: 'https://www.youtube.com/embed/6F1B4N4qL3g', title: 'Lava Lamp Demo' }],
  },
  {
    slug: 'walking-water-rainbow',
    title: 'Walking Water Rainbow',
    summary: 'Paper towels move colored water between cups to make new colors.',
    ingredients: ['water', 'foodColoring', 'paperTowel', 'cup', 'spoon'],
    steps: [
      'Line up 5?7 cups. Fill every other cup with water.',
      'Add different food colors to the water cups and stir.',
      'Fold paper towels into strips and connect each pair of cups.',
      'Watch water ?walk? through the towels and mix colors in the empty cups.'
    ],
    durationMinutes: 30,
    ageRange: '4-9',
    tags: ['capillary action', 'color mixing'],
    learnMore: 'Paper towels have tiny fibers that pull water upward through capillary action. The water travels across the fibers from full cups to empty ones until the water levels balance. Dyes mix to create secondary colors.',
    explainToKid: 'Paper towels are like tiny straws that sip water and carry it to the next cup. When colors meet, they make new colors?like magic painting!',
    images: ['/images/walking-water.svg'],
    videos: [{ type: 'youtube', url: 'https://www.youtube.com/embed/9c0w5J4W2aY', title: 'Walking Water' }],
  },
  {
    slug: 'ice-fishing-with-string',
    title: 'Ice Fishing with String',
    summary: 'Lift an ice cube using only string and salt?no hands!',
    ingredients: ['ice', 'salt', 'string', 'water', 'cup'],
    steps: [
      'Place an ice cube in a cup of water.',
      'Lay a string across the cube, then sprinkle salt on top.',
      'Wait 1 minute, then gently lift the string?the ice sticks!'
    ],
    durationMinutes: 8,
    ageRange: '5-10',
    tags: ['freezing point', 'phase change'],
    learnMore: 'Salt lowers water?s freezing point, melting the ice slightly. As the salt dissolves and dilutes, the water refreezes, trapping the string in the ice surface.',
    explainToKid: 'Salt makes the ice melt a little, then it freezes again and grabs the string?like glue made of ice!',
    images: ['/images/ice-fishing.svg'],
    videos: [{ type: 'youtube', url: 'https://www.youtube.com/embed/0S4mSumWYt4', title: 'Ice Fishing Trick' }],
  },
  {
    slug: 'static-butterfly',
    title: 'Static Butterfly',
    summary: 'Make a tissue-paper butterfly flap by rubbing a balloon.',
    ingredients: ['balloon', 'paperTowel', 'ribbon'],
    steps: [
      'Cut a butterfly shape from tissue or paper towel and hang it with ribbon.',
      'Blow up a balloon and rub it on hair or fabric for 15 seconds.',
      'Bring the balloon near the butterfly and watch it move!'
    ],
    durationMinutes: 5,
    ageRange: '3-8',
    tags: ['static electricity', 'forces'],
    learnMore: 'Rubbing the balloon transfers electrons, giving it a negative charge. The neutral paper becomes polarized and is attracted to the charged balloon due to electrostatic force.',
    explainToKid: 'The balloon gets a tiny invisible charge that pulls the paper like a magnet for paper!',
    images: ['/images/static-butterfly.svg'],
    videos: [{ type: 'youtube', url: 'https://www.youtube.com/embed/9f7sG_2xY5w', title: 'Static Butterfly' }],
  },
  {
    slug: 'volcano-in-a-cup',
    title: 'Volcano in a Cup',
    summary: 'Foamy eruption using baking soda and vinegar in a cup.',
    ingredients: ['bakingSoda', 'vinegar', 'foodColoring', 'cup', 'spoon'],
    steps: [
      'Put 2 spoons of baking soda in a cup.',
      'Add a few drops of food coloring.',
      'Pour in vinegar and watch the foam overflow!'
    ],
    durationMinutes: 5,
    ageRange: '3-9',
    tags: ['acid-base', 'gas production'],
    learnMore: 'Vinegar (acetic acid) reacts with sodium bicarbonate (baking soda) to form carbon dioxide gas, water, and sodium acetate. Rapid CO? bubbles create foam.',
    explainToKid: 'When the sour liquid meets the white powder, they make lots of bubbles that push the liquid up?like a tiny volcano!',
    images: ['/images/volcano.svg'],
    videos: [{ type: 'youtube', url: 'https://www.youtube.com/embed/CN4zQY5m7kc', title: 'Baking Soda Volcano' }],
  },
];

export function listAllIngredients(exps: Experiment[]): Ingredient[] {
  const set = new Set<Ingredient>();
  for (const e of exps) e.ingredients.forEach(i => set.add(i));
  return Array.from(set);
}
