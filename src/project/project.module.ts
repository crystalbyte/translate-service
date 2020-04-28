import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'bearer' })
    ],
    providers: [ProjectService],
    controllers: [ProjectController]
})
export class ProjectModule { }
