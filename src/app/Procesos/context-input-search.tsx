"use client";

import { useSearch } from "./search-context";
import React from "react";
import form from "#@/styles/css/searchbar.module.css";
import box from "#@/styles/scss/box.module.scss";
import searchbox from "#@/styles/css/searchbar.module.css";
import { Proceso } from "#@/app/api/procesos/proceso";
import Tab from "#@/components/tab";
import { getProcesos } from "#@/app/api/procesos/getProcesos";
import navbar from "#@/styles/css/navbar.module.css";

const ContextSearchInput = () => {
    const [search, setSearch] = useSearch();

    return (
        <div className={navbar.menu}>
            <form className={navbar.link}>
                <input
                    type="text"
                    className={form.input}
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                ></input>
            </form>
        </div>
    );
};

export const Search = ({ procesos }: { procesos: Proceso[] }) => {
    const [search] = useSearch();

    const rows: any[] = [];

    procesos.forEach((proceso: Proceso) => {
        if (
            proceso.Demandado.toLowerCase().indexOf(search.toLowerCase()) === -1
        ) {
            return;
        }
        rows.push(<Tab proceso={proceso} />);
    });
    return <div className={searchbox.tabgroup}>{rows}</div>;
};

export default ContextSearchInput;
