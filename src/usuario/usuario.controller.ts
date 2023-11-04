import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { UsuarioCadastrarDto } from './dto/usuario.create.dto';
import { ResultDto } from 'src/dto/result.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('findAll')
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Post('cadastrar')
  async create(@Body() data: UsuarioCadastrarDto): Promise<ResultDto> {
    return this.usuarioService.create(data);
  }
}
