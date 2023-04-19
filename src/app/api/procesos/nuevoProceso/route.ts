import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const apiKey =
    '5yDrhI0LSn7ByLz6XrUZgOTLQfv8MoCwqdkEZGKc4nYdb2T97aLmpkqszXLYk0KV';
    const res = await fetch(
        `https://us-east-1.aws.data.mongodb-api.com/app/data-ixleg/endpoint/data/v1/action/findOne/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': apiKey,
                'Access-Control-Request-Headers': '*',
            },
            body: JSON.stringify({
                collection: 'Procesos',
                database: 'RyS',
                dataSource: 'Cluster0',
                projection: { _id: id },
            }),
        },
    );
    const product = await res.json();

    return NextResponse.json({ product });
}
