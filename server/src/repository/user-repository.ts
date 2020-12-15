import { EntityRepository, Repository } from 'typeorm';
import { User } from '@entity/User';
import { CreateParams } from '@service/user-service';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  findUser(iat: string) {
    return this.findOne({ iat });
  }

  insertUesr({ email, iat }: CreateParams) {
    const newUser = this.create({ email, iat });
    return this.manager.save(newUser);
  }
}
