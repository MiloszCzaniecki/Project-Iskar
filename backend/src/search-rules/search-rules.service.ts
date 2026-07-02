import { Injectable } from '@nestjs/common';
import { SearchRule } from './search-rules.module';

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

  findAll(): SearchRule {
    return this.searchRules;
  }
}
