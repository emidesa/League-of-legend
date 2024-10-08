import { useEffect, useState } from "react";

const LorePage = () => {

    const [Champions, setChampions] = useState ([])

    const fetchChampionsById= async () => {
        try {
            const response = await ChampionsServices.GetALLChampionsById(id);
            setChampions(response.data.results);
           
        } catch (error) {
          console.log(error);
        }
    }
    
    
    useEffect(() => {
       fetchChampionsById()
    }, [])
    
    console.log();

    
    return <>
    <h1>Les relations entre les champions</h1>
    </>;
}
 
export default LorePage;