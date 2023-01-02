import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notification use case', () => {
  it('should be able to count many notifications by recipientId', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
