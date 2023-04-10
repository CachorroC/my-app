import Tab from "#@/components/tab";
import { Proceso } from '#@/app/api/procesos/proceso';

export type Item = {
    text: string;
    slug?: string;
    segment?: string;
};

export const TabGroup = ( { path, items }: { path: string; items: Proceso[]; } ) => (
    <div className="flex flex-wrap items-center gap-2">
        { " " }
        { items.map( ( item ) => (
            <Tab proceso={ item } key={ item.slug } />
        ) ) }
    </div>
);
