import { Controller, Get } from '@nestjs/common';
import { SearchRulesService } from './search-rules.service';

@Controller('search-rules')
export class SearchRulesController {
  constructor(private readonly searchRulesService: SearchRulesService) {}
  // Above is dependency injection

  @Get()
  findAll() {
    return this.searchRulesService.findAll();
  }
}
