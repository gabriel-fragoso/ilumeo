// -- Third Imports -- //
import prismaClient from "./prisma";
import { Router } from "express";
import { app } from "./server";
import cors from "cors";

// -- CONTROLLERS -- //
import { CreateUserController } from "./controllers/user/CreateUserController";
import { CreatePointController } from "./controllers/point/CreatePointController";
import { UpdatePointController } from "./controllers/point/UpdatePointController";
import { GetPointByUserController } from "./controllers/point/GetPointByUserController";

const router = Router();
app.use(cors());

// -- Rotas Users -- //
router.get("/users", cors(), async (req, res) => {
  const users = await prismaClient.user.findMany();
  res.json(users);
});

router.post("/user", cors(), new CreateUserController().handle);

// -- Rotas Points -- //
router.get("/points", cors(), async (req, res) => {
  const points = await prismaClient.point.findMany({
    include: {
      user: true,
    },
  });
  res.json(points);
});

router.post("/points", cors(), new CreatePointController().handle);

router.put("/points/:id", cors(), new UpdatePointController().handle);

router.get(
  "/users/:userId/points",
  cors(),
  new GetPointByUserController().handle
);

export { router };
