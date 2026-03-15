export type StatusMedicao = "normal" | "alerta" | "critico";

export type Medicao = {
  id: number;
  sensor: string;
  tipo: string;
  valor: number;
  status: StatusMedicao;
};