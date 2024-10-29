import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.header`
  font-size: 32px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const CoinList = styled.ul`
  width: 880px;
`;

const Coin = styled.li`
  width: 100%;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    /* Link */
    display: flex;
    align-items: center;
    color: inherit;
    transition: color 0.3s;
    margin: 0px 20px;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 35px;
  height: auto;
  margin: 0px 30px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  type: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  // 어떤 값이 들어올지 미정인 경우 제네릭
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/Divjason/coinlist/coins"
      );
      const json = await response.json();
      console.log(json);
      setCoins(json.slice(0, 101));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coin List</Title>
      </Header>
      {loading ? (
        <Loader>"Loading!"</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                🏅 Now Rank: {coin.rank}
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} Information
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
