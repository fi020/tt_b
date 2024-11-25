// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    // MongooseModule.forRoot('your-mongodb-atlas-uri'),
    MongooseModule.forRoot('mongodb://localhost:27017/task_tracker'),
    AuthModule,
    TasksModule,
  ],
})
export class AppModule {}
