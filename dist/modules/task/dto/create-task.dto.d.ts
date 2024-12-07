import { StatusEnum } from "@prisma/client";
export declare class TaskCreateDto {
    title: string;
    subtitle: string;
    description: string;
    status: StatusEnum;
}
