import {inject} from '@loopback/core';
import {UserService} from '../services';
import {get} from '@loopback/rest';

export class UserController {
  constructor(
    @inject('services.User')
    protected userService: UserService,
  ) {}

  @get('/user/ping')
  async ping() {
    const response = await this.userService.ping();
    return {
      message: 'Hello from Wrapper',
      userService: {response},
    };
  }
}
