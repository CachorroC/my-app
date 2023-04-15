import { getBaseUrl } from '#@/lib/getBaseUrl';
import box from '#@/styles/scss/box.module.scss';
import { Actuacion } from '#@/app/api/procesos/actuaciones/actuacion';
import layout from '#@/styles/css/layout.module.css';
import { Suspense } from 'react';
import typeface from '#@/styles/css/typeface.module.css';
import { Proceso } from '#@/app/api/procesos/proceso';
import { Actuaciones } from '#@/components/actuacion-card';
import { Procesos } from '#@/components/proceso-card';

async function getActuaciones(idProceso: string) {
  const res = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
    { cache: 'no-store' },
  );
  if (!res.ok) {
    throw new Error(
      'Lo sentimos, no pudimos recuperar las actuaciones del servidor de la rama. ',
    );
  }

  return res.json();
}

async function getProcesos(tipo: string) {
  const res = await fetch(
    `${getBaseUrl()}/api/procesos${
      tipo ? `?tipo=${tipo}` : ''
    }`,
  );
  return res.json();
}

export default async function Page({
  params: { tipo, idProceso },
}: {
  params: {
    tipo: string;
    idProceso: string;
  };
}) {
  const actuacionesData = getActuaciones(idProceso);

  const procesosData = getProcesos(tipo);
  const [actuaciones, procesos] = await Promise.all([
    actuacionesData,
    procesosData,
  ]);

  return (
    <div className={box.container}>
      <Suspense
        fallback={
          <div className={box.container}>loading ...</div>
        }>
        <Actuaciones
          actuaciones={actuaciones.actuaciones}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className={box.container}>loading ...</div>
        }>
        <Procesos procesos={procesos} />
      </Suspense>
    </div>
  );
}
