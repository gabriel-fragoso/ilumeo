import { User } from "./UserRequest";

export interface Point {
  id: number;
  type: "entrada" | "saida";
  user: User;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface PontoCreateInput {
  userId: number;
  type: "entrada" | "saida";
}

export interface PontoUpdateInput {
  userId: number;
  type: "entrada" | "saida";
}
