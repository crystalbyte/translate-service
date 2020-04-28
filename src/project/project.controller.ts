import { Controller, Post, NotImplementedException, Delete, Patch } from '@nestjs/common';

@Controller('project')
export class ProjectController {

    @Post()
    public async create() {
        throw new NotImplementedException();
    }

    @Delete()
    public async delete() {
        throw new NotImplementedException();
    }

    @Patch()
    public async update() {
        throw new NotImplementedException();
    }
}
