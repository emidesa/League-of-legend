import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import { useParams } from "react-router-dom";


const LorePage = () => {

    const {id} = useParams();
    const [champions, setChampions] = useState ({})

    const fetchChampionsById= async () => {
        try {
            const response = await ChampionsServices.GetALLChampionsById(id);
            setChampions(Object.entries(response.data.data)[0][1]);
           
        } catch (error) {
          console.log(error);
        }
    }
    
    
    useEffect(() => {
       fetchChampionsById()
    }, [])
    
    console.log();

    
    return <>
    <div className="d-flex align-items-center flex-column mb-5">
    <h1> Lore of {id}</h1>
    <img 
                style={{ width: '60rem' }}
                src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champions.id + "_0.jpg"}
                alt={"Image du champion"}
            />
       
    <p className="m-5 bold">{champions.blurb}</p>
    </div>
    </>;
}
 
export default LorePage;