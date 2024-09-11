import { IsNumber, IsString } from "class-validator";

export class AdminUpdateFieldDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  type: string;
}
