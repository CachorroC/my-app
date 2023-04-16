export interface Actuacion {
  idRegActuacion: number;
  llaveProceso: string;
  idProceso: string;
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
}
