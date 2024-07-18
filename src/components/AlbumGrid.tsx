import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import { Album } from '../models/Album';
import SongGrid from './SongGrid';

interface AlbumGridProps {
  albums: Album[];
}

const AlbumGrid: React.FC<AlbumGridProps> = observer(({ albums }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const onRowDblClick = (e: any) => {
    setSelectedAlbum(e.data);
  };

  return (
    <div>
      <DataGrid
        dataSource={albums}
        keyExpr="id"
        showBorders={true}
        onRowDblClick={onRowDblClick}
      >
        <Column dataField="name" caption="Name" />
      </DataGrid>
      {selectedAlbum && (
        <div>
          <h3>Edit Album</h3>
          <SongGrid songs={selectedAlbum.songs} />
        </div>
      )}
    </div>
  );
});

export default AlbumGrid;
