import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    //chamar o constructor do ServerKafka
    //serviço serveless kafka UPSTASH
    super({
      client: {
        clientId: 'notifications',
        brokers: ['bold-sunfish-10627-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Ym9sZC1zdW5maXNoLTEwNjI3JMgJBaFOr4xAq1lX9MmJGoBLcyU6kJ56rkWFKQY',
          password: 'a2011aa8e4644d559f5677c0e2ec7be8',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close;
  }
}
