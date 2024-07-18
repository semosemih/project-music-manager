import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Song } from '../models/Song';

interface SongFormProps {
  song?: Song;
  onSave: (song: Song) => void;
  onCancel: () => void;
}

const SongForm: React.FC<SongFormProps> = observer(({ song, onSave, onCancel }) => {
  const [name, setName] = useState(song ? song.name : '');
  const [duration, setDuration] = useState(song ? song.duration : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSong = new Song({
      id: song ? song.id : '',
      name,
      duration
    });
    onSave(newSong);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Duration</label>
        <input type="number" value={duration} onChange={(e) => setDuration(parseInt(e.target.value, 10))} />
      </div>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
});

export default SongForm;
