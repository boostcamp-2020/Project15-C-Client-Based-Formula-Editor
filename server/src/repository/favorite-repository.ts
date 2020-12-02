import { EntityRepository, Repository } from 'typeorm';
import { Favorite } from '@entity/Favorite';
import { CreateParams } from '@service/favorite-service';

@EntityRepository(Favorite)
export default class FavoriteRepository extends Repository<Favorite> {
  getByUserId(userId: number) {
    return this.find({ user: { id: userId } });
  }

  createAndSave({ title, latex, userId }: CreateParams) {
    const favorite = this.create({ latex, title, user: { id: userId } });
    return this.manager.save(favorite);
  }
}
