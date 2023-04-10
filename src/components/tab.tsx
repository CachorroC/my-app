import { Poiret_One } from "next/font/google";

import styles from "#@/styles/css/blog.module.css";
import Link from "next/link";
import { Proceso } from "#@/app/api/procesos/proceso";
import box from "#@/styles/css/box.module.css";

const poiret = Poiret_One( {
    weight: "400",
    subsets: [
        "latin", "latin-ext" 
    ],
    display: "swap",
} );

export default function Tab ( { proceso }: { proceso: Proceso; } ) {
    const href: any = proceso.tipo + "/" + proceso.slug;

    return (
        <Link href={ `/${ href }` } className={ styles.section }>
            { proceso.Demandado }
        </Link>
    );
}
