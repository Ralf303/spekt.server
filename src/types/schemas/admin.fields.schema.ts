import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

//Схема для свагера (создание поля, пример body)
export class CreateAdminFieldSchema {
  @ApiProperty({
    example: "Завод",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Находится на площади восстания",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "string",
  })
  @IsString()
  type: string;
}

//Схема для свагера (создание поля, пример body)
export class CreateAdminFieldResponseSchema {
  @ApiProperty({
    example: 2,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: "Zavod",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Находится на площади восстания",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "string",
  })
  @IsString()
  type: string;

  @ApiProperty({
    example: "2024-09-13T12:15:50.591Z",
  })
  @IsString()
  createdAt: Date;

  @ApiProperty({
    example: "2024-09-13T12:15:50.591Z",
  })
  @IsString()
  updatedAt: Date;
}

export class UpdateAdminFieldSchema {
  @ApiProperty({
    example: 2,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: "Предприятие",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Находится на площади восстания",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "string",
  })
  @IsString()
  type: string;
}

export class UpdateAdminFieldResponseSchema {
  @ApiProperty({
    example: 2,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: "Predpriyatie",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Находится на площади восстания",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "string",
  })
  @IsString()
  type: string;
}
// interface adminField {
//   id: number;
//   name: string;
//   value: string;
//   description: string;
//   type: string;
//   createdAt: Date;
//   updatedAt: Date;
// }
