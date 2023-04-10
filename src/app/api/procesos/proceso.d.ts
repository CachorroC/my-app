export interface Proceso {
    departamento: string;
    despacho: string;
    esPrivado: boolean;
    idConexion: number;
    slug: string;
    llaveProceso: string;
    fechaProceso?: string | null;
    fechaUltimaActuacion?: Date | string | null;
    Demandado: string;
    Demandante?: string;
    tipo: string;
};

export interface Actuacion {
    idRegActuacion: number;
    llaveProceso: string;
    slug: string;
    consActuacion: number;
    fechaActuacion: string;
    actuacion: string;
    anotacion?: string;
    fechaInicial?: string;
    fechaFinal?: string;
    fechaRegistro: string;
    codRegla: string;
    conDocumentos: boolean;
    cant: number;
};

export type Demandado = {
    carpeta: number;
    //? Cédula de Ciudadanía
    id_deudor: number;
    slug: number;
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
