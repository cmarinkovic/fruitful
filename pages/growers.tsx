import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { ExampleContext } from "../contexts/ExampleContext";

import DataTable from "../components/DataTable";
import Title from "../components/Title";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";

import useAxios from "../hooks/useAxios";
import * as example from "../utils/exampleData";

import { Growers } from "../interfaces/Growers";

function Growers() {
  const { data, errorMessage, isLoading, makeRequest } = useAxios<Growers, any>(
    "/growers",
    "get"
  );

  const [exampleState] = useContext(ExampleContext);

  useEffect(() => {
    if (exampleState.isExample) return;
    makeRequest();
  }, [exampleState.isExample]);

  return (
    <div className="container">
      <Head>
        <title>Fruitful - Growers</title>
      </Head>

      <Title>Growers</Title>

      {!exampleState.isExample && errorMessage && (
        <Alert alertType="error" message={errorMessage} />
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data && !exampleState.isExample && <DataTable data={data.growers} />}
          {example.growersData && exampleState.isExample && (
            <DataTable data={example.growersData.growers} />
          )}
        </>
      )}
    </div>
  );
}

export default Growers;
