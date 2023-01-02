import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Voce receber um solicaitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Voc')).toThrowError();
  });

  it('should not be able to create a notification content more than 240 characters', () => {
    expect(() => new Content('V'.repeat(241))).toThrowError();
  });
});
