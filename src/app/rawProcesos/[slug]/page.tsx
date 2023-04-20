import { getBaseUrl } from "#@/lib/getBaseUrl";
import Card from '../../../components/card';
import box from '#@/styles/scss/box.module.scss';
import { getData } from "#@/app/api/rys/getMongo";
export default async function Page ( { params }: { params: { slug: string; }; } ) {
    const procesos = await fetch(
        `${ getBaseUrl() }/api/rys`,
    ).then( ( res ) => res.json() );

    const prueba = await getData( 113956611 );

    return (
        <div className={ box.container }>


            <p>{ JSON.stringify( prueba ) }</p>

        </div>
    );

}
