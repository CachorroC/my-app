import layout from "#@/styles/css/layout.module.css";
import { ProcesosProvider } from "./search-context";
export default async function Layout ( {
    children,
}: {
    children: React.ReactNode;
} ) 
{

    return (
        <div className={ layout.procesos }>
            <ProcesosProvider>
                <article>{ children }</article>
            </ProcesosProvider>
        </div>
    );
}
