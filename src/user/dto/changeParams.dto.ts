import { IsString } from "class-validator";

export class ChangeParamsDto {
  @IsString()
  yandexId: string;

  @IsString()
  key: string;

  @IsString()
  value: string;
}
