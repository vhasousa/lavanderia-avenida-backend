import { Services } from "@prisma/client"
import { IResponseDTO } from "../dtos/IResponseDTO";

interface ICreateServiceDTO {
  price: number;
  description: string;
  createdAt?:Date;
}

interface IServicesRepository {
  list(page?: number, search?: string, limit?: number): Promise<IResponseDTO>;
  create({ price, description }: ICreateServiceDTO): Promise<Services>;
};

export { IServicesRepository, ICreateServiceDTO }