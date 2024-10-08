import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ChampionsCards = ({ChampionsCards}) =>  {

    const navigate = useNavigate ();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + ChampionsCards.id + "_0.jpg"}/>
      <Card.Body>
        <Card.Title className='d-flex align-items-center flex-column'>{ChampionsCards.name}</Card.Title>
        <Card.Text>
            <ul>
            <li>Attaque : {ChampionsCards.info.attack}</li>
            <li>Défense : {ChampionsCards.info.defense}</li>
            <li>Magie : {ChampionsCards.info.magic}</li>
            <li>Difficulté : {ChampionsCards.info.difficulty}</li>
            </ul>
        </Card.Text>
        <Button className='d-flex justify-content-center flex-column' variant="warning">Voir détails</Button>
      </Card.Body>
    </Card>
  );
}

export default ChampionsCards;