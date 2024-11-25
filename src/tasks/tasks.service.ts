import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async createTask(userId: string, description: string): Promise<Task> {
    const task = new this.taskModel({ userId, description });
    return task.save();
  }

  async getTasks(userId: string): Promise<Task[]> {
    return this.taskModel.find({ userId });
  }
}
