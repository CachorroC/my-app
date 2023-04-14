import layout from '#@/styles/css/layout.module.css';
import { getProcesos } from '#@/app/api/procesos/getProcesos';
import { SearchProvider } from '#@/app/Procesos//search-context';
import ContextInputSearch, {
    Search,
} from '#@/app/Procesos/context-input-search';
export const metadata = {
    title: 'Procesos',
};
export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const procesos = await getProcesos();
    return (
        <div className={layout.main}>
            <SearchProvider>
                <div className={layout.sidenav}>
                    <ContextInputSearch />
                    <Search procesos={procesos} />
                </div>
                <article className={layout.container}>
                    {children}
                </article>
            </SearchProvider>
        </div>
    );
}
