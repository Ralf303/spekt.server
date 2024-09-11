import { Module } from "@nestjs/common";
import { AdminFieldsService } from "./admin.fields.service";
import { AdminFieldsController } from "./admin.fields.controller";
import { PrismaService } from "src/db/prisma.service";

@Module({
  controllers: [AdminFieldsController],
  providers: [AdminFieldsService, PrismaService],
})
export class AdminFieldsModule {}
