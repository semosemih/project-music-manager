import { v4 as uuidv4 } from 'uuid';
import { model, Model, prop } from 'mobx-keystone';

@model('app/Song')
export class Song extends Model({
    id: prop<string>(() => uuidv4()),
  name: prop<string>(),
  duration: prop<number>(),
}) {
  setName(name: string) {
    this.name = name;
  }

  setDuration(duration: number) {
    this.duration = duration;
  }
}
