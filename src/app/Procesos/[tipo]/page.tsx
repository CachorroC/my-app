import { getProcesos } from "#@/app/api/procesos/getProcesos";
import layout from "#@/styles/css/layout.module.css";
import typeface from "#@/styles/css/typeface.module.css";
import React from "react";
import { Search } from "#@/app/Procesos/context-input-search";
import { poiret } from '../../../components/typeface';
export const metadata = {
  title: "procesos",
};

export default async function Page (
  { params }: {
        params: {
            tipo: string;
        };
    }
) {
  const procesos = await getProcesos(
    {
      tipo: params.tipo,
    }
  );
  return (
    <div className={ layout.article }>
      <h1 className={ poiret.className }>{ params.tipo }</h1>
      <Search procesos={ procesos } />
    </div>
  );
}
