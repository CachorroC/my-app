
import typeface from '#@/styles/css/typeface.module.css';
import Link from 'next/link';
import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from 'react';
import box from '#@/styles/css/box.module.css';
import { poiret } from './typeface';
import card from '#@/styles/css/card.module.css';
import { Route } from 'next';

export default function Card<T extends string> ( {
    id, content, title, href, icon
}: { id: string; content: string; title: string; href: Route<T> | URL; icon: string; } ) {
    return (
        <div
            className={ card.layout }
            key={ id }>
            <h4 className={ card.title }>{ title }</h4>
            <hr className={ card.dummytxt }></hr>
            <p className={ card.content }>{ content }</p>
            <hr className={ card.dummytxt }></hr>
            <Link href={ href } className={ card.link }>
                <hr className={ card.dummytxt }></hr>
                <span className='material-symbols-outlined'>
                    { icon }
                </span>
            </Link>
            <hr className={ card.dummytxt }></hr>
        </div>
    );
}
