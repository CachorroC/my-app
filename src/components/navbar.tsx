'use client';
import styles from '#@/styles/css/navbar.module.css';
import { demos } from '#@/lib/links';
import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer } from '@mui/material';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Poiret_One } from 'next/font/google';
import 'material-symbols';
import NavItem from '#@/components/navitem';
import box from '#@/styles/css/box.module.css';
import layout from '#@/styles/css/layout.module.css';

const poiret = Poiret_One({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const drawerToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  const drawer = (
    <div
      className={styles.drawer}
      onClick={close}>
      {demos.map((section) => (
        <nav
          key={section.name}
          className={styles.menu}>
          <h1 className={poiret.className}>
            {section.name}
          </h1>
          {section.items.map((link) => (
            <NavItem
              key={link.id}
              link={link}
              close={close}
              className={poiret.className}
            />
          ))}
        </nav>
      ))}
    </div>
  );
  return (
    <div className={layout.header}>
      <button
        type="button"
        onClick={close}
        className={styles.home}>
        <span className="material-symbols-rounded">
          cabin
        </span>
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={drawerToggle}>
        {isOpen ? (
          <span className="material-symbols-rounded">
            pets
          </span>
        ) : (
          <span className="material-symbols-rounded">
            star
          </span>
        )}
      </button>

      <button
        type="button"
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className="material-symbols-rounded">
            close
          </span>
        ) : (
          <span className="material-symbols-rounded">
            menu
          </span>
        )}
      </button>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={drawerToggle}
        ModalProps={{ keepMounted: true }}>
        {drawer}
      </Drawer>
    </div>
  );
}
