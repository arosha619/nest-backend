import { ObjectType, Field , Int} from "@nestjs/graphql";
import { UserSettings } from "./UserSettings";

@ObjectType()
export class User {

    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    user_name: string;

    @Field((type) => String, { nullable: true })
    display_name?: string;

    @Field({nullable: true})
    user_settings?: UserSettings;
    
    
}