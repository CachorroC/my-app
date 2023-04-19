'use client';
import { Item, demos } from '../lib/links';
import NavItem from './navitem';
import { poiret } from './typeface';
import navbar from '#@/styles/css/navbar.module.css';
export default function Drawer({
    items,
    title,
    children,
}: {
  items: Item[];
  title: string;
  children: React.ReactNode;
}) {
    return (
        <div
            className={navbar.drawer}
            onClick={close}>
            {demos.map((section) => (
                <nav
                    key={section.name}
                    className={navbar.menu}>
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
}
