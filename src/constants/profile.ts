interface Profile {
  name: string;
  title: string;
  location: string;
  bio: string;
  contact: Record<string, string>;
  skills: string[];
}

export const profile: Profile = {
  name: 'Alexandr Musikhin',
  title: 'Frontend Developer',
  location: 'Russia',
  bio: 'Passionate about developing innovative solutions and tools. I am open for cooperation and exchange of experience.',
  contact: {
    email: 'musts_ruses.8q@icloud.com',
    website: 'https://tophackr.com',
    github: 'https://github.com/tophackr',
    telegram: '@tophackr',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Turborepo',
    'Redux',
    'Telegram Mini Apps (TMA)',
    'TailwindCSS',
    'Features Sliced Design (FSD)',
    'Nest.js',
    'Prisma',
  ],
};
