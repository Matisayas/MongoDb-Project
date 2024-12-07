import { StatusEnum } from "@prisma/client";
import { IsEnum, IsString } from "class-validator";

export class TaskUpdateDto {
  @IsString()
  title?: string;

  @IsString()
  subtitle?: string;

  @IsString()
  description?: string;

  @IsEnum(StatusEnum)
  status?: StatusEnum;
}
