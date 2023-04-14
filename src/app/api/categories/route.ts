import type { Category } from './category';

export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // We sometimes artificially delay a reponse for demo purposes.
    // Don't do this in real life :)
    const delay = searchParams.get('delay');
    if (delay) {
        await new Promise((resolve) =>
            setTimeout(resolve, Number(delay)),
        );
    }

    const idProceso = searchParams.get('idProceso');
    if (idProceso) {
        const category = data.find(
            (category) => category.idProceso === idProceso,
        );

        return new Response(
            JSON.stringify(category ?? null),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                },
            },
        );
    }

    const parent = searchParams.get('parent');
    const categories = data.filter((category) =>
        parent
            ? category.parent === parent
            : category.parent === null,
    );

    return new Response(JSON.stringify(categories), {
        status: 200,
        headers: {
            'content-type': 'application/json',
        },
    });
}

const data: Category[] = [
    {
        name: 'Electronics',
        idProceso: 'electronics',
        count: 11,
        parent: null,
    },
    {
        name: 'Clothing',
        idProceso: 'clothing',
        count: 12,
        parent: null,
    },
    {
        name: 'Books',
        idProceso: 'books',
        count: 10,
        parent: null,
    },
    {
        name: 'Phones',
        idProceso: 'phones',
        count: 4,
        parent: 'electronics',
    },
    {
        name: 'Tablets',
        idProceso: 'tablets',
        count: 5,
        parent: 'electronics',
    },
    {
        name: 'Laptops',
        idProceso: 'laptops',
        count: 2,
        parent: 'electronics',
    },
    {
        name: 'Tops',
        idProceso: 'tops',
        count: 3,
        parent: 'clothing',
    },
    {
        name: 'Shorts',
        idProceso: 'shorts',
        count: 4,
        parent: 'clothing',
    },
    {
        name: 'Shoes',
        idProceso: 'shoes',
        count: 5,
        parent: 'clothing',
    },
    {
        name: 'Fiction',
        idProceso: 'fiction',
        count: 5,
        parent: 'books',
    },
    {
        name: 'Biography',
        idProceso: 'biography',
        count: 2,
        parent: 'books',
    },
    {
        name: 'Education',
        idProceso: 'education',
        count: 3,
        parent: 'books',
    },
];
