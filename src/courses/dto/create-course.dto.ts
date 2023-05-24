import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCourseDto {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  slug: string;

  @Field()
  content: string;

  @Field()
  author: string;

  @Field()
  url: string;
}
