import prismaClient from "../../prisma";

interface PointRequest {
  userId: string;
  type: string;
}

class CreatePointService {
  async execute({ userId, type }: PointRequest) {
    const timestamp = new Date();
    const point = await prismaClient.point.create({
      data: {
        userId,
        type,
        timestamp,
      },
    });
    return point;
  }
}

export { CreatePointService };
