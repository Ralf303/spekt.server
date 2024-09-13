import {
  BadRequestException,
  Controller,
  Get,
  HttpStatus,
  Patch,
  Query,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/types/user";
import { AuthTokenValidator } from "./auth.pipes";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserSchema } from "../types/schemas/user.schema";

@ApiTags("Сервис для авторизации/регистрации по яндексу")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Документация
  @ApiOperation({ summary: "В параматры вставить токен яндекса" })
  @ApiParam({
    name: "token",
    description: "Токен яндекса",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description:
      "Успешно авторизовано, в ответе придет обьект юзера, id нужно сохранить, дальнейшее взаимодействиее будет только по нему.",
    type: UserSchema,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Токен отсутсвует.",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Не правильный токен.",
  })

  //Сам контролер
  @Get("authUser")
  getAuthUser(
    @Query("token", AuthTokenValidator) token: string
  ): Promise<User> {
    return this.authService.authUser(token);
  }
}
