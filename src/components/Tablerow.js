import styled from "styled-components";

export default function Tablerow({ id, type, price, promotionPrice }) {
  return (
    <tr id={id}>
      <td>{type}</td>
      {promotionPrice === 0 && <td>{price}</td>}
      {/* {Die Aufgabe war eigentlich anzuzeigen den PromotionPreis nicht anzuzeigen, wenn keiner vorhanden ist,
      allerdings ist ein Preis von 0 vorhanden. Ich habe die Aufgabe abweichend der Aufgabenstellung gelöst und zeige
      keinen Wert an, wenn dieser gleich 0 ist.} */}
      {promotionPrice !== 0 && (
        <PromotionalPrice>{promotionPrice}</PromotionalPrice>
      )}
    </tr>
  );
}
const PromotionalPrice = styled.td`
  color: red;
  font-weight: bold;
`;
