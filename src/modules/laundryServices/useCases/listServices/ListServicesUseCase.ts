import { Services } from "@prisma/client";
import { IResponseDTO } from "../../dtos/IResponseDTO";
import { IServicesRepository } from "../../repositories/IServicesRepository"

interface IRequestDTO {
  page: number
  search: string
}

class ListServicesUseCase {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute({ page, search }: IRequestDTO): Promise<IResponseDTO> {
    const services = await this.servicesRepository.list(page, search);

    return services;
  }
}

export { ListServicesUseCase }