import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";
import { CreateTodoDto } from "../dto/create-todo.dto";

 @Injectable()
 export class FindByIDTodoRepository {
 constructor(private readonly prisma: PrismaService) {}

 async findById(id: string) {
    return await this.prisma.todo.findUnique({
    where: {id},
    });
 }
 }
 
 