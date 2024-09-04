import { Module } from "@nestjs/common";
import { UserGraphQlResolver } from "./user-ql.resolver";
import { UserService } from "src/user/user.service";
import { PrismaService } from "src/db/prisma.service";

@Module({
  providers: [UserGraphQlResolver, UserService, PrismaService],
})
export class UserGraphQlModule {}
