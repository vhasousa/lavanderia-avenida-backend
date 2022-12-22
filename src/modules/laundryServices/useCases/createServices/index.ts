import { ServicesRepository } from "../../infra/prisma/repositories/ServicesRepository";
import { CreateServiceController } from "./CreateServicesController";
import { CreateServiceUseCase } from "./CreateServicesUseCase";

const servicesRepository = new ServicesRepository();

const createServiceUseCase = new CreateServiceUseCase(servicesRepository);
const createServiceController = new CreateServiceController(createServiceUseCase);

export { createServiceController }
