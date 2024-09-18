import { Box, Image, Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Define a type for the props
interface ProjectCarouselProps {
  images: string[]; // Array of image URLs as strings
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images }) => {
  // State for the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to handle going to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle going to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box position="relative" maxW="600px" mx="auto">
      {/* Main image display */}
      <Image
        src={images[currentIndex]}
        alt={`project-image-${currentIndex}`}
        borderRadius="md"
      />

      {/* Previous button */}
      <IconButton
        icon={<ChevronLeftIcon />}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        onClick={handlePrev}
        aria-label="Previous Image"
        zIndex="1"
      />

      {/* Next button */}
      <IconButton
        icon={<ChevronRightIcon />}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        onClick={handleNext}
        aria-label="Next Image"
        zIndex="1"
      />

      {/* Thumbnail navigation */}
      <Flex mt="4" justifyContent="center" gap="2">
        {images.map((image, index) => (
          <Box
            key={index}
            border={index === currentIndex ? '2px solid white' : 'none'}
            onClick={() => setCurrentIndex(index)}
            cursor="pointer"
            _hover={{ borderColor: 'gray.300' }}
          >
            <Image
              src={image}
              alt={`thumbnail-${index}`}
              width="60px"
              borderRadius="md"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
