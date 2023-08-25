import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParachutesModule } from './parachutes/parachutes.module';
import { AstronautasModule } from './astronautas/astronautas.module';

@Module({
  imports: [ ParachutesModule, AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
