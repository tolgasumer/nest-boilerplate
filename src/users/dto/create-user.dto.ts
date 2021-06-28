import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'Tolga' })
    readonly firstName: string;
    @ApiProperty({ example: 'Sumer' })
    readonly lastName: string;
    @ApiProperty({ example: true })
    readonly isActive?: boolean;
}
