import { Args, Query, Resolver, Int } from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/_mock_/mockUsers";

@Resolver()
export class UserResolver {
    @Query((returns) => User, { nullable: true })
    getUsersByID(@Args('id', { type: () => Int }) id: number){
        return mockUsers.find((user) => user.id === id);
    }

    @Query((returns) => [User], { nullable: 'items' })
    getUsers(){
        return mockUsers;
    }
}