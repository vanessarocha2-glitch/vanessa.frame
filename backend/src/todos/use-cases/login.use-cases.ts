import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { LoginDto } from "src/auth/dto/login.dto";
import { FindUserByEmailRepository } from "src/auth/repository";

@Injectable()
export class LoginUseCases {
    constructor(
      private readonly findUserByEmailRepository: FindUserByEmailRepository,
     private readonly jwtService: JwtService,
    ) {}

    async execute(data: LoginDto) {
     const user = await this.findUserByEmailRepository.findByEmail(
        data.email,
     );

        if (!user) {
         throw new BadRequestException('Email ou senha inválidos');
        }

        const senhaCorreta = await bcrypt.compare(
         data.password,
         user.passwordHash,
        );

        if (!senhaCorreta) {
         throw new BadRequestException('Email ou senha inválidos');
        }

        const accessToken = this.jwtService.sign({
         sub: user.id,
         email: user.email,
        });

        return {
            accessToken,
        user:{
         id:user.id,
         name:user.name,
        email:user.email,
        }
    
        };
    }
}