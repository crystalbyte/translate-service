import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    public async validateUser(): Promise<any> {
        // We accept all users
        return true;
    }
}