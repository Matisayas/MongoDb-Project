import { Task } from "@prisma/client";
import { TaskCreateDto } from "./dto/create-task.dto";
import { TaskFilterDto } from "./dto/filter-task-dto";
import { TaskUpdateDto } from "./dto/update-task.dto";
import { TaskService } from "./task.service";
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(createTaskDto: TaskCreateDto): Promise<Task>;
    findOne(id: string): Promise<Task>;
    findAll(statusFilter: TaskFilterDto): Promise<Task[]>;
    update(id: string, taskUpdateDto: TaskUpdateDto): Promise<Task>;
    delete(id: string): Promise<Task>;
}
