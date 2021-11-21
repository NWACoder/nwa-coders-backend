import { Test, TestingModule } from '@nestjs/testing';
import { GuestSpeakerFormService } from './guest-speaker-form.service';

describe('GuestSpeakerFormService', () => {
  let service: GuestSpeakerFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestSpeakerFormService],
    }).compile();

    service = module.get<GuestSpeakerFormService>(GuestSpeakerFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
