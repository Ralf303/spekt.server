import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ChangeParamsDto {
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
}
