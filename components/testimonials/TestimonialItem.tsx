import Card from 'react-bootstrap/Card';
import type { TestimonialProps } from '../../types/types';

const TestimonialItem = ({ data }: TestimonialProps) => {
  return (
    <Card className='rec-card'>
      <Card.Body>
        <Card.Title>{ data.name }</Card.Title>
        <Card.Subtitle className='mb-2' style={ { opacity: '0.8' } }>
          { data.position }
        </Card.Subtitle>
        <Card.Text id='text_of'>{ data.recommendation }</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TestimonialItem;
