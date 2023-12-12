import Image from "next/image";
import type { TechItemProps } from '@/lib/definitions';

const TechnologyItem = ({ icon }: TechItemProps) => {
  return (
    <Image
      src={ icon.path }
      alt={ `${icon.name}` }
      width={ 50 }
      height={ 60 }
      objectFit={ 'contain' }
    />
  );
};

export default TechnologyItem;
