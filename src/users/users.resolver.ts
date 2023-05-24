import { Args, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => CreateUserDto)
  async user(@Args('name') name: string): Promise<any> {
    return await this.usersService.getUser(name);
  }

  @Query((returns) => [CreateUserDto])
  async users(): Promise<CreateUserDto[]> {
    return await this.usersService.getUsers();
  }
}
