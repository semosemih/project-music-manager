import { model, prop, Model, modelAction } from 'mobx-keystone';
import { Artist } from '../models/Artist';
import { Album } from '../models/Album';
import { Song } from '../models/Song';

@model('app/RootStore')
export class RootStore extends Model({
  artists: prop<Artist[]>(() => []),
  albums: prop<Album[]>(() => []),
  songs: prop<Song[]>(() => []),
}) {
  @modelAction
  updateSong(id: string, name: string, duration: number) {
    const song = this.songs.find(song => song.id === id);
    if (song) {
      song.setName(name);
      song.setDuration(duration);
    }
  }

  @modelAction
  updateAlbum(id: string, name: string) {
    const album = this.albums.find(album => album.id === id);
    if (album) {
      album.setName(name);
    }
  }

  @modelAction
  updateArtist(id: string, name: string) {
    const artist = this.artists.find(artist => artist.id === id);
    if (artist) {
      artist.setName(name);
    }
  }
}
