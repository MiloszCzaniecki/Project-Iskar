import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchRulesService {
    private readonly searchRules = [
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

    findAll() {
        return this.searchRules;
    }
}
