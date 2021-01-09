import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Star } from '@material-ui/icons';
import PrimaryButton from '../buttons/PrimaryButton';

const styles = {
  slideImage: {
    width: 'calc(100% - 40px)',
    margin: '0 20px',
  },
  selectedImageWrapper: {
    position: 'relative',
    padding: 20
  },
  selectedImage: {
    width: '100%',
  },
  buttonFavorite: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
  }
};

const ProductImages = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleThumbClick = (src) => {
    setSelectedImage(src);
  }

  const ProductImage = ({ src, index }) => {
    return (
      <Slide index={index}>
        <img
          src={src}
          style={styles.slideImage}
          onClick={() => handleThumbClick(src)}
        />
      </Slide>
    )
  };

  return (
    <Paper variant="outlined">
      <div style={styles.selectedImageWrapper}>
        <img src={selectedImage} style={styles.selectedImage} />
        <PrimaryButton style={styles.buttonFavorite}>
          <Star />
        </PrimaryButton>
      </div>
      <CarouselProvider
        naturalSlideHeight={60}
        naturalSlideWidth={100}
        totalSlides={product.images.length}
        visibleSlides={3}
      >
        <Slider>
          {product.images.map((src, idx) => (
            <ProductImage src={src} index={idx} key={idx} />
          ))}
        </Slider>
      </CarouselProvider>
    </Paper>
  );
}

export default ProductImages
