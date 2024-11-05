import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemsCards from "../Components/ItemsCard";

const ItemsPage = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});


    const fetchItemschampions = async () => {
        try {
            const response = await ChampionsServices.GetItemsChampions(id);
            console.log(response.data.data);
            setItems(response.data.data);

        } catch (error) {
            console.error("Erreur lors de la récupération du champion :", error.response ? error.response.data : error.message);

        }
    };

    useEffect(() => {
     fetchItemschampions();
    }, []);

    return <>
       <Container className="home-page">
            <h1 className="m-5">All Items</h1>
            <div className="d-flex justify-content-center flex-wrap gap-5">
                {Object.entries(items).map((item) => {
                    return (
                        <ItemsCards ItemsCards={item[1]} key={item[1].id}/>
                    );
                })}
            </div>
        </Container>
    
    </>

}
 
export default ItemsPage;