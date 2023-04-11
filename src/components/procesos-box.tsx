
import { Actuacion } from '../app/api/procesos/proceso';
import Block from './actuacion';

export async function ProcesosBox (
    {
        path,
        params,
    }: {
        path: string;
        params: { tipo: string; slug: string; };
    }
) {
    const res = await fetch(
        `https://consultaactuacions.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ params.slug }?pagina=1`,
        { cache: "no-store" }
    );
    const actuaciones = await res.json();


    return (
        <div className="space-y-6">
            <div>
                <div className="text-lg font-medium text-white">
                    Recommended Procesos for You
                </div>
                <div className="text-sm text-gray-400">
                    Based on your preferences and shopping habits
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                { actuaciones.map( ( actuacion: Actuacion ) => (
                    <div
                        key={ actuacion.slug }
                        className="col-span-4 lg:col-span-1"
                    >
                        <Block path={ path } item={ actuacion }

                        />
                    </div>
                ) ) }
            </div>
        </div>
    );
}

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function ProcesoSkeleton () {
    return (
        <div className="col-span-4 space-y-4 lg:col-span-1">
            <div
                className={ `relative h-[167px] rounded-xl bg-gray-900 ${ shimmer }` }
            />

            <div className="h-4 w-full rounded-lg bg-gray-900" />
            <div className="h-6 w-1/3 rounded-lg bg-gray-900" />
            <div className="h-4 w-full rounded-lg bg-gray-900" />
            <div className="h-4 w-4/6 rounded-lg bg-gray-900" />
        </div>
    );
}

export function ProcesosBoxSkeleton () {
    return (
        <div className="space-y-6 pb-[5px]">
            <div className="space-y-2">
                <div
                    className={ `h-6 w-1/3 rounded-lg bg-gray-900 ${ shimmer }` }
                />
                <div
                    className={ `h-4 w-1/2 rounded-lg bg-gray-900 ${ shimmer }` }
                />
            </div>

            <div className="grid grid-cols-4 gap-6">
                <ProcesoSkeleton />
                <ProcesoSkeleton />
                <ProcesoSkeleton />
                <ProcesoSkeleton />
            </div>
        </div>
    );
}
