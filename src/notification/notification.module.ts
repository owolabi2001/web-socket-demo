import { Module } from '@nestjs/common';
import { NotificationGateway, SendNotificationService } from './services';
import { NotificationController } from './notification.controller';

@Module({
    providers: [SendNotificationService, NotificationGateway],
    controllers: [NotificationController]
})
export class NotificationModule { }
