import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";
import { UpdateTodoDto } from "../update-todo.dto";
 @Injectable()
 export class UpdateTodoRepository {
 constructor(private readonly prisma: PrismaService) {}

 async execute  (data: UpdateTodoDto, id:string) {
    return await this.prisma.todo.update({ where: {id}, data});
 }
 }

 