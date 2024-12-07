import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TaskModule } from "./modules/task/task.module";

@Module({
  imports: [TaskModule, TaskModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
