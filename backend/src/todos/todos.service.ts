import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoUseCase, DeleteTodoUseCases, FindAllTodosUseCases, FindTodoByIdUseCases } from './use-cases';



@Injectable()
export class TodosService {
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findAllTodosUseCase: FindAllTodosUseCases,
    private readonly findTodoByIdUseCase: FindTodoByIdUseCases,
    private readonly updateTodoUseCase: CreateTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCases,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.createTodoUseCase.create(createTodoDto);
  }

  findAll() {
    return this.findAllTodosUseCase.findAll();
  }

  findById(id: string) {
    return this.findTodoByIdUseCase.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.update(id, updateTodoDto);
  }

  delete(id: string) {
    return this.deleteTodoUseCase.delete(id);
  }
}
