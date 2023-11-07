import { User } from "my-shared/src/models/user"
import { getUser, User2 } from "my-logic/src/services/users.service"
import userRoute from "./routes/user"

const user: User = getUser()
//const user: User2 = { name: 'test' }
console.log('testing', user)