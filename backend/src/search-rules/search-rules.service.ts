import { Injectable } from '@nestjs/common';
import { SearchRule } from './models/search-rule.model';
import { CreateSearchRuleDto } from './dto/create-search-rule.dto';

@Injectable()
export class SearchRulesService {
  private readonly searchRules: SearchRule[] = [
    {
      id: '1',
      keyword: 'Angular',
      isActive: true,
    },
    {
      id: '2',
      keyword: 'NestJS',
      isActive: true,
    },
    {
      id: '3',
      keyword: 'TypeScript',
      isActive: true,
    },
  ];

  findAll(): SearchRule[] {
    return this.searchRules;
  }

  create(createSearchRuleDto: CreateSearchRuleDto): SearchRule {
    const newSearchRule: SearchRule = {
      id: crypto.randomUUID(),
      keyword: createSearchRuleDto.keyword,
      isActive: true,
    };

    this.searchRules.push(newSearchRule);

    return newSearchRule;
  }
}
