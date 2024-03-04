import {  useParams } from 'react-router-dom';
import { Footer, ImageBlock, Sortbar } from '../components';
import PageTransition from './PageTransition';
import albumsData from '../data/categories.json';
import { useState } from 'react';
import { Category } from '../interfaces';
import { Helmet } from 'react-helmet';

const WorkPage = () => {
  const [sortOption, setSortOption] = useState('all');
  const [albums, setAlbums] = useState<Category[]>(albumsData);
  const params = useParams();

  let sortedAlbums: Category[] = [];

  if (sortOption.toLowerCase() === 'all') {
    sortedAlbums = albums;
  } else {
    sortedAlbums = albums.filter(
      (album) => (album.name.toLowerCase() === sortOption.toLowerCase()) && album.key == params?.key,
    );
  }

  const tags = albums.map((album) => album.name.toLowerCase());

  return (
    <>
      <Helmet>
        <title>NEHMEYA WASYHUN - {params.key?.toUpperCase()} Page</title>
      </Helmet>
      <PageTransition className="pt-20 px-4">
        <h1 className="uppercase md:text-8xl text-4xl md:px-8 px-2 md:my-16 mb-8">
          {sortOption === 'all' ? `${params.key?.toUpperCase()} work` : sortOption}
        </h1>
        <section className="md:grid flex flex-col md:grid-cols-12 grid-cols-1 gap-4 ">
          {sortedAlbums.map((album, i) => {
            let colSpan = '';

            if (i % 6 < 2) {
              colSpan = 'col-span-4 top-0';
            } else if (i % 6 === 2) {
              colSpan = 'col-span-4';
            } else {
              colSpan = 'col-span-4';
            }

            return (
              <ImageBlock
                key={album.key}
                path={`/work/${album.name}`}
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
