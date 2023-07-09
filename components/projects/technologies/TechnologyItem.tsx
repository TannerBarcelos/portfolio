import Image from "next/image";
import type { TechItemProps } from '../../../types/types';

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
