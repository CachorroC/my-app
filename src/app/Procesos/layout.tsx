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

        <div className={ box.container } >
            <h4>Server component</h4>
            <div className={ box.container }>
                <h4>Search Contect Provider CC</h4>
                <SearchProvider>
                    <div className={ box.container }>
                        <h4>Server Component Boundary</h4>
                        <div className={ box.container }>
                            <div className={ box.container }>
                                <TabGroup path={ '' } items={ procesos } />
                            </div>
                            <ContextInputSearch />
                            <article>{ children }</article>
                        </div>
                    </div>
                </SearchProvider>
            </div>
        </div>
    );
}
