import Image from "next/image";
import type { TechItemProps } from '@/lib/definitions';

const TechnologyItem = ({ icon }: TechItemProps) => {
  return (
    <Image
      src={ icon.path }
      alt={ `${icon.name}` }
      width={ 60 }
      height={ 120 }
      objectFit={ 'contain' }
    />
  );
};

export default TechnologyItem;
