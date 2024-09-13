import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api"); //Глобальный превикс /api, вызов любого метода только через /api
  app.useGlobalPipes(new ValidationPipe()); //Подключен валидатор

  //Авто сборка свагера
  const config = new DocumentBuilder()
    .setTitle("Спектр API")
    .setDescription("Полное API на русском")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3002);
  console.log("Server is running on port 3002");
}
bootstrap();
