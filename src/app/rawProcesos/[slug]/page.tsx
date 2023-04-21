import { getBaseUrl } from "#@/lib/getBaseUrl";
import Card from '../../../components/card';
import box from '#@/styles/scss/box.module.scss';
import { getData } from "#@/app/api/rys/getMongo";
export default async function Page ( { params }: { params: { slug: string; }; } ) {
    const procesos = await fetch(
        `${ getBaseUrl() }/api/rys`, {
            method: 'POST'
        }
    ).then( ( res ) => res.json() );
    const res = await fetch(
        'https://us-east-1.aws.data.mongodb-api.com/app/data-ixleg/endpoint/data/v1/action/find',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'API-Key': 'AJ5DLV2PPDPFQSr6mnQNP4JypMGGs1vbvd9lflBuHRt48LolaUo9HJnpLsXq7foQ',
            },
            body: JSON.stringify(
                {
                    collection: 'Procesos',
                    database: 'RyS',
                    dataSource: 'Cluster0',
                    filter: {}

                }
            )
        }
    );
    const raw = await res.json();


    return (
        <div className={ box.container }>


            <p>{ JSON.stringify( raw ) }</p>

        </div>
    );

}
