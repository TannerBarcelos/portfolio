import Card from 'react-bootstrap/Card';
import type { TestimonialProps } from '@/lib/definitions';

const TestimonialItem = ({ data }: TestimonialProps) => {
  return (
    <Card className='rec-card'>
      <Card.Body>
        <Card.Title>{ data.name }</Card.Title>
        <Card.Subtitle className='mb-2 card-subtitle'>
          { data.position }
        </Card.Subtitle>
        <Card.Text id='text_of'>{ data.recommendation }</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TestimonialItem;
