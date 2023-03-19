import prismaClient from "../../prisma";

interface UserRequest {
  code: string;
}

class CreateUserService {
  async execute({ code }: UserRequest) {
    if (!code) {
      throw new Error("Enter your code");
    }

    const existingUser = await prismaClient.user.findUnique({
      where: {
        code: code,
      },
    });

    if (existingUser) {
      const user = await prismaClient.user.findUnique({ where: { code } });
      return user;
    } else {
      const user = await prismaClient.user.create({
        data: {
          code: code,
        },
      });
      return user;
    }
  }
}

export { CreateUserService };
