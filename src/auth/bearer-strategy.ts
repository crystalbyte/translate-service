import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BearerStrategy } from 'passport-azure-ad';
import { AuthService } from './auth.service';

@Injectable()
export class AzureStrategy extends PassportStrategy(BearerStrategy, 'bearer') {
    constructor(private authService: AuthService) {
        super();
    }

    public async validate(): Promise<any> {
        const user = await this.authService.validateUser();
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}