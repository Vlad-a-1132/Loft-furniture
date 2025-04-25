import React from 'react';

type ImagePlaceholderProps = {
  category: string;
  index: number;
};

const colors = [
  'bg-amber-800',
  'bg-slate-700',
  'bg-neutral-800',
  'bg-stone-700',
];

export default function ImagePlaceholder({ category, index }: ImagePlaceholderProps) {
  return (
    <div className={`w-full h-full ${colors[index % colors.length]} flex items-center justify-center`}>
      <div className="text-white text-center px-4">
        <div className="text-lg font-medium">{category}</div>
        <div className="text-sm opacity-70">Изображение {index + 1}</div>
      </div>
    </div>
  );
} 