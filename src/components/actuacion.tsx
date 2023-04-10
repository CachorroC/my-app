"use client";

import type { Actuacion } from "#@/app/api/procesos/proceso";
import styles from "#@/styles/css/actuacion.module.css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Poiret_One } from "next/font/google";
import box from "#@/styles/css/box.module.css";
const poiret = Poiret_One({
    weight: "400",
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

export default function Block({
    path,
    item,
}: {
    path: string;
    item: Actuacion;
}) {
    const anotacion = item.anotacion
        ? item.anotacion
        : "no existe anotacion en esta actuacion";
    const fechaInicial = item.fechaInicial ? item.fechaInicial : "N/A";

    const fechaFinal = item.fechaFinal ? item.fechaFinal : "N/A";

    const segment = useSelectedLayoutSegment();
    const href = item.idProceso ? path + "/" + item.idProceso : path;
    const isActive =
        // Example home pages e.g. `/layouts`
        (!item.idProceso && segment === null) ||
        segment === item.idProceso ||
        // Nested pages e.g. `/layouts/electronics`
        segment === item.idProceso;

    return (
        <div className={styles.actuacion}>
            <span className="material-symbols-outlined">
                {item.conDocumentos ? "check" : "favorite"}
            </span>
            <i className={styles.consecutivo}>
                {item.consActuacion} de {item.cant}
            </i>
            <h1 className={`${styles.title} ${poiret.className}`}>
                {item.actuacion}
            </h1>

            <h4 className={`${styles.fechaActuacion} ${poiret.className}`}>
                {item.fechaActuacion.replace(/T(00(:00)+)/gi, "")}
            </h4>

            <p className={styles.anotacion}>
                <strong>anotación:</strong> {anotacion}
            </p>
            <div className={styles.fechas}>
                <div className={styles.fechaInicial}>
                    <p>fecha Inicial:</p>
                    {fechaInicial.replace(/T(00(:00)+)/gi, "")}
                </div>
                <div className={styles.fechaFinal}>
                    <p>fecha Final:</p>
                    {fechaFinal.replace(/T(00(:00)+)/gi, "")}
                </div>
            </div>
            <p className={styles.fecharegistro}>
                se registró en la página web el día:{" "}
                {item.fechaRegistro.replace(/T(00(:00)+)/gi, "")}
            </p>
            <del>
                registro de actuacion:
                {item.idRegActuacion}
            </del>
            {item.conDocumentos && (
                <span className="material-symbols-outlined">book</span>
            )}
        </div>
    );
}
