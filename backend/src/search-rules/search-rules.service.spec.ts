import { Test, TestingModule } from '@nestjs/testing';
import { SearchRulesService } from './search-rules.service';

describe('SearchRulesService', () => {
  let service: SearchRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchRulesService],
    }).compile();

    service = module.get<SearchRulesService>(SearchRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
