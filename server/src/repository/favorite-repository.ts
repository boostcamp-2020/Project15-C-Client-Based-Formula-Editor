import { EntityRepository, Repository } from 'typeorm';
import { Favorite } from '../entity/Favorite';

@EntityRepository(Favorite)
export default class FavoriteRepository extends Repository<Favorite> {}
