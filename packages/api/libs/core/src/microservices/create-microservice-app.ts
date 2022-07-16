import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';

export function createMicroserviceApp(AppModule): Promise<INestMicroservice> {
    return NestFactory.createMicroservice<TcpOptions>(AppModule, {
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 3000 }
    });
}
