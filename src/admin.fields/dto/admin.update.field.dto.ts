import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AdminUpdateFieldDto {
  @ApiProperty({
    description: "Уникальный id поля",
    nullable: false,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: "Название поля (если его не меняем то оставляем то же самое)",
    nullable: false,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: "Описание поля (если его не меняем то оставляем то же самое)",
    nullable: false,
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: "Тип значения (если его не меняем то оставляем то же самое)",
    nullable: false,
  })
  @IsString()
  type: string;
}
