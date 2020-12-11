import { EntityRepository, Repository } from 'typeorm';
import { User } from '@entity/User';
import { CreateParams } from '@service/user-service';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  findUser(email: string) {
    return this.findOne({ userId: email });
  }

  insertUesr({ email }: CreateParams) {
    const newUser = this.create({ userId: email });
    return this.manager.save(newUser);
  }
}
