import { NextResponse } from 'next/server';

export async function POST ({idProceso}: {idProceso: number}) {
    const res = await fetch( 'https://us-east-1.aws.data.mongodb-api.com/app/data-ixleg/endpoint/data/v1/action/findOne', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'API-Key': 'AJ5DLV2PPDPFQSr6mnQNP4JypMGGs1vbvd9lflBuHRt48LolaUo9HJnpLsXq7foQ',
        },
        body: JSON.stringify( { collection: 'Procesos', database: 'RyS', dataSource: 'Cluster0', filter :{ idProceso : idProceso }} ),
    } );

    const data = await res.json();

    return NextResponse.json( data );
}
