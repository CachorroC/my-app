import layout from "#@/styles/css/layout.module.css";
import { getProcesos } from '#@/app/api/procesos/getProcesos';
import box from '#@/styles/css/box.module.css';
import { TabGroup } from '#@/components/tab-group';
import { SearchProvider } from '#@/app/Procesos//search-context';
import drawer from '#@/styles/css/drawer.module.css';
import ContextInputSearch, { Search }from '#@/app/Procesos/context-input-search';

export const metadata = {
  title: 'Procesos',
};

export default async function Layout (
  { children, }: { children: React.ReactNode; }
) {
  const procesos = await getProcesos();
  return (
    <div className={ box.container } >
      <SearchProvider>
        <div className={drawer.box}>
          <ContextInputSearch />
          <Search procesos={procesos}/>
        </div>
        
          
        <article className={drawer.container}>{ children }</article>
  
      </SearchProvider >
    </div>
  );
}
