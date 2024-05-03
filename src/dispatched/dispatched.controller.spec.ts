import { Test, TestingModule } from '@nestjs/testing';
import { DispatchedController } from './dispatched.controller';

describe('DispatchedController', () => {
  let controller: DispatchedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispatchedController],
    }).compile();

    controller = module.get<DispatchedController>(DispatchedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
