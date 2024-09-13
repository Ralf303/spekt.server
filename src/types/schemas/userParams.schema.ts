import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

//Схема для свагера
export class UserParamsSchema {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: "email",
  })
  @IsString()
  key: string;

  @ApiProperty({
    example: "newEmail@gmail.com",
  })
  @IsString()
  value: string;

  @ApiProperty({
    example: "true",
  })
  @IsString()
  actual: boolean;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  createFrom: number;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    example: "2024-09-10T18:24:16.167Z",
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    example: null,
  })
  @IsDate()
  endActual: Date | null;
}
