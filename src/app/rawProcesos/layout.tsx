import { ReactNode } from 'react';
import layout from '#@/styles/css/layout.module.css';
export default function Layout (
    {
        children,
        params }: {
            children: ReactNode;
            params: {
                slug: number;
            };
        }
) {
    return (
        <div className={ layout.body }>

            { children }
        </div>
    );
}

