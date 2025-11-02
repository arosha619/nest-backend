import { Query, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";

@Resolver()
export class UserResolver {
    @Query((returns) => User)
    getUser(){
        return {
            id: 1,
            user_name: "user name example",
            display_name: "display name example",
        }
    }

}