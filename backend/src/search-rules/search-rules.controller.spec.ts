import { Test, TestingModule } from '@nestjs/testing';
import { SearchRulesController } from './search-rules.controller';

describe('SearchRulesController', () => {
  let controller: SearchRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchRulesController],
    }).compile();

    controller = module.get<SearchRulesController>(SearchRulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
