import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { Map } from "src/types/map";

@Injectable()
export class MapService {
  constructor(private readonly prisma: PrismaService) {}

  // async onModuleInit() {
  //   console.log("Модуль подключен, начинаю генерацию базы...");

  //   for (let i = 0; i < 50000; i++) {
  //     const lat = Number((Math.random() * 180 - 90).toFixed(6));
  //     const lon = Number((Math.random() * 360 - 180).toFixed(6));

  //     const map = await this.prisma.map.findFirst({
  //       where: { lat: lat, lon: lon },
  //     });

  //     if (map) {
  //       continue;
  //     }
  //     await this.prisma.map.create({
  //       data: {
  //         name: "test",
  //         type: "point",
  //         lat,
  //         lon,
  //       },
  //     });
  //     console.log("Успешно создано!");
  //   }

  //   console.log("Генерация завершена.");
  // }

  async getAll(
    startLat: number,
    startLon: number,
    endLat: number,
    endLon: number
  ): Promise<Map[]> {
    return await this.prisma.map.findMany({
      where: {
        lat: {
          gte: Number(startLat),
          lte: Number(endLat),
        },
        lon: {
          gte: Number(startLon),
          lte: Number(endLon),
        },
      },
    });
  }
}
