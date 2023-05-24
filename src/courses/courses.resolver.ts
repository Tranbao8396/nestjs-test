import { Args, Query, Resolver } from '@nestjs/graphql';
import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesService } from './courses.service';

@Resolver()
export class CoursesResolver {
  constructor(private coursesService: CoursesService) {}

  @Query((returns) => CreateCourseDto)
  async course(@Args('slug') slug: string): Promise<any> {
    return await this.coursesService.getCourse(slug);
  }

  @Query((returns) => [CreateCourseDto])
  async courses(): Promise<CreateCourseDto[]> {
    return await this.coursesService.getCourses();
  }
}
