import { Body, Controller, Logger, Post } from "@nestjs/common";
import { CreateNotificationDto } from "./dto";
import { SendNotificationService } from "./services";

@Controller('notification')
export class NotificationController {
    constructor(
        private readonly sendNotificationService: SendNotificationService
    ) { }

    @Post()
    createNotification(@Body() payload: CreateNotificationDto) {
        return this.sendNotificationService.send(payload)
    }
    
}