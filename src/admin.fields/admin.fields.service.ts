import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { transliterate } from "src/utils/helpers";

@Injectable()
export class AdminFieldsService {
  constructor(private readonly prisma: PrismaService) {}

  async createField(
    name: string,
    description: string,
    type: string
  ): Promise<adminField> {
    const translitName = transliterate(name);
    const adminField: adminField = await this.prisma.adminFields.create({
      data: {
        name: translitName,
        description,
        type,
      },
    });

    return adminField;
  }

  async getAllFields(): Promise<adminField[]> {
    const adminFields: adminField[] = await this.prisma.adminFields.findMany();

    return adminFields;
  }

  async updateField(
    id: number,
    name: string,
    description: string,
    type: string
  ): Promise<adminField> {
    const translitName = transliterate(name);
    const adminField: adminField = await this.prisma.adminFields.update({
      where: { id },
      data: {
        name: translitName,
        description,
        type,
        updatedAt: new Date(),
      },
    });

    return adminField;
  }

  async deleteField(id: number): Promise<boolean> {
    const adminField: adminField = await this.prisma.adminFields.findUnique({
      where: { id },
    });

    if (!adminField) {
      return false;
    }

    await this.prisma.adminFields.delete({
      where: { id },
    });

    return true;
  }
}
