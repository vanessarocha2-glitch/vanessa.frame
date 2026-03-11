import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";
import { CreateTodoDto } from "../create-todo.dto";

 @Injectable()
 export class DeleteTodoRepository {
 constructor(private readonly prisma: PrismaService) {}

 async execute  (id:string) {
    return await this.prisma.todo.delete({ where: {id}});
 }
 }

 