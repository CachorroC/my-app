import layout from "#@/styles/css/layout.module.css";
import { getProcesos } from '#@/app/api/procesos/getProcesos';
import box from '#@/styles/css/box.module.css';
import { TabGroup } from '#@/components/tab-group';
import { SearchProvider } from './search-context';
import ContextInputSearch, { Search } from './context-input-search';

export const metadata = {
    title: 'Procesos',
};

export default async function Layout (
    { children, }: { children: React.ReactNode; }
) {
    const procesos = await getProcesos();
    return (
        <div className={ box.flex } >
            <SearchProvider>
                <div className={ box.container }>
                    <ContextInputSearch />
                    <article>{ children }</article>
                </div>
            </SearchProvider >
        </div>
    );
}
