import {inject} from '@loopback/core';
import {UserService} from '../services';
import {get, getModelSchemaRef, post, requestBody} from '@loopback/rest';
import {Role} from '../models';

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

  @post('/roles')
  async createRole(
    @requestBody({
      description: 'Role',
      content: {
        'application/json': {
          schema: getModelSchemaRef(Role, {exclude: ['id']}),
        },
      },
    })
    body: Role,
  ) {
    try {
      const response = await this.userService.createRole(body);

      return {
        message: 'Role Created',
        userService: {response},
      };
    } catch (e) {
      console.error(e);
      return {
        error: e,
      };
    }
  }
}
