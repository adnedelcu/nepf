import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { RegisterDto } from "../dto/register.dto";
import { LoginDto } from "../dto/login.dto";
import { UsersService } from "../users/users.service";
import { plainToInstance } from "class-transformer";
import { User } from "src/schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(registerDto: RegisterDto): Promise<string> {
    const newUser = await this.usersService.create(registerDto);
    const token = this.jwtService.sign(plainToInstance(User, newUser));

    return token;
  }

  async login(loginDto: LoginDto): Promise<string> {
    const user = await this.usersService.findByEmail(loginDto.email);
    const instance = plainToInstance(User, user);
    const token = this.jwtService.sign({...instance});

    return token;
  }
}
