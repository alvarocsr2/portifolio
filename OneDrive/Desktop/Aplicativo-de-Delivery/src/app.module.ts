import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Usuario/entity/usuario.entity';
import { UsuarioModule } from './Usuario/usuario.module';

@Module({
  imports: [
ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
      password: "root",
      database: 'db_delivery',
      entities: [Usuario],
      synchronize: true,
      logging: true,
    }),
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}