import React,{useState} from 'react'
import AlbumList from './AlbumList'
import './Pagination.css'
import Album from './type'
import ReactPaginate from 'react-paginate';

type Props = {
  albums: Album[];
}

const Pagination = (props: Props) => {
  const {albums} = props;

  // 任意に変更可能
  const ItemsPerPage = 6;

  const [itemsOffset, setItemsOffset] = useState(0)

  const endOffset = itemsOffset + ItemsPerPage

  const currentAlbums = albums.slice(itemsOffset, endOffset)

  const pageCount = Math.ceil(albums.length / ItemsPerPage)

  const handlePageClick = (e: { selected: number }) => {
    // console.log(e.selected)
    const newOffset = (e.selected * ItemsPerPage) % albums.length;
    setItemsOffset(newOffset)
  }

  return (
    <div className='albumWrapper'>
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  )
}

export default Pagination