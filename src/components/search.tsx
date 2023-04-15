import searchbar from '#@/styles/css/searchbar.module.css';
import { Proceso } from '#@/app/api/procesos/proceso';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { ProcesoCard } from './proceso-card';
import layout from '#@/styles/css/layout.module.css';
import { notFound } from 'next/navigation';

export async function fetchProceso() {
  const res = await fetch(`${getBaseUrl()}/api/procesos`);
  if (!res.ok) {
    notFound();
  }
}
export async function SearchItems({
  search,
}: {
  search: string;
}) {
  const rows: any[] = [];
  const procesos = (await fetch(
    `${getBaseUrl()}/api/procesos`,
  ).then((res) => res.json())) as Proceso[];

  procesos.forEach((proceso: Proceso) => {
    if (
      proceso.Demandado.toLowerCase().indexOf(
        search.toLowerCase(),
      ) === -1
    ) {
      return;
    }
    rows.push(
      <ProcesoCard
        proceso={proceso}
        key={proceso.Demandado}
      />,
    );
  });

  return (
    <>
      <div className={searchbar.itemscontainer}>
        <p>rows push</p>
        {rows}
      </div>
      <div>
        <p>procesos map</p>
        {procesos.map((proceso) => (
          <div
            key={proceso.Demandado}
            className="col-span-4 lg:col-span-1">
            <ProcesoCard proceso={proceso} />
          </div>
        ))}
      </div>
    </>
  );
}
function ItemSkeleton() {
  return (
    <div className={layout.card}>
      <h1 className={searchbar.title}>{'Deudor'}</h1>
      <span className="material-symbols-outlined">
        loading
      </span>
      <i>
        <strong>{'dia/mes/año'}</strong>
      </i>
    </div>
  );
}

export function SearchItemsEskeleton() {
  return (
    <div className="space-y-6 pb-[5px]">
      <div className="grid grid-cols-4 gap-6">
        <ItemSkeleton key={1} />
        <ItemSkeleton key={2} />
        <ItemSkeleton key={3} />
        <ItemSkeleton key={4} />
      </div>
    </div>
  );
}
