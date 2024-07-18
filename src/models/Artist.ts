import { v4 as uuidv4 } from 'uuid';
import { model, prop, Model } from 'mobx-keystone';
import { Album } from './Album';

@model('app/Artist')
export class Artist extends Model({
    id: prop<string>(() => uuidv4()),
  name: prop<string>(),
  albums: prop<Album[]>(() => []),
}) {
  setName(name: string) {
    this.name = name;
  }
}
