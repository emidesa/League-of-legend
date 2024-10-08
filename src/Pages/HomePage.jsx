import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import ChampionsCards from "../Components/ChampionsCards";
import { Container, Pagination } from "react-bootstrap";



const HomePage = () => {
   
    const[Champions,setChampions] = useState({});
 
   

    const fetchChampions = async () => {
        try {
            const response = await ChampionsServices.GetALLChampions();
            setChampions(response.data.data);
        
            console.log(response.data.data);
           
        } catch (error) {
          console.log(error);
        }
    } 

    useEffect(() =>
    {
        fetchChampions();
    }, []);

    return <Container className="d-flex flex-column align-items-center">
    <h1>All Champions</h1>
    <div className="d-flex justify-content-center flex-wrap gap-5">
    {Object.entries(Champions).map((Champion) => {
        return <ChampionsCards  ChampionsCards={Champion[1]} key={Champion[1].id}/>

    })}

</div>
  </Container>
}
 
export default HomePage;
