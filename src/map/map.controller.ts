import { Controller, Get, Query } from "@nestjs/common";
import { MapService } from "./map.service";
import { Map } from "src/types/map";

@Controller("map")
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Get("/get")
  async getMap(
    @Query("startLat") startLat: number,
    @Query("startLon") startLon: number,
    @Query("endLat") endLat: number,
    @Query("endLon") endLon: number
  ): Promise<Map[]> {
    return await this.mapService.getAll(startLat, startLon, endLat, endLon);
  }
}
