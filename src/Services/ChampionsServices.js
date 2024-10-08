import axios from "axios";

function GetALLChampions() {
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/champion.json ")

    
}

function GetALLChampionsById(id) {
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/champion/" + id + ".json" )
    
       
}

export default {
    GetALLChampions,
    GetALLChampionsById
}
