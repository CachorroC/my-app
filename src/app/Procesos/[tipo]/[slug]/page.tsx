import type { Actuacion } from "#@/app/api/procesos/proceso";
import { notFound } from "next/navigation";
import styles from "#@/styles/css/actuacion.module.css";
import box from "#@/styles/scss/box.module.scss";

import "server-only";
import { Suspense } from "react";
import { ProcesosBox, ProcesosBoxSkeleton } from "#@/components/procesos-box";
export default async function Page ( {
    params,
}: {
    params: { tipo: string; slug: string; };
} ) {
    alert( params.slug );
    const res = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ params.slug }?pagina=1`,
        { cache: "no-store" }
    );
    const actuaciones = await res.json();

    if ( !actuaciones ) notFound();
    return (
        <div className={ `${ styles.module } ${ box.container }` }>
            <Suspense fallback={ <ProcesosBoxSkeleton /> }>
                {/* @ts-expect-error Async Server Component */ }
                <ProcesosBox
                    data={ fetch(
                        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ params.slug }?pagina=1`,
                        { cache: "no-store" }
                    ) }
                    path={ `/Procesos/${ params.tipo }/${ params.slug }` }
                />
            </Suspense>
            { actuaciones.actuaciones.map( ( actuacion: Actuacion ) => (
                <div
                    className={ box.container }
                    key={ actuacion.consActuacion }
                >

                </div>
            ) ) }
        </div>
    );
}
