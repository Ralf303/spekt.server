import { IsNumber, IsString } from "class-validator";

export class ChangeParamsDto {
  @IsNumber()
  id: number;

  @IsString()
  key: string;

  @IsString()
  value: string;
}
