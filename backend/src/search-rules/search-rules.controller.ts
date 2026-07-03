import { Controller, Get, Post, Body } from '@nestjs/common';
import { SearchRulesService } from './search-rules.service';
import { CreateSearchRuleDto } from './dto/create-search-rule.dto';

@Controller('search-rules')
export class SearchRulesController {
  constructor(private readonly searchRulesService: SearchRulesService) {}
  // Above is dependency injection

  @Get()
  findAll() {
    return this.searchRulesService.findAll();
  }

  @Post()
  create(@Body() createSearchRuleDto: CreateSearchRuleDto) {
    return this.searchRulesService.create(createSearchRuleDto);
  }
}
