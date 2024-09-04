import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class AuthTokenValidator implements PipeTransform<string, string> {
  transform(value: string): string {
    if (value) {
      return value;
    }
    throw new BadRequestException("Токен отсутствует");
  }
}
