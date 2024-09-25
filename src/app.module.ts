import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { UserGraphQlModule } from "./user-ql/user-ql.module";
import { AdminFieldsModule } from "./admin.fields/admin.fields.module";
import { MapModule } from './map/map.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
    }),
    UserGraphQlModule,
    AdminFieldsModule,
    MapModule,
  ],
})
export class AppModule {}
