import { User } from "@my-shared/models/user"
import { getUser, User2 } from "@my-logic/services/users.service"
import userRoute from "@routes/user"

const user: User = getUser()
//const user: User2 = { name: 'test' }
console.log('testing', user)