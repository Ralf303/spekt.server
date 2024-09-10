import { Args, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "src/user/user.service";
import { UserParamsModel } from "./user.model";

@Resolver()
export class UserGraphQlResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserParamsModel], { name: "userParams" })
  async findAll(
    @Args("key", { nullable: true }) key?: string,
    @Args("userId", { nullable: true }) userId?: number,
    @Args("actual", { nullable: true }) actual?: boolean,
    @Args("reverse", { nullable: true }) reverse?: boolean,
    @Args("value", { nullable: true }) value?: string
  ) {
    const allParams = await this.userService.getAllParams(reverse);

    return allParams.filter((param) => {
      const matchesKey = key ? param.key === key : true;
      const matchesUserId = userId ? param.userId === userId : true;
      const matchesActual =
        actual !== undefined ? param.actual === actual : true;
      const matchesValue = value ? param.value === value : true;
      return matchesKey && matchesUserId && matchesActual && matchesValue;
    });
  }
}
