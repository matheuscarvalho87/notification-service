import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  //esse decorator é responsavel por ouvir o tópico criado abaixo
  @EventPattern('notification-send-notification')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: SendNotificationPayload,
  ) {
    console.log('AQUI', { content, category, recipientId });
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
