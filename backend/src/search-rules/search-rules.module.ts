import { Module } from '@nestjs/common';
import { SearchRulesController } from './search-rules.controller';
import { SearchRulesService } from './search-rules.service';

@Module({
  controllers: [SearchRulesController],
  providers: [SearchRulesService]
})
export class SearchRulesModule {}
