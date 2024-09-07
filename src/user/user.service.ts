import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { UserParams } from "src/types/user";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllParams(isReverse?: boolean): Promise<UserParams[]> {
    // Определяем порядок сортировки в зависимости от значения isReverse
    const order = isReverse ? "desc" : "asc";

    return this.prisma.userParams.findMany({
      orderBy: {
        actual: order,
      },
    });
  }

  async changeParams(
    yandexId: string,
    key: string,
    value: string
  ): Promise<UserParams> {
    const user = await this.prisma.user.findUnique({
      where: {
        yandexId: yandexId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const param = await this.prisma.userParams.findFirst({
      where: {
        userId: user.id,
        key: key,
        actual: true,
      },
    });

    if (!param) {
      const newParam = await this.prisma.userParams.create({
        data: {
          userId: user.id,
          key: key,
          value: value,
          actual: true,
        },
      });

      return newParam;
    }

    await this.prisma.userParams.update({
      where: {
        id: param.id,
      },
      data: {
        actual: false,
      },
    });

    const updatedParam = await this.prisma.userParams.create({
      data: {
        userId: user.id,
        key: key,
        value: value,
        createFrom: (param.createFrom += 1),
      },
    });

    return updatedParam;
  }
}
