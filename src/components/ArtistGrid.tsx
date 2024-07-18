import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import { useStore } from '../store/StoreProvider';
import AlbumGrid from './AlbumGrid';
import { Artist } from '../models/Artist';

const ArtistGrid: React.FC = observer(() => {
  const store = useStore();
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const onRowDblClick = (e: any) => {
    setSelectedArtist(e.data);
  };

  return (
    <div>
      <DataGrid
        dataSource={store.artists}
        keyExpr="id"
        showBorders={true}
        onRowDblClick={onRowDblClick}
      >
        <Column dataField="name" caption="Name" />
      </DataGrid>
      {selectedArtist && (
        <div>
          <h3>Edit Artist</h3>
          <AlbumGrid albums={selectedArtist.albums} />
        </div>
      )}
    </div>
  );
});

export default ArtistGrid;
