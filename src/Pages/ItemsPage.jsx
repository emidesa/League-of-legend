import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";
import itemService from "../Services/itemService";

const ItemsPage = () => {
    const [items, setItems] = useState({});

    const fetchItems = async () => {
        try {
            const response = await itemService.getAllItems();
            setItems(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchItems();
    }, [])

    return  <Container className="d-flex flex-column align-items-center">
        <h1>Items :</h1>
        <div className="d-flex flex-wrap gap-5">
            {Object.entries(items).map((item) => {
                return <ItemCard itemCard={item[1]} key={item[0]} />
            })}
        </div>
        
    </Container>;
}
 
export default ItemsPage;