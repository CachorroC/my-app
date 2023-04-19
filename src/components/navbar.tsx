'use client';
import styles from '#@/styles/css/navbar.module.css';
import { demos } from '#@/lib/links';
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { Drawer } from '@mui/material';
import { Poiret_One } from 'next/font/google';
import 'material-symbols';
import NavItem from '#@/components/navitem';
import layout from '#@/styles/scss/layout.module.scss';

const poiret = Poiret_One( {
    weight: '400',
    subsets: [
        'latin', 'latin-ext'
    ],
    display: 'swap',
} );

export default function Navbar ( { children }: { children: ReactNode; } ) {
    const [
        isOpen, setIsOpen
    ] = useState( false );
    const close = () => setIsOpen( false );
    const drawerToggle = () => {
        setIsOpen(
            ( prevState ) => !prevState );
    };
    const drawer = (
        <div
            className={ styles.drawer }
            onClick={ close }> {
                demos.map(
                    ( section ) => (
                        <nav
                            key={ section.name }
                            className={ styles.menu }>
                            <h1 className={ poiret.className }>
                                { section.name }
                            </h1> {
                                section.items.map(
                                    ( link ) => (
                                        <NavItem
                                            key={ link.id }
                                            link={ link }
                                            close={ close }
                                            className={ poiret.className }
                                        />
                                    )
                                )
                            }
                        </nav>
                    )
                )
            }
        </div>
    );
    return (
        <div className={ layout.header }>
            <Link
                href="/"
                className={ styles.button }>
                <span className="material-symbols-rounded">
                    cabin
                </span>
            </Link>
            <button
                type="button"
                className={ styles.button }
                onClick={ drawerToggle }>
                { isOpen ? (
                    <span className="material-symbols-rounded">
                        pets
                    </span>
                ) : (
                    <span className="material-symbols-rounded">
                        star
                    </span>
                ) }
            </button>
            { children }

            <Drawer
                variant="temporary"
                open={ isOpen }
                onClose={ drawerToggle }
                ModalProps={ { keepMounted: true } }>
                { drawer }
            </Drawer>
        </div>
    );
}
