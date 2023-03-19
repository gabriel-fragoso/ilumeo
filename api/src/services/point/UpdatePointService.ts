import prismaClient from "../../prisma";

class UpdatePointService {
  async execute({ id, type }) {
    const point = await prismaClient.point.update({
      where: {
        id,
      },
      data: {
        timestamp: new Date(),
        type,
      },
    });
    return point;
  }
}

export { UpdatePointService };
