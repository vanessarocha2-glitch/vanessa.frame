import { Inject, Injectable, Logger } from "@nestjs/common";
import { CreateTodoRepository } from "../repository/create-todo.repository";
import { CreateTodoDto } from "../create-todo.dto";
import { error } from "console";

@Injectable()
export class CreateTodoUseCase {
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

