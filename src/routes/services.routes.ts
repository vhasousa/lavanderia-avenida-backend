import { Router } from "express";
import { createServiceController } from "../modules/laundryServices/useCases/createServices";
import { listServicesController } from "../modules/laundryServices/useCases/listServices";

const servicesRoutes = Router();

servicesRoutes.post('/', (request, response) => {
    return createServiceController.handle(request, response);
  }
)

servicesRoutes.get('/', (request, response) => {
  return listServicesController.handle(request, response);
})

export { servicesRoutes }