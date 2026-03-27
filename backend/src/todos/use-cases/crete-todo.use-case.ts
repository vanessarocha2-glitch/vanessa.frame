import { Inject, Injectable, Logger } from "@nestjs/common";
import { CreateTodoRepository } from "../repository/create-todo.repository";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { error } from "console";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class CreateTodoUseCase {
update(id: string, updateTodoDto: UpdateTodoDto) {
  throw new Error('Method not implemented.');
}
create(createTodoDto: CreateTodoDto) {
  throw new Error('Method not implemented.');
}
constructor(
    private readonly createTodoRepository: CreateTodoRepository,
    private readonly logger: Logger,
){}

async execute (data:CreateTodoDto){
    try {
        this.logger.log('Creating toDo...'); 
        const todo = await this.createTodoRepository.create(data);
        this.logger.log('ToDo created successfully');
        return todo;
    } catch(erro) {
        this.logger.error(error);
        throw new Error('Failed to create ToDo');
    }
}
}

