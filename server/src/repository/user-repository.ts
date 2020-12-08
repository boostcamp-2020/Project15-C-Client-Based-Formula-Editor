import { EntityRepository, Repository } from 'typeorm';
import { User } from '@entity/User';
import { CreateParams } from '@service/user-service';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  findUser(email: string) {
    return this.findOne({ userId: email });
  }

  insertUesr({ email, nickname, profile_image }: CreateParams) {
    console.log('email:', email, '//nickname: ', nickname);
    const newUser = this.create({ userId: email, nickName: nickname, profileUrl: profile_image });
    return this.manager.save(newUser);
  }
}
