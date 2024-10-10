import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import ChampionsServices from '../Services/ChampionsServices';

const RelationsPage = () => {
    const [champions, setChampions] = useState({});

    useEffect(() => {
        const fetchRelations = async () => {
            try {
                const response = await ChampionsServices.GetRelationChampions();
                console.log(response.data.data)
                setChampions(response.data.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des relations :", error);
            }
        };
        fetchRelations();
    }, []);

    return (
        <Container className='background-relation'>
            <h1 className="text-center m-5">Relations entre les champions</h1>
            <Row className="d-flex justify-content-center">
                {Object.values(champions).map((champion) => (
                    <Col key={champion.id} md={3} className="mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                            />
                            <Card.Body>
                                <Card.Title>{champion.name}</Card.Title>
                                <Card.Text>
                                    <p><strong>Alliés:</strong> {champion.relations?.allies?.length > 0 ? champion.relations.allies.join(", ") : "Aucun"}</p>
                                    <p><strong>Rivaux:</strong> {champion.relations?.rivals?.length > 0 ? champion.relations.rivals.join(", ") : "Aucun"}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RelationsPage;


