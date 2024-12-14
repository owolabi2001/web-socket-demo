import { Injectable, Logger } from "@nestjs/common";
import { CreateNotificationDto } from "../dto";
import { NotificationGateway } from "./notification.gateway";

@Injectable()
export class SendNotificationService {
    private readonly logger = new Logger(SendNotificationService.name)
    constructor(
        private readonly gateway: NotificationGateway
    ) { }

    send(payload: CreateNotificationDto) {
        this.logger.log(`Received request to send notification`)
        const {id, ...req} = payload;

        this.gateway.sendNotificationEvent(req,id)
        return payload
    }

}