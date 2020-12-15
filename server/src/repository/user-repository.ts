import { EntityRepository, Repository } from 'typeorm';
import { User } from '@entity/User';
import { CreateParams } from '@service/user-service';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  findUser(userId: string) {
    return this.findOne({ userId });
  }

  insertUesr({ email, userId }: CreateParams) {
    const newUser = this.create({ email, userId });
    return this.manager.save(newUser);
  }
}
