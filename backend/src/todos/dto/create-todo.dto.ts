export class CreateTodoDto {
title: string;
description: string;
completed: boolean;
priority: TodoPriority;
duetAt: Date;
completeAt: Date;
userId: string;
createdAt: Date;
updatedAt: Date;
}

enum TodoPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
}

