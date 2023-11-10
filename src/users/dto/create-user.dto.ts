import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  roles: string;
}
