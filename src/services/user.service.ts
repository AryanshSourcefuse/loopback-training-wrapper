import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {UserDataSource} from '../datasources';

export interface UserService {
  ping: () => Promise<object>;
}

export class UserProvider implements Provider<UserService> {
  constructor(
    // user must match the name property in the datasource json file
    @inject('datasources.user')
    protected dataSource: UserDataSource = new UserDataSource(),
  ) {}

  value(): Promise<UserService> {
    return getService(this.dataSource);
  }
}
