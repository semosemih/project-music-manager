import React from 'react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import { Album } from '../models/Album';

interface AlbumGridProps {
  albums: Album[];
}

const AlbumGrid: React.FC<AlbumGridProps> = ({ albums }) => {
  return (
    <DataGrid dataSource={albums} keyExpr="id">
      <Column dataField="name" />
      <Column dataField="genre" />
      <Column dataField="releaseDate" />
    </DataGrid>
  );
};

export default AlbumGrid;
