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

export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(input: TaskCreateRepoInput): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: input.title,
        subtitle: input.subtitle,
        description: input.description,
        status: input.status,
      },
    });
  }

  findOne(id: string): Promise<Task> {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  findAll(filter?: TaskFilterRepoInput): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        status: filter.status,
      },
    });
  }

  update(input: TaskUpdateRepoInput, id: string): Promise<Task> {
    return this.prisma.task.update({
      data: {
        title: input.title,
        subtitle: input.subtitle,
        description: input.description,
        status: input.status,
      },
      where: {
        id,
      },
    });
  }

  delete(id: string): Promise<Task> {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
