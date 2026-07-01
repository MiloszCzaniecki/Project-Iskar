import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchRulesModule } from './search-rules/search-rules.module';

@Module({
  imports: [SearchRulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
