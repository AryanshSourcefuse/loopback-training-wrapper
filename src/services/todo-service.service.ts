import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {TodoRestDataSource} from '../datasources';

export interface TodoService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class TodoServiceProvider implements Provider<TodoService> {
  constructor(
    // TodoRest must match the name property in the datasource json file
    @inject('datasources.TodoRest')
    protected dataSource: TodoRestDataSource = new TodoRestDataSource(),
  ) {}

  value(): Promise<TodoService> {
    return getService(this.dataSource);
  }
}
