
export interface NumeroRadicacion {
    tipoConsulta: string;
    procesos: Proceso[];
    parametros: Parametros;
    paginacion: Paginacion;
}

export interface Paginacion {
    cantidadRegistros: number;
    registrosPagina: number;
    cantidadPaginas: number;
    pagina: number;
    paginas: null;
}

export interface Parametros {
    numero: string;
    nombre: null;
    tipoPersona: null;
    idSujeto: null;
    ponente: null;
    claseProceso: null;
    codificacionDespacho: null;
    soloActivos: boolean;
}

export type intLLaveProceso = {
    idProceso: number;
    idConexion: number;
    llaveProceso: string;
    fechaProceso: string;
    fechaUltimaActuacion: string;
    despacho: string;
    departamento: string;
    sujetosProcesales: string;
    esPrivado: boolean;
    cantFilas: number;
};
