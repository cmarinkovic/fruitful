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

import { Clients } from "../interfaces/Clients";

const Clients: NextPage = () => {
  const { data, errorMessage, isLoading, makeRequest } = useAxios<Clients, any>(
    "/clients",
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
        <title>Fruitful - Clients</title>
      </Head>

      <Title>Clients</Title>

      {!exampleState.isExample && errorMessage && (
        <Alert alertType="error" message={errorMessage} />
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data && !exampleState.isExample && <DataTable data={data.clients} />}
          {example.clientsData && exampleState.isExample && (
            <DataTable data={example.clientsData.clients} />
          )}
        </>
      )}
    </div>
  );
};

export default Clients;
