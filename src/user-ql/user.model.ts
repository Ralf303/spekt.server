import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserParamsModel {
  @Field(() => Int)
  id: number;

  @Field()
  key: string;

  @Field()
  value: string;

  @Field()
  actual: boolean;

  @Field()
  createFrom: number;

  @Field()
  userId: number;
}
