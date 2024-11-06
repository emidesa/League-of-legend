import { Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";
import itemService from "../Services/itemService";

const ItemsPage = () => {
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value);
    }

    const fetchItems = async () => {
        try {
            const response = await itemService.getAllItems();
           

             const res = Object.entries(response.data.data);
            res.sort((a,b) => {
                return a[1].name.localeCompare(b[1].name);
            }) 
            // response.data.date.sort((a,b) => a.name.localecompare(b.firstname))
            setItems(res);
            setFilteredItems(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchItems();
    }, [])

    useEffect(() => {
    setFilteredItems(items.filter((item) => {
            return item[1].name.toLowerCase().includes(searchValue.toLowerCase());
        }))
    }, [searchValue])

    return  <Container className="home-page">
        <h1>Items :</h1>
        <Form className="col-6 justify-content-center ">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Recherche ton Item</Form.Label>
        <Form.Control type="text" placeholder="exemple : Bottes" value={searchValue} onChange={handleChange}/>
      </Form.Group>
    </Form>
  
        <div className="d-flex flex-wrap gap-5 justify-content-center m-5">
            {filteredItems.map((item) => {
                return <ItemCard itemCard={item[1]} key={item[0]} />
            })}
        </div>
        
    </Container>;
}
 
export default ItemsPage;