import { Services } from "@prisma/client";

export interface IResponseDTO {
  data: Services[],
  page: number,
  total: number,
  limit: number
}
