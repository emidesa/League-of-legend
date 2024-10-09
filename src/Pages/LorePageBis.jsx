import React from 'react';
import { Container } from 'react-bootstrap';

const LorePageBis = () => {
    return (
        <Container className="lore-page">
            <h1 className="text-center my-4">L'Histoire de Runeterra</h1>
            <p>
                Bienvenue dans l'univers riche et complexe de League of Legends, où chaque champion a une histoire unique et un rôle crucial à jouer dans le monde de Runeterra.
                <br /><br />
                Les champions de League of Legends sont plus que de simples personnages. Chacun d'eux est ancré dans un récit qui s'entrelace avec d'autres, formant une tapisserie d'alliances, de rivalités et de luttes pour le pouvoir.
            </p>
            <h2>Champions Notables</h2>
            <ul>
                <li><strong>Aatrox :</strong> Autrefois un héros, il est devenu un symbole de désespoir et de destruction.</li>
                <li><strong>Ahri :</strong> Une mage rusée qui cherche à comprendre son passé tout en protégeant ceux qu'elle aime.</li>
                <li><strong>Akali :</strong> Une assassin qui lutte pour préserver l'honneur de son clan tout en affrontant des ennemis puissants.</li>
                {/* Ajoute d'autres champions selon ton besoin */}
            </ul>
            <h2>Conflits et Alliances</h2>
            <p>
                Dans le monde de Runeterra, les alliances se forment et se brisent. Les champions doivent naviguer à travers des relations complexes et des rivalités ardentes.
                <br /><br />
                Par exemple, les liens entre Aatrox et ses anciens frères de bataille sont marqués par la trahison, tandis qu'Ahri tente de comprendre sa place dans un monde en constante évolution.
            </p>
        </Container>
    );
};

export default LorePageBis;
