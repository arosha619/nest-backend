import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserSettings {
    @Field((type) => Int)
    user_id: number;

    @Field({defaultValue: false})
    receive_notifications: boolean;

    @Field({defaultValue: false})
    receive_email: boolean;
}