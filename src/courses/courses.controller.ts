import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':courseSlug')
  async getCourse(@Param('courseSlug') courseSlug) {
    const course = await this.coursesService.getCourse(courseSlug);
    return course;
  }

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.addCourse(createCourseDto);
    return course;
  }

  @Post(':courseId')
  async updateCourse(
    @Param('courseId') courseId,
    @Body() createCourseDto: CreateCourseDto,
  ) {
    const course = await this.coursesService.updateCourse(
      courseId,
      createCourseDto,
    );
    return course;
  }

  @Delete(':courseId')
  async deleteCourse(@Param('courseId') courseId) {
    const courses = await this.coursesService.deleteCourse(courseId);
    return courses;
  }
}
