import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/StoreProvider';
import { Artist } from '../models/Artist';

const ArtistForm: React.FC = observer(() => {
  const store = useStore();
  const [name, setName] = React.useState('');

  const addArtist = () => {
    const newArtist = new Artist({
      id: Math.random().toString(),
      name: name,
      albums: []
    });
    store.artists.push(newArtist);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Artist Name"
      />
      <button onClick={addArtist}>Add Artist</button>
    </div>
  );
});

export default ArtistForm;
