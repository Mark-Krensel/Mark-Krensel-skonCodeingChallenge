import styled from "styled-components";
import { useEffect, useState } from "react";
import Tablerow from "../components/Tablerow";

export default function HomePage({ onCreateUser }) {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("objekte.json");
      const result = await response.json();
      console.log(result);
      setProductData(result);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Home page</h1>
      <StyledTable>
        <thead>
          <tr>
            <th colSpan="2">Best Products with best prices</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <Tablerow
              key={product.id}
              type={product.type}
              price={product.price}
              promotionPrice={product.promotionPrice}
              id={product.id}
            />
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px 0;
`;

const StyledTable = styled.table`
  border: 1px solid black;
`;
