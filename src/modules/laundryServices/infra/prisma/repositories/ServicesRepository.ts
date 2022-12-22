import { PrismaClient, Services } from "@prisma/client";
import { IResponseDTO } from "../../../dtos/IResponseDTO";
import { ICreateServiceDTO, IServicesRepository } from "../../../repositories/IServicesRepository";

class ServicesRepository implements IServicesRepository {
  private prisma = new PrismaClient();

  async list(page = 1, search: string, limit = 10): Promise<IResponseDTO> {
    const services = await this.prisma.services.findMany({
      where: {
        description: {
          contains: search,
          mode: 'insensitive'
        }
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await this.prisma.services.count();

    const allServices = {
      data: services,
      page,
      total,
      limit
    }

    return allServices;
  }

  async create({ price, description }: ICreateServiceDTO): Promise<Services> {
    const service = await this.prisma.services.create({
      data: {
        description,
        price
      }
    });

    return service;
  }
}

export {ServicesRepository}