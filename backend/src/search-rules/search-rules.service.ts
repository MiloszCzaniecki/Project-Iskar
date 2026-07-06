import { Injectable, NotFoundException } from '@nestjs/common';
import { SearchRule } from './models/search-rule.model';
import { CreateSearchRuleDto } from './dto/create-search-rule.dto';
import { UpdateSearchRuleDto } from './dto/update-search-rule.dto';

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

  findOne(id: string): SearchRule {
    const singleSearchRule = this.searchRules.find(
      (searchRule) => searchRule.id === id,
    );

    if (!singleSearchRule) {
      throw new NotFoundException(`Search rule with id ${id} not found`);
    }

    return singleSearchRule;
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

  update(id: string, updateSearchRuleDto: UpdateSearchRuleDto): SearchRule {
    const searchRule = this.findOne(id);

    const updatedSearchRule: SearchRule = {
      ...searchRule,
      ...updateSearchRuleDto,
    };

    const searchRuleIndex = this.searchRules.findIndex(
      (searchRule) => searchRule.id === id,
    );

    this.searchRules[searchRuleIndex] = updatedSearchRule;

    return updatedSearchRule;
  }
}
