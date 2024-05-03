import { Test, TestingModule } from '@nestjs/testing';
import { DispatchedService } from './dispatched.service';

describe('DispatchedService', () => {
  let service: DispatchedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispatchedService],
    }).compile();

    service = module.get<DispatchedService>(DispatchedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
