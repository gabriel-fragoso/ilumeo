import prismaClient from "../../prisma";

interface PointRequest {
  userId: string;
}

class GetPointByUserService {
  async execute({ userId }: PointRequest) {
    const points = await prismaClient.point.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        type: true,
        timestamp: true,
        user: {
          select: {
            code: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    const pointsWithTimeDiff = points.map((point) => {
      const timeDiff = point.updatedAt.getTime() - point.createdAt.getTime();
      return {
        ...point,
        timeDiff,
      };
    });

    return pointsWithTimeDiff;
  }
}

export { GetPointByUserService };
