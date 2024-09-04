import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/types/user";
import { AuthTokenValidator } from "./auth.pipes";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("authUser")
  getAuthUser(
    @Query("token", AuthTokenValidator) token: string
  ): Promise<User> {
    return this.authService.authUser(token);
  }
}
