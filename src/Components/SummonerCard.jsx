import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const SummonerCard = ({ Sum }) => {
    const navigate = useNavigate();

    const navigateTo = (sum) => {
        navigate("/SummonerDetailsPage/"+ sum.id, {state : {sum : sum}})
    
    }

    return (
        <Card style={{ width: '15rem' }} onClick={() => navigateTo(Sum)}>
            <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/" + Sum.image.full} />
            <Card.Body>
                <Card.Title className='d-flex align-items-center flex-column'>{Sum.name}</Card.Title> 
                <Card.Text>
                   
                </Card.Text>
                <Button className='d-flex justify-content-center flex-column' variant="warning">Voir détails</Button>
            </Card.Body>
        </Card>
    );
}

export default SummonerCard;


