import { v4 as uuidv4 } from 'uuid';
import { model, prop, Model } from 'mobx-keystone';
import { Song } from './Song';

@model('app/Album')
export class Album extends Model({
    id: prop<string>(() => uuidv4()),
  name: prop<string>(),
  songs: prop<Song[]>(() => []),
}) {
  setName(name: string) {
    this.name = name;
  }
}

