import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const SumDetailsPage = () => {
     const location = useLocation();
    const currentSum = location.state.sum;

    console.log(currentSum);  
    
    return <>

     <Container className="home-page">
        <h1>{currentSum.name}</h1>
        <img src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/"+currentSum.image.full} alt="" />
        <p>{currentSum.description}</p>
        <div className="d-flex gap-3">
            {currentSum.into && currentSum.into.map((obj) => {
                return <img key={obj} src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/"+obj} alt="" />
            })}
        </div>
       
    </Container>;

    </>;
}
 
export default SumDetailsPage ; 

