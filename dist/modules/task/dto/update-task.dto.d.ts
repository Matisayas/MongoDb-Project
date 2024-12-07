import { StatusEnum } from "@prisma/client";
export declare class TaskUpdateDto {
    title?: string;
    subtitle?: string;
    description?: string;
    status?: StatusEnum;
}
