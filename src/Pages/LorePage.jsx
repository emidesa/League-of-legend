import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import { useParams } from "react-router-dom";

const LorePage = () => {
    const { id } = useParams();
    const [champion, setChampion] = useState(null);

    const fetchChampionById = async () => {
        try {
            const response = await ChampionsServices.GetALLChampionsById(id);
            console.log(response);

            setChampion(Object.entries(response.data.data)[0][1]);
        } catch (error) {
            console.error("Erreur lors de la récupération du champion :", error.response ? error.response.data : error.message);

        }
    };

    useEffect(() => {
        fetchChampionById();
    }, []);

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
                <h1>Lore of {id}</h1>
                <p className="m-5 bold">{champion.lore}</p>
                <h2 className="m-2">conseil pour les alliés</h2>
                <ul> {champion.allytips && champion.allytips.map((tip) => {
                    return <li key={tip}>{tip}</li>
                })}</ul>
                <h2 className="m-2 bold">conseil pour les ennemies</h2>
                <ul> {champion.enemytips && champion.enemytips.map((tip) => {
                    return <li key={tip}>{tip}</li>
                })}</ul>
            </div>
        </div>
    );
};

export default LorePage;
