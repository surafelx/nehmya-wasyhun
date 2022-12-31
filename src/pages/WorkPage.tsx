import { Footer, ImageBlock, Sortbar } from '../components';
import PageTransition from './PageTransition';
import albumsData from '../data/albums.json';
import { useState } from 'react';
import { Album } from '../interfaces';

const WorkPage = () => {
  const [sortOption, setSortOption] = useState('all');
  const [albums, setAlbums] = useState<Album[]>(albumsData);

  let sortedAlbums: Album[] = [];

  if (sortOption.toLowerCase() === 'all') {
    sortedAlbums = albums;
  } else {
    sortedAlbums = albums.filter(
      (album) => album.tag.toLowerCase() === sortOption.toLowerCase(),
    );
  }

  const tags = albums.map((album) => album.tag.toLowerCase());

  return (
    <>
      <PageTransition className="pt-20 px-4">
        <h1 className="uppercase md:text-8xl text-4xl md:px-8 px-2 md:my-16 mb-8">
          {sortOption === 'all' ? 'All work' : sortOption}
        </h1>
        <section className="md:grid flex flex-col md:grid-cols-12 grid-cols-1 gap-4 ">
          {sortedAlbums.map((album, i) => {
            let colSpan = '';

            if (i % 6 < 2) {
              colSpan = 'col-span-6';
            } else if (i % 6 === 2) {
              colSpan = 'col-span-12';
            } else {
              colSpan = 'col-span-4';
            }

            return (
              <ImageBlock
                key={album.key}
                path={`/work/${album.key}`}
                img={album.images[0]}
                label={album.name}
                className={colSpan}
              />
            );
          })}
        </section>
        <Footer />
      </PageTransition>
      {/* 
      //! Fixed element needs to be outside of PageTransition because 
      //! transformX brakes fixed position style (Look into someday) 
      */}
      <Sortbar
        options={[...new Set(['all', ...tags])]}
        currentOption={sortOption}
        setCurrentOption={(option: string) => setSortOption(option)}
      />
    </>
  );
};

export default WorkPage;
