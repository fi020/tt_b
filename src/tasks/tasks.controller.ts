import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTask(@Req() req, @Body('description') description: string) {
    return this.tasksService.createTask(req.user.userId, description);
  }
  // 

  @Get("/t")
  getTest(): string {
    return 'Hello, this is a GET request!';
  }

   //   



  @UseGuards(JwtAuthGuard)
  @Get()
  async getTasks(@Req() req) {
    return this.tasksService.getTasks(req.user.userId);
  }
}
