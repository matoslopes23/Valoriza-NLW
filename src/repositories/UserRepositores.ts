import {EntityRepository, Repository} from 'typeorm'
import { User } from '../entities/User';

@EntityRepository(User)
class UserRepositores extends Repository<User> {}

export {UserRepositores};