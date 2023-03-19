import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      code,
    });

    return res.json(user);
  }
}

export { CreateUserController };
