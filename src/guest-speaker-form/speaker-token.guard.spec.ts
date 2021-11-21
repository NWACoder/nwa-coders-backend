import { SpeakerTokenGuard } from './speaker-token.guard';

describe('SpeakerTokenGuard', () => {
  it('should be defined', () => {
    expect(new SpeakerTokenGuard()).toBeDefined();
  });
});
