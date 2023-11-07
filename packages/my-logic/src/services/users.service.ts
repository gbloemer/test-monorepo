import { User } from 'my-shared/src/models/user'

export interface User2 {
  name: string
}
export function getUser(): User {
  return {
    name: 'Guenter',
  }
}