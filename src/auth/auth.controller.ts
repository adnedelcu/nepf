import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { RegisterDto } from 'src/dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async index(@Body() loginDto: LoginDto) {
    return { token: this.authService.login(loginDto) };
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async show(@Body() registerDto: RegisterDto) {
    return { token: this.authService.register(registerDto) };
  }
}
