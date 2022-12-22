import { Request, Response } from "express";
import { ListServicesUseCase } from "./ListServicesUseCase"

class ListServicesController {
  private listServicesUseCase: ListServicesUseCase;

  constructor(listServicesUseCase: ListServicesUseCase) {
    this.listServicesUseCase = listServicesUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { page, search } = request.query;

    const pageAsNumber = parseInt(page as string)

    const listServices = await this.listServicesUseCase.execute({ 
      page: pageAsNumber, 
      search: search as string 
    });

    return response.status(200).json(listServices);
  }
}

export { ListServicesController }
