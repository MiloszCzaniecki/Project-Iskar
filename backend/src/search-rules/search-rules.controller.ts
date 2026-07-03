import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchRulesService.findOne(id);
  }

  @Post()
  create(@Body() createSearchRuleDto: CreateSearchRuleDto) {
    return this.searchRulesService.create(createSearchRuleDto);
  }
}
