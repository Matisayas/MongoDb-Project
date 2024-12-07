import { Injectable } from "@nestjs/common";
import { Task } from "@prisma/client";
import { TaskCreateDto } from "./dto/create-task.dto";
import { TaskFilterDto } from "./dto/filter-task-dto";
import { TaskUpdateDto } from "./dto/update-task.dto";
import { TaskRepository } from "./task.repo";

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(input: TaskCreateDto): Promise<Task> {
    const createTask = await this.taskRepository.create(input);
    return createTask;
  }

  findOne(id: string): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  findAll(filter?: TaskFilterDto): Promise<Task[]> {
    return this.taskRepository.findAll(filter);
  }

  update(input: TaskUpdateDto, id: string): Promise<Task> {
    return this.taskRepository.update(input, id);
  }

  remove(id: string): Promise<Task> {
    return this.taskRepository.delete(id);
  }
}
