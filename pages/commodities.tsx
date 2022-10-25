import { useContext, useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import DataTable from "../components/DataTable";
import Title from "../components/Title";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";

import useAxios from "../hooks/useAxios";
import * as example from "../utils/exampleData";

import { Commodities } from "../interfaces/Commodities";
import { ExampleContext } from "../contexts/ExampleContext";

function Commodities() {
  const { data, errorMessage, isLoading, makeRequest } = useAxios<
    Commodities,
    any
  >("/commodities", "get");

  const [exampleState] = useContext(ExampleContext);

  useEffect(() => {
    if (exampleState.isExample) return;
    exampleState.isExample;
    makeRequest();
  }, [exampleState.isExample]);

  return (
    <div className="container">
      <Head>
        <title>Fruitful - Commodities</title>
      </Head>

      <Title>Commodities</Title>

      {!exampleState.isExample && errorMessage && (
        <Alert alertType="error" message={errorMessage} />
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data && !exampleState.isExample && (
            <DataTable data={data.commodities} />
          )}
          {example.commoditiesData && exampleState.isExample && (
            <DataTable data={example.commoditiesData.commodities} />
          )}
        </>
      )}
    </div>
  );
}

export default Commodities;
