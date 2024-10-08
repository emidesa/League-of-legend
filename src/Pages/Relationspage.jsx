import { useEffect, useState } from "react";

const Relationspage = () => {

    const [Champions, setChampions] = useState ([])

    const fetchRelationsById= async () => {
        try {
            const response = await ChampionsServices.GetALLChampionsById(id);
            setMovies(response.data.results);
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
            },50)
        } catch (error) {
          console.log(error);
        }
    }
    
    
    useEffect(() => {
       fetchRelationsById()
    }, [])
    
    console.log(location);

    
    return <>
    <h1>Les relations entre les champions</h1>
    </>;
}
 
export default Relationspage;