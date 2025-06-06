interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
}

interface Projects {
  projects: Project[];
}

export const projects: Projects = {
  projects: [
    {
      name: 'vroomly',
      description:
        'Smart assistant for your car. The service automatically monitors the condition of the car, collects detailed statistics on trips, fuel consumption, and the technical condition of components, and sends timely notifications about the need to replace spare parts or undergo maintenance.',
      tech: [
        'Turborepo',
        'React',
        'Redux',
        'Telegram Mini Apps',
        'Features Sliced Design',
        'Nest.js',
        'Prisma',
      ],
      url: 'https://github.com/tophackr/vroomly-monorepo',
    },
    {
      name: 'tmaui',
      description:
        'React components library for Telegram Mini Apps inspired by Telegram interface.',
      tech: ['JavaScript', 'TypeScript', 'React', 'Changesets'],
      url: 'https://github.com/tophackr/tmaui',
    },
    {
      name: 'Price Calc',
      description:
        'Find out the full price of the product in a matter of seconds! Enter the price and weight, and the app will automatically calculate the total amount. The simple interface, support for different currencies, and payment history will help you manage your finances easily. Start saving today!',
      tech: ['Next.js', 'Redux', 'Telegram Mini Apps', 'TailwindCSS'],
      url: 'https://github.com/tophackr/price-calc',
    },
    {
      name: 'GitHub Stat',
      description:
        'Track Your Activity on GitHub. Monitor and analyze developer performance with precision. This tool tracks commit activity, opened and closed issues, and a variety of project metrics, helping teams gain clear insight into development dynamics, productivity trends, and project evolution over time.',
      tech: ['Next.js', 'Redux', 'TailwindCSS'],
      url: 'https://github.com/tophackr/github-stat',
    },
    {
      name: 'Bree0',
      description:
        'Multifunctional Bot for Discord. A powerful all-in-one solution designed to enhance user engagement and server management. This bot improves client interaction through integrated features such as Clans, Custom Server Banners, Activity Tracking, and Leveling Systems — all crafted to build stronger communities and boost participation.',
      tech: ['TypeScript', 'discord.js'],
      url: 'https://github.com/bree0-team/bot',
    },
  ],
};
