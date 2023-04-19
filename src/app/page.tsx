import Image from 'next/image';
import { Poiret_One } from 'next/font/google';
import styles from '#@/styles/css/page.module.css';
import Link from 'next/link';

import box from '#@/styles/scss/box.module.scss';
import Form from '#@/components/form';
import { demos } from '#@/lib/links';
import layout from '#@/styles/scss/layout.module.scss';

const poiret = Poiret_One( {
    weight: '400',
    subsets: [
        'latin', 'latin-ext'
    ],
    display: 'swap',
} );

export default async function Home () {
    return (
        <div className={ layout.body }>
            { demos.map( ( section ) => (
                <div
                    className={ styles.section }
                    key={ section.name }>
                    <h1
                        className={ `${ styles.h1 } ${ poiret.className }` }>
                        { section.name }
                    </h1>
                    <div className={ styles.group }>
                        { ' ' }
                        { section.items.map( ( item ) => (
                            <Link
                                href={ `/Procesos/${ item.href }` }
                                key={ item.id }
                                className={ styles.module }>
                                <h2
                                    className={ `${ styles.h2 } 
                        ${ poiret.className }` }>
                                    { item.name }
                                </h2>
                                { item.description ? (
                                    <p>{ item.description }</p>
                                ) : null }
                                <span className="material-symbols-outlined">
                                    { item.icon }
                                </span>
                            </Link>
                        ) ) }
                        <Form />
                    </div>
                </div>
            ) ) }
        </div>
    );
}
