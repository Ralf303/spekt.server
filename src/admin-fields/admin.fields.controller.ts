import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { AdminFieldsService } from "./admin.fields.service";
import { AdminCreateFieldDto } from "./dto/admin.create.field.dto";
import { AdminUpdateFieldDto } from "./dto/admin.update.field.dto";
import { AdminDeleteFieldDto } from "./dto/admin.delete.field";

@Controller("adminField")
export class AdminFieldsController {
  constructor(private readonly adminFieldsService: AdminFieldsService) {}

  @Get("getAll")
  async getAllFields() {
    const adminFields = await this.adminFieldsService.getAllFields();

    return adminFields;
  }

  @Post("create")
  async createField(@Body() adminCreateFieldDto: AdminCreateFieldDto) {
    const { name, description, type } = adminCreateFieldDto;
    const adminField = await this.adminFieldsService.createField(
      name,
      description,
      type
    );

    return adminField;
  }

  @Put("update")
  async updateField(@Body() adminUpdateFieldDto: AdminUpdateFieldDto) {
    const { id, name, description, type } = adminUpdateFieldDto;
    const adminField = await this.adminFieldsService.updateField(
      id,
      name,
      description,
      type
    );

    return adminField;
  }

  @Delete("delete")
  async deleteField(@Body() adminDeleteFieldDto: AdminDeleteFieldDto) {
    const { id } = adminDeleteFieldDto;
    const isDeleted = await this.adminFieldsService.deleteField(id);

    return isDeleted;
  }
}
