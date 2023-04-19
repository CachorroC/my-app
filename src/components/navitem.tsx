import Link from 'next/link';
import styles from '#@/styles/css/navbar.module.css';
import { type Item } from '#@/lib/links';
import { useSelectedLayoutSegment } from 'next/navigation';
import 'material-symbols';
import box from '#@/styles/css/box.module.css';

export default function NavItem({
    link,
    className,
    close,
}: {
  link: Item;
  className: string;
  close: () => false | void;
}) {
    const segment = useSelectedLayoutSegment();
    const isActive = link.href === segment;
    return (
        <Link
            onClick={close}
            href={`/Procesos/${link.href}`}
            className={`${styles.link} ${box.container}`}>
            <span className="material-symbols-outlined">
                {isActive ? 'favorite' : link.icon}
            </span>
            <p className={className}>{link.name}</p>
        </Link>
    );
}
