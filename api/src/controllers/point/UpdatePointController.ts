import { Request, Response } from "express";
import { UpdatePointService } from "../../services/point/UpdatePointService";

class UpdatePointController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { type } = req.body;

    const updatePointService = new UpdatePointService();

    const point = await updatePointService.execute({
      id,
      type,
    });
    res.json(point);
  }
}

export { UpdatePointController };
