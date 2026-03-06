import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";
import { CreateTodoDto } from "../create-todo.dto";

 @Injectable()
 export class FindAllTodoRepository {
 constructor(private readonly prisma: PrismaService) {}

 async findAll () {
    return await this.prisma.todo.findMany();
 }
 }

 