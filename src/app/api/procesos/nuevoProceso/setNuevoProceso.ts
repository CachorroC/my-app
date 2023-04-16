import { NextResponse } from 'next/server';

export async function POST () {
  const res = await fetch( 'https://us-east-1.aws.data.mongodb-api.com/app/data-ixleg/endpoint/data/v1/action/insertOne', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': '5yDrhI0LSn7ByLz6XrUZgOTLQfv8MoCwqdkEZGKc4nYdb2T97aLmpkqszXLYk0KV',
    },
    body: JSON.stringify( { time: new Date().toISOString() } ),
  } );

  const data = await res.json();

  return NextResponse.json( data );
}

