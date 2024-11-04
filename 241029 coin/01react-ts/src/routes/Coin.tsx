import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.header`
  font-size: 32px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Overview = styled.div`
  width: 600px;
  color: ${(props) => props.theme.bgColor};
  background: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Description = styled.div`
  width: 600px;
  padding: 10px 20px;
  text-align: center;
  background: ${(props) => props.theme.accentColor};
  margin-bottom: 10px;
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LocationState;
  // 타입 단언 || 만약 해주지 않았다면 any
  const { coinId } = useParams<RouterParams | any>();
  // 서로소 유니온타입 | any로 일단 취급함
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      console.log(infoData);
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state ? state : loading ? "Loading" : info?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Overview>
          <OverviewItem>
            <span>Rank : </span>
            <span>{info?.rank}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Symbol : </span>
            <span>{info?.symbol}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Open Source : </span>
            <span>{info?.is_active ? "Yes" : "No"}</span>
          </OverviewItem>
        </Overview>
      )}
      <Description>
        🌈Information of {info?.type} type : Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Soluta quibusdam voluptate reprehenderit,
        laudantium iure id dolores repellat architecto cum molestias fuga
        explicabo quis, officia eum optio vero eos voluptatem? Magnam!
      </Description>
      <Overview>
        <OverviewItem>
          <span>Total Supply : </span>
          <span>{priceInfo?.total_supply}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Max Supply : </span>
          <span>{priceInfo?.max_supply}</span>
        </OverviewItem>
      </Overview>
    </Container>
  );
};

export default Coin;
