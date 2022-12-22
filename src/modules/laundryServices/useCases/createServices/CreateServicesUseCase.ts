import { Services } from "@prisma/client";
import { ServicesRepository } from "../../infra/prisma/repositories/ServicesRepository"
import { IServicesRepository } from "../../repositories/IServicesRepository"

interface IRequest {
  price: number;
  description: string;
}

class CreateServiceUseCase {
  private serviceRepository: IServicesRepository;
  
  constructor(createServiceRepository: IServicesRepository) {
    this.serviceRepository = createServiceRepository;
  }

  async execute({ description, price }: IRequest): Promise<Services> {
    const createdService = await this.serviceRepository.create({ price, description });

    return createdService;
  }
}

export { CreateServiceUseCase }