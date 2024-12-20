import { useEffect, useState } from "react";
import itemService from "../Services/itemService";
import SummonerCard from"../Components/SummonerCard";
import { Container } from "react-bootstrap";


const SummonerPage = () => {

    const [Summoner , setSummoner] = useState({}) ;

    const fetchSummoners = async () => {
        try {
            const response = await itemService.getAllSummoner();
            setSummoner(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchSummoners();
    }, [])

    return<>
    <Container className="home-page">
    {Object.entries(Summoner).map((Sum) =>{
    
        return <SummonerCard Sum = {Sum[1]} key={Sum[1].id}></SummonerCard>
     })}</Container>
</>
}
export default SummonerPage;






