import { Injectable } from "@nestjs/common";
import axios from "axios";
import { PrismaService } from "src/db/prisma.service";
import { User } from "src/types/user";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService
  ) {}

  async authUser(token: string): Promise<User> {
    const url: string = "https://login.yandex.ru/info";

    const response: any = await axios.get(url, {
      headers: {
        Authorization: `OAuth ${token}`,
      },
    });

    const { id, first_name, last_name, default_email, default_phone } =
      response.data;
    const { number } = default_phone;

    const user = await this.prisma.user.findUnique({
      where: {
        yandexId: id,
      },
    });

    if (user) {
      return user;
    }

    const newUser = await this.prisma.user.create({
      data: {
        yandexId: id,
      },
    });
    this.userService.changeParams(id, "email", default_email);
    this.userService.changeParams(id, "phone", number);
    this.userService.changeParams(id, "first_name", first_name);
    this.userService.changeParams(id, "last_name", last_name);

    return newUser;
  }
}
