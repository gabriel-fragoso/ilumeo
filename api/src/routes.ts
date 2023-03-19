// -- Third Imports -- //
import prismaClient from "./prisma";
import { Router } from "express";

// -- CONTROLLERS -- //
import { CreateUserController } from "./controllers/user/CreateUserController";
import { CreatePointController } from "./controllers/point/CreatePointController";
import { UpdatePointController } from "./controllers/point/UpdatePointController";
import { GetPointByUserController } from "./controllers/point/GetPointByUserController";

const router = Router();

// -- Rotas Users -- //
router.get("/users", async (req, res) => {
  const users = await prismaClient.user.findMany();
  res.json(users);
});

router.post("/user", new CreateUserController().handle);

// -- Rotas Points -- //
router.get("/points", async (req, res) => {
  const points = await prismaClient.point.findMany({
    include: {
      user: true,
    },
  });
  res.json(points);
});

router.post("/points", new CreatePointController().handle);

router.put("/points/:id", new UpdatePointController().handle);

router.get("/users/:userId/points", new GetPointByUserController().handle);

export { router };
