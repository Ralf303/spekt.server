import { IsNumber } from "class-validator";

export class AdminDeleteFieldDto {
  @IsNumber()
  id: number;
}
