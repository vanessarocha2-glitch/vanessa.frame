import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { UpdateTodoRepository } from "../repository/update-todo.repository";

@Injectable()
export class UpdateTodoUseCases {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute(id: string, data: UpdateTodoDto) {
        try {
            this.logger.log('Updating toDo...');

            const todo = await this.updateTodoRepository.execute(id, data);

            if(!todo){
           throw new NotFoundException;
           }
            this.logger.log('ToDo updated successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
          throw new Error("Failed to update toDo");
        }
    }
}
