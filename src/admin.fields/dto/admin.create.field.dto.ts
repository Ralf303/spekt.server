import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AdminCreateFieldDto {
  @ApiProperty({
    description: "Имя поля",
    nullable: false,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: "Описание поля (если описания нет то передать пустую строку)",
    nullable: false,
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: "Тип значения (в будущем преобразовывать значение в этот тип)",
    nullable: false,
  })
  @IsString()
  type: string;
}
