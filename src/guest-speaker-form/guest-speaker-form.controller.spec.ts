import { Test, TestingModule } from '@nestjs/testing';
import { GuestSpeakerFormController } from './guest-speaker-form.controller';
import { GuestSpeakerFormService } from './guest-speaker-form.service';

describe('GuestSpeakerFormController', () => {
  let controller: GuestSpeakerFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestSpeakerFormController],
      providers: [GuestSpeakerFormService],
    }).compile();

    controller = module.get<GuestSpeakerFormController>(GuestSpeakerFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
