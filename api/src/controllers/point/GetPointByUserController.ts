import prismaClient from "../../prisma";
import { Request, Response } from "express";
import { GetPointByUserService } from "../../services/point/GetPointByUserService";

class GetPointByUserController {
  async handle(req: Request, res: Response) {
    const { userId } = req.params;

    const getPointByUserService = new GetPointByUserService();

    const points = await getPointByUserService.execute({
      userId,
    });
    return res.json(points);
  }
}

export { GetPointByUserController };
