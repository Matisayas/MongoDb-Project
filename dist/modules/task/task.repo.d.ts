import { StatusEnum, Task } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
interface TaskCreateRepoInput {
    title: string;
    subtitle: string;
    description: string;
    status: StatusEnum;
}
interface TaskFilterRepoInput {
    status?: StatusEnum;
}
interface TaskUpdateRepoInput {
    title?: string;
    subtitle?: string;
    description?: string;
    status?: StatusEnum;
}
export declare class TaskRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(input: TaskCreateRepoInput): Promise<Task>;
    findOne(id: string): Promise<Task>;
    findAll(filter?: TaskFilterRepoInput): Promise<Task[]>;
    update(input: TaskUpdateRepoInput, id: string): Promise<Task>;
    delete(id: string): Promise<Task>;
}
export {};
