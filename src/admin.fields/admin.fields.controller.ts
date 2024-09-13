import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
} from "@nestjs/common";
import { AdminFieldsService } from "./admin.fields.service";
import { AdminCreateFieldDto } from "./dto/admin.create.field.dto";
import { AdminUpdateFieldDto } from "./dto/admin.update.field.dto";
import { AdminDeleteFieldDto } from "./dto/admin.delete.field";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import {
  CreateAdminFieldResponseSchema,
  CreateAdminFieldSchema,
  UpdateAdminFieldResponseSchema,
  UpdateAdminFieldSchema,
} from "src/types/schemas/admin.fields.schema";

//сервис по админ полям
@ApiTags("Сервис для работы с полями, которые добавляются в админке")
@Controller("adminField")
export class AdminFieldsController {
  constructor(private readonly adminFieldsService: AdminFieldsService) {}

  //Документация
  @ApiOperation({ summary: "Получение всех админ полей." })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Придет массив со всеми админ полями.",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Серверная ошибка.",
  })

  //Сам контролер
  @Get("getAll")
  async getAllFields() {
    //получаем все поля
    const adminFields = await this.adminFieldsService.getAllFields();

    //отдаем
    return adminFields;
  }

  //Документация
  @ApiOperation({ summary: "Создание нового админ поля." })
  @ApiBody({ type: CreateAdminFieldSchema })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Поле успешно создано, в ответ придет полный обьект.",
    type: CreateAdminFieldResponseSchema,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Серверная ошибка.",
  })

  //Сам контролер
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

  //Документация
  @ApiOperation({ summary: "Обновление админ поля." })
  @ApiBody({ type: UpdateAdminFieldSchema })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Поле успешно создано, в ответ придет полный обьект.",
    type: UpdateAdminFieldResponseSchema,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Серверная ошибка.",
  })

  //Сам контролер
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

  @ApiOperation({ summary: "Удаление админ поля." })
  @ApiResponse({
    status: HttpStatus.OK,
    description:
      "Если удалено придет true, если же какая то ошибка(например несуществующий id), то придет falce.",
    type: Boolean,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Серверная ошибка.",
  })
  @Delete("delete")
  async deleteField(@Body() adminDeleteFieldDto: AdminDeleteFieldDto) {
    const { id } = adminDeleteFieldDto;
    const isDeleted = await this.adminFieldsService.deleteField(id);

    return isDeleted;
  }
}
