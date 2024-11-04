import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

const Container = styled.div`
  margin-top: 10px;
`;

interface coinHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface Example {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<coinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  const chartData = Array.isArray(data) && data.length > 0 ? data : [];

  return (
    <Container>
      {isLoading ? (
        "Loading Chart..."
      ) : chartData.length > 0 ? (
        <ApexChart
          width={600}
          type="line"
          series={[
            {
              name: "Price",
              data:
                chartData?.map((price) => parseFloat(price.time_close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: true,
              },
              background: "transparent",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
              },
              categories: chartData.map((price) =>
                new Date(price.time_close * 1000).toLocaleDateString()
              ),
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                },
                formatter: (value) => value.toFixed(3),
              },
            },
            colors: ["#ffeaa7"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#a29bfe"],
                stops: [0, 100],
              },
            },
          }}
        />
      ) : (
        "No Data available .. Please wait"
      )}
    </Container>
  );
};

export default Chart;
