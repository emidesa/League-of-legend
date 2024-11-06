import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import ChampionsCards from "../Components/ChampionsCards";
import { Container, Form } from "react-bootstrap";

const ChampionsPage = () => {
    const [champions, setChampions] = useState({});
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value);
    }

    const fetchChampions = async () => {
        try {
            const response = await ChampionsServices.GetALLChampions();
            setChampions(response.data.data);
            console.log(response.data.data); 
        } catch (error) {
            console.log(error);
        } 
    };

    useEffect(() => {
        fetchChampions();
    }, []);

    
    const filteredChampions = Object.entries(champions).filter(([key, champion]) =>
        champion.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <Container className="home-page">
            <h1 className="m-5">All Champions</h1>
            <Form className="col-6 justify-content-center">
                <Form.Group className="mb-3" controlId="searchChampion">
                    <Form.Label>Recherche ton champion</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="exemple : Aatrox"
                        value={searchValue}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center flex-wrap gap-5">
                {filteredChampions.map(([key, champion]) => (
                    <ChampionsCards ChampionsCards={champion} key={champion.id} />
                ))}
            </div>
        </Container>
    );
};

export default ChampionsPage;



