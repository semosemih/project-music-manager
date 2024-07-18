import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DataGrid, Column, Form, Button } from 'devextreme-react/data-grid';
import { Song } from '../models/Song';

interface SongGridProps {
  songs: Song[];
}

interface EditableSongData {
  name: string;
  duration: number;
}

const SongGrid: React.FC<SongGridProps> = observer(({ songs }) => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [songData, setSongData] = useState<EditableSongData | null>(null);

  const onRowDblClick = (e: any) => {
    setSelectedSong(e.data);
    setSongData({
      name: e.data.name,
      duration: e.data.duration,
    });
  };

  const saveSong = () => {
    if (selectedSong && songData) {
      selectedSong.setName(songData.name);
      selectedSong.setDuration(songData.duration);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (songData) {
      setSongData({ ...songData, [name]: value });
    }
  };

  return (
    <div>
      <DataGrid
        dataSource={songs}
        keyExpr="id"
        showBorders={true}
        onRowDblClick={onRowDblClick}
      >
        <Column dataField="name" caption="Name" />
        <Column dataField="duration" caption="Duration" />
      </DataGrid>
      {selectedSong && songData && (
        <div>
          <h3>Edit Song</h3>
          <Form>
            <Column
              dataField="name"
              editorOptions={{ value: songData.name, onValueChanged: handleInputChange }}
            />
            <Column
              dataField="duration"
              editorOptions={{ value: songData.duration, onValueChanged: handleInputChange }}
            />
          </Form>
          <Button text="Save" onClick={saveSong} />
        </div>
      )}
    </div>
  );
});

export default SongGrid;
