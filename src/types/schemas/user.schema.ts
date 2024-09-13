import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

//Схема для свагера
export class UserSchema {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: "1153229038",
  })
  @IsString()
  yandexId: string;

  @ApiProperty({
    example: "2024-09-10T18:24:16.167Z",
  })
  @IsString()
  createdAt: Date;
}
