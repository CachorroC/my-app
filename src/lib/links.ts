
import Link from 'next/link';

export interface Item {
  name: string;
  icon: string;
  description?: string;
  id: number;

  href?: string | null;
}

export const linksInternos: Item[] = [
    {
        href: '/blog',
        name: 'blog',
        icon: 'book',
        id: 10,
    },
    {
        href: '/bancolombia',
        name: 'Bancolombia',
        icon: 'account_balancing',
        id: 11,
    },
];
export const linksExternos: Item[] = [
    {
        name: 'zero trust',
        href: 'https://dash.teams.cloudflare.com',
        icon: 'zero',
        id: 1,
    },
    {
        name: ' cloudflare',
        href: 'https://dash.cloudflare.com',
        icon: 'cloud',
        id: 2,
    },
];
export const demos: { name: string; items: Item[]; }[] = [
    {
        name: 'Links Internos',
        items: [
            {
                href: 'Bancolombia',
                name: 'Bancolombia',
                icon: 'account_balance',
                id: 2,
            },
            {
                href: 'Reintegra',
                name: 'Reintegra',
                icon: 'integration_instructions',
                id: 3,
            },
            {
                href: '',
                name: 'Procesos',
                icon: 'phishing',
                id: 4,
            },
            {
                href: '/buscar',
                name: 'Buscar',
                icon: 'search',
                id: 5,
            },
        ],
    },
    {
        name: 'Links Externos',
        items: [
            {
                name: 'Dash Spotify',
                href: 'not-found',
                icon: 'search_off',
                id: 12,
                description:
          'Create Not Found UI for specific parts of an app',
            },
        ],
    },
];
