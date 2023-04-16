import Tab from '#@/components/tab';
import { Proceso } from '#@/app/api/procesos/proceso';
import box from '#@/styles/css/box.module.css';

export type Item = {
  text: string;
  idProceso?: string;
  segment?: string;
};

export const TabGroup = ({
  path,
  items,
}: {
  path: string;
  items: Proceso[];
}) => (
  <div className={box.grid}>
    {' '}
    {items.map((item) => (
      <Tab
        proceso={item}
        key={item.idProceso}
      />
    ))}
  </div>
);
