import layout from '#@/styles/css/layout.module.css';
import { getProcesos } from '#@/app/api/procesos/getProcesos';
import { SearchProvider } from '#@/app/search-context';
import SearchBar, {
  Search,
} from '#@/app/context-input-search';
import { Nav } from '../context-click-counter';
import { Item } from '../../lib/links';
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
      <div className={layout.sidenav}>
        <SearchBar />
        <Nav procesos={procesos} />
      </div>
      <article className={layout.container}>
        {children}
      </article>
    </div>
  );
}
