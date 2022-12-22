import { Request, Response } from "express";
import { CreateServiceUseCase } from "./CreateServicesUseCase";

class CreateServiceController {
  private createServiceUseCase: CreateServiceUseCase;

  constructor(createServiceUseCase: CreateServiceUseCase) {
    this.createServiceUseCase = createServiceUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { description, price } = request.body; 

    const service = await this.createServiceUseCase.execute({ price, description });

    return response.status(201).json(service);
  }
}

export { CreateServiceController }