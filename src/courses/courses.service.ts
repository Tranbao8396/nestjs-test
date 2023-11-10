import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Courses } from './entity/courses.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses)
    private postsRepository: Repository<Courses>,
  ) {}

  getCourses(): Promise<Courses[]> {
    return this.postsRepository.find();
  }

  async getCourse(courseSlug: string): Promise<Courses | null> {
    const slug = String(courseSlug);
    const course = await this.postsRepository.findOneBy({ slug });
    if (!course) {
      throw new HttpException('Course does not exist', 404);
    } else {
      return course;
    }
  }

  async addCourse(course: any): Promise<any> {
    const add = await this.postsRepository.save(course);
    if (add) {
      return 'success';
    } else {
      throw new HttpException('cannot add', 404);
    }
  }

  async updateCourse(courseId: number, course: any): Promise<any> {
    const id = Number(courseId);
    const update = await this.postsRepository.update(id, course);
    if (update) {
      return 'success';
    } else {
      throw new HttpException('cannot update', 404);
    }
  }

  async deleteCourse(courseId: number): Promise<void> {
    const id = Number(courseId);
    const course = await this.postsRepository.findOneBy({ id });
    if (!course) {
      throw new HttpException('Course does not exist', 404);
    } else {
      await this.postsRepository.delete(id);
    }
  }
}
