import Image from "next/image";
import type { TechItemProps } from '@/lib/definitions';

function TechnologyItem({ icon }: TechItemProps) {
  return (
    <Image
      src={ icon.path }
      alt={ `${icon.name}` }
      width={ 40 }
      height={ 40 }
      objectFit={ 'contain' }
    />
  );
};

export default TechnologyItem;
