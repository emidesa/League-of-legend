import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ChampionsCards = ({ChampionsCards}) =>  {

const navigate = useNavigate();
    const navigateTo = (id) => {
      navigate("/LorePage/"+id)
    }

  return (
    <Card style={{ width: '18rem' }} onClick ={() => {navigateTo(ChampionsCards.id)}}> 
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + ChampionsCards.id + "_0.jpg"}/>
      <Card.Body>
        <Card.Title className='d-flex align-items-center flex-column'>{ChampionsCards.name}</Card.Title>
        <Card.Text>
            <ul>
            <li>Attack : {ChampionsCards.info.attack}</li>
            <li>Defense : {ChampionsCards.info.defense}</li>
            <li>Magic : {ChampionsCards.info.magic}</li>
            <li>Difficulty : {ChampionsCards.info.difficulty}</li>
            </ul>
        </Card.Text>
        <Button className='d-flex justify-content-center flex-column' variant="warning">Voir détails</Button>
      </Card.Body>
    </Card>
  );
}

export default ChampionsCards;