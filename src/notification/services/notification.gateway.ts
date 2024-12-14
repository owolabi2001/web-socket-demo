import { Logger } from "@nestjs/common";
import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class NotificationGateway {

    @WebSocketServer()
    server: Server;

    private readonly logger = new Logger(NotificationGateway.name)

    @SubscribeMessage('notification')
    handleEvent(
        @MessageBody() data: { id: number },
        @ConnectedSocket() client: Socket,): string {
        this.logger.log('subscribed event')
        const { id } = data;

        client.emit('events', { name: 'Nest' });
        client.join(`client.${id}`)
        return id.toString();
    }

    sendNotificationEvent(data: { content: string, title: string }, id: number) {
        this.logger.log(`Sending notification to user listening on id: ${id}`)
        this.server.to(`client.${id}`).emit('personal', data)
        this.server.emit('sent', data)

    }


}