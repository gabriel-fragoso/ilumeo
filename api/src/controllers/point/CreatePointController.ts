import { Request, Response } from "express";
import { CreatePointService } from "../../services/point/CreatePointService";

class CreatePointController {
  async handle(req: Request, res: Response) {
    const { userId, type } = req.body;

    const createPointService = new CreatePointService();

    const point = await createPointService.execute({
      userId,
      type,
    });

    return res.json(point);
  }
}

export { CreatePointController };
