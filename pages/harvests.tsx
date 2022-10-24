import { useContext, useEffect } from "react";
import type { NextPage } from "next";

import { ModalsContext } from "../contexts/ModalsContext";
import { ExampleContext } from "../contexts/ExampleContext";

import DataTable from "../components/DataTable";
import Title from "../components/Title";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";
import Button from "../components/Button";
import AddModal from "../components/AddModal";
import { HarvestForm } from "../components/HarvestForm";

import useAxios from "../hooks/useAxios";
import * as example from "../utils/exampleData";

import { Harvests } from "../interfaces/Harvests";
import Head from "next/head";

const Harvests: NextPage = () => {
  const { data, errorMessage, isLoading, makeRequest } = useAxios<Harvests>(
    "/harvests",
    "get"
  );

  const [modalsState, setModalsState] = useContext(ModalsContext);
  const [exampleState] = useContext(ExampleContext);

  useEffect(() => {
    if (exampleState.isExample) return;
    makeRequest();
  }, [exampleState.isExample]);

  const openModal = () => {
    setModalsState(() => ({ ...modalsState, isHarvestsOpen: true }));
  };

  return (
    <div className="container">
      <Head>
        <title>Fruitful - Harvests</title>
      </Head>

      <Title>Harvests</Title>

      <div className="container">
        <Button onClick={openModal}>Add</Button>

        {exampleState.isExample && errorMessage && (
          <Alert alertType="error" message={errorMessage} />
        )}

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {data && !exampleState.isExample && (
              <DataTable data={data.harvests} />
            )}
            {example.harvestsData && exampleState.isExample && (
              <DataTable data={example.harvestsData.harvests} />
            )}
          </>
        )}
      </div>

      {modalsState.isHarvestsOpen && (
        <AddModal title="Harvest">
          <HarvestForm />
        </AddModal>
      )}
    </div>
  );
};

export default Harvests;
