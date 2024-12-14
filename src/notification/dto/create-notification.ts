import { IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {
    @IsNumber()
    id: number;
    @IsString()
    title: string;
    @IsString()
    content: string
}