import { StatusEnum } from "@prisma/client";
import { IsEnum } from "class-validator";

export class TaskFilterDto {
  @IsEnum(StatusEnum)
  status?: StatusEnum;
}
