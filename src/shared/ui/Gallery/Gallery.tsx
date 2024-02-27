import { FC } from 'react';

type GalleryProps = {
  images: string[];
};

export const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((preview, index) => (
          <div className="offer__image-wrapper" key={index}>
            <img className="offer__image" src={preview} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};
