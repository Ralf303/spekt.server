import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { ChangeParamsDto } from "./dto/changeParams.dto";
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UserParamsSchema } from "src/types/schemas/userParams.schema";

@ApiTags("Методы юзера (точнее метод для изменений параметров)")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  //Документация
  @ApiOperation({ summary: "Создание нового параметра для юзера." })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Успешно создан параметр, в ответ придет полный его обьект.",
    type: UserParamsSchema,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Серверная ошибка.",
  })

  //Сам контролер
  @Post("changeParams")
  async changeParams(@Body() changeParamsDto: ChangeParamsDto) {
    const { id, key, value } = changeParamsDto;
    return await this.userService.changeParams(id, key, value);
  }
}
