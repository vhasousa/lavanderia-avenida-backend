import { ServicesRepository } from "../../infra/prisma/repositories/ServicesRepository";
import { ListServicesController } from "./ListServicesController";
import { ListServicesUseCase } from "./ListServicesUseCase";

const servicesRepository = new ServicesRepository();

const listServicesUseCase = new ListServicesUseCase(servicesRepository);

const listServicesController = new ListServicesController(listServicesUseCase);

export { listServicesController }