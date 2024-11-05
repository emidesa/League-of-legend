import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';

const ItemsCards = ({ItemsCards}) =>  {

    const { id } = useParams();
const navigate = useNavigate();
    const navigateTo = (id) => {
      navigate("/LorePage/"+id);
    }

  return (
    <Card style={{ width: '15rem' }}> 
       
      <Card.Body>
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+ ItemsCards.image.full}/>
        <Card.Title className='d-flex align-items-center flex-column'>{ItemsCards.name}</Card.Title>
        <Card.Text>
            
        </Card.Text>
        <Button className='d-flex justify-content-center flex-column' variant="warning">Voir détails</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemsCards;