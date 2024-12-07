import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { Task } from "@prisma/client";
import { TaskCreateDto } from "./dto/create-task.dto";
import { TaskFilterDto } from "./dto/filter-task-dto";
import { TaskUpdateDto } from "./dto/update-task.dto";
import { TaskService } from "./task.service";

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() createTaskDto: TaskCreateDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Get()
  findAll(@Query("status") statusFilter: TaskFilterDto): Promise<Task[]> {
    return this.taskService.findAll(statusFilter);
  }

  @Put()
  update(
    @Param("id") id: string,
    @Body() taskUpdateDto: TaskUpdateDto
  ): Promise<Task> {
    return this.taskService.update(taskUpdateDto, id);
  }

  @Delete()
  delete(@Param("id") id: string): Promise<Task> {
    return this.taskService.remove(id);
  }
}
