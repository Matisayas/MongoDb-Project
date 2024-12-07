import { Task } from "@prisma/client";
import { TaskCreateDto } from "./dto/create-task.dto";
import { TaskFilterDto } from "./dto/filter-task-dto";
import { TaskUpdateDto } from "./dto/update-task.dto";
import { TaskRepository } from "./task.repo";
export declare class TaskService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    create(input: TaskCreateDto): Promise<Task>;
    findOne(id: string): Promise<Task>;
    findAll(filter?: TaskFilterDto): Promise<Task[]>;
    update(input: TaskUpdateDto, id: string): Promise<Task>;
    remove(id: string): Promise<Task>;
}
