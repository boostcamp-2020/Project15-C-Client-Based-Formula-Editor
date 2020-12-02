import { EntityRepository, Repository } from 'typeorm';
import { User } from '@entity/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {}
