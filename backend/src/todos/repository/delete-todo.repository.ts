import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";
import { CreateTodoDto } from "../dto/create-todo.dto";

 @Injectable()
 export class DeleteTodoRepository {
 delete(id: string) {
    throw new Error("Method not implemented.");
 }
 constructor(private readonly prisma: PrismaService) {}

 async execute  (id:string) {
    return await this.prisma.todo.delete({ where: {id}});
 }
 }

 