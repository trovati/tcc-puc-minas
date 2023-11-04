import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioCadastrarDto } from './dto/usuario.create.dto';
import { ResultDto } from 'src/dto/result.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async create(data: UsuarioCadastrarDto): Promise<any> {
    const usuario = new Usuario();

    usuario.name = data.name;
    usuario.email = data.email;
    usuario.endereco = data.endereco;
    usuario.telefone = data.telefone;
    this.usuarioRepository
      .save(usuario)
      .then(() => {
        return <ResultDto>{
          status: true,
          mensagem: 'Salvou',
        };
      })
      .catch(() => {
        return <ResultDto>{
          status: false,
          mensagem: 'Error ao cadastrar usuário',
        };
      });
  }
}
