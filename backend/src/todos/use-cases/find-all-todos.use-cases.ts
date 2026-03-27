import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodoRepository } from "../repository/find-all-todos.repository";


@Injectable()
export class FindAllTodosUseCases {
    findAll() {
      throw new Error('Method not implemented.');
    }
    constructor(
        private readonly findAllTodosRepository: FindAllTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute() {
        try {
            this.logger.log('Finding all toDos...');
            const todos = await this.findAllTodosRepository.findAll();
            this.logger.log('ToDos found successfully');
            return todos;
        } catch (error) {
            this.logger.error(error);
            throw new Error("Failed to find all toDos");
        }
    }
}