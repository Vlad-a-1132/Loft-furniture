'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

// Функция для генерации url заглушки из placeholder.com
function getPlaceholderUrl(width: number, height: number, text: string = 'ROOMS') {
  return `https://via.placeholder.com/${width}x${height}/f0f0f0/909090?text=${text}`;
}

// Типы заглушек с их размерами
const placeholderTypes: Record<string, { width: number; height: number }> = {
  product: { width: 800, height: 800 },
  category: { width: 800, height: 600 },
  hero: { width: 1920, height: 1080 },
  thumbnail: { width: 400, height: 300 },
  team: { width: 400, height: 400 },
  map: { width: 1200, height: 600 },
};

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  placeholderType?: keyof typeof placeholderTypes;
  fallbackText?: string;
}

export default function SafeImage({
  src,
  alt,
  placeholderType = 'product',
  fallbackText,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const { width, height } = placeholderTypes[placeholderType] || placeholderTypes.product;
  const placeholderSrc = getPlaceholderUrl(width, height, fallbackText || alt);

  const handleError = () => {
    if (!isError) {
      setImgSrc(placeholderSrc);
      setIsError(true);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
} 