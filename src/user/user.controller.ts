import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { ChangeParamsDto } from "./dto/changeParams.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("changeParams")
  async changeParams(@Body() changeParamsDto: ChangeParamsDto) {
    const { yandexId, key, value } = changeParamsDto;
    return await this.userService.changeParams(yandexId, key, value);
  }
}
