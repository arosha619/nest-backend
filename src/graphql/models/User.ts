import { ObjectType, Field , Int} from "@nestjs/graphql";

@ObjectType()
export class User {

    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    user_name: string;

    @Field((type) => String, { nullable: true })
    display_name?: string;
    
    
}