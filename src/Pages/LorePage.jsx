import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import { useParams } from "react-router-dom";

const LorePage = () => {
    const { id } = useParams();
    const [champion, setChampion] = useState();

    const fetchChampionById = async () => {
        try {
            const response = await ChampionsServices.GetALLChampionsById(id);
            console.log(response);
            setChampion(Object.entries(response.data.data)[0][1]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchChampionById();
    }, [id]);

    if (!champion) return <div>Loading...</div>; // Ajout d'un état de chargement

    return (
        <div className="lore-container">
            <div className="lore-background">
                <img
                    src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_0.jpg"}
                    alt={"Image du champion"}
                />
            </div>
            <div className="lore-content">
                <h1>Lore of {champion.name}</h1>
                <p className="m-5 bold">{champion.blurb}</p>
            </div>
        </div>
    );
};

export default LorePage;
