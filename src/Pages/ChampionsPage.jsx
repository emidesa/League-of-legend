import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import ChampionsCards from "../Components/ChampionsCards";
import { Container } from "react-bootstrap";

const ChampionsPage = () => {
    const [Champions, setChampions] = useState({});

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

    return (
        <Container className="home-page">
            <h1 className="m-5">All Champions</h1>
            <div className="d-flex justify-content-center flex-wrap gap-5">
                {Object.entries(Champions).map((Champion) => {
                    return (
                        <ChampionsCards ChampionsCards={Champion[1]} key={Champion[1].id} />
                    );
                })}
            </div>
        </Container>
    );
};

export default ChampionsPage;


