import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class AdminDeleteFieldDto {
  @ApiProperty({
    description: "Уникальный айди поля",
    example: 1,
    nullable: false,
  })
  @IsNumber()
  id: number;
}
