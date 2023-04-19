export interface intProceso {
  Demandado: string;
  idProceso: string;
  llaveProceso: string;
  tipo: string;
  departamento: string;
  despacho: string;
  esPrivado: boolean;
  idConexion: number;
  fechaProceso?: string | null;
  fechaUltimaActuacion: Date | string | null
  ;
  Demandante?: string;
}

export type Demandado = {
  carpeta: number;
  //? Cédula de Ciudadanía
  id_deudor: number;
  idProceso: number;
  demandado: string;
  direccion: string;
  email: string;
  llaveProceso: string;
  telefonos?: Telefonos;
};
export type Telefonos = {
  celular?: number;
  fijo?: number;
};

export type NuevoProceso = {
  Nombre1: string;
  Apellidos: string;
  Email?: string;
  Tel?: Tel;
  Nombre2?: string;
  Expediente: string;
  Radicado?: string;
};

export type Tel = {
  Celular?: string;
  Fijo?: string;
};
