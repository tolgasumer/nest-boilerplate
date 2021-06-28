import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger config.
  const config = new DocumentBuilder()
    .setTitle('Nest.js boilerplate')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('boilerplate')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document); // Serve Swagger UI at {root}/swagger-ui

  await app.listen(3000);
}
bootstrap();
