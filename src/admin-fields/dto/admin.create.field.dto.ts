import { IsString } from "class-validator";

export class AdminCreateFieldDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  type: string;
}
