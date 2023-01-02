import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['charmed-foxhound-6391-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2hhcm1lZC1mb3hob3VuZC02MzkxJDxHIYsOzHlJgjhkd1MR5IbQcEz_rkWifnY',
          password:
            'O8LsT4WtGUcJ-B0fPMpAUkhHl2fP9qupsB_gp9zwMTs4fwm2xXlS1tf8e31HxEYssPlwLg==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close;
  }
}
