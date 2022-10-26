import React, { useContext, useEffect } from "react";

import {
  Formik,
  Form,
  useField,
  useFormikContext,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";

import useAxios from "../hooks/useAxios";
import * as example from "../utils/exampleData";

import Button, { ButtonProps } from "./Button";
import Options from "./Options";

import { Growers } from "../interfaces/Growers";
import { Clients } from "../interfaces/Clients";
import { Commodities } from "../interfaces/Commodities";

import Alert from "./Alert";
import { ModalsContext } from "../contexts/ModalsContext";
import Spinner from "./Spinner";
import { ExampleContext } from "../contexts/ExampleContext";

interface Values {
  growerId: string;
  farmId: string;
  clientId: string;
  commodityId: string;
  varietyId: string;
}

export default function HarvestForm() {
  /* ------------------------------- Data { data, errorMessage, isLoading, payload, setPayload, makeRequest } ------------------------------- */
  const [exampleState] = useContext(ExampleContext);

  const {
    data: growersData,
    errorMessage: growersErrorMessage,
    makeRequest: getGrowers,
  } = useAxios<Growers, any>("/growers", "get");

  const {
    data: clientsData,
    errorMessage: clientsErrorMessage,
    makeRequest: getClients,
  } = useAxios<Clients, any>("/clients", "get");

  const {
    data: commoditiesData,
    errorMessage: commoditiesErrorMessage,
    makeRequest: getCommodities,
  } = useAxios<Commodities, any>("/commodities", "get");

  const {
    data: postResponse,
    errorMessage: postErrorMessage,
    makeRequest: postHarvest,
    isLoading: isPostLoading,
  } = useAxios<any, Values>("/harvests", "post");

  useEffect(() => {
    if (exampleState.isExample) return;

    getGrowers();
    getClients();
    getCommodities();
  }, [exampleState.isExample]);

  const handleSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    if (exampleState.isExample) return;

    postHarvest(JSON.stringify(values));

    if (!postErrorMessage) actions.resetForm();
  };

  /* -------------------------------------------------------------------------- */

  /* ------------------------------- Modal buttons and state ------------------------------ */

  const [modalsState, setModalsState] = useContext(ModalsContext);

  const closeModal = () => {
    setModalsState(() => ({ ...modalsState, isHarvestsOpen: false }));
  };

  const CancelButton = ({ onClick }: ButtonProps) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="text-gray-500 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 shadow-md shadow-gray-600/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Cancel
      </button>
    );
  };

  /* -------------------------------------------------------------------------- */

  const CustomField = (props: any) => {
    const {
      values: { growerId, commodityId },
      setFieldValue,
    } = useFormikContext<Values>();

    const [field, meta] = useField(props);

    return (
      <>
        <select className={selectClasses} {...props} {...field}>
          <option value=""></option>
          <Options
            name={props.name}
            growerId={growerId}
            commodityId={commodityId}
            growersData={
              exampleState.isExample ? example.growersData : growersData
            }
            clientsData={
              exampleState.isExample ? example.clientsData : clientsData
            }
            commoditiesData={
              exampleState.isExample ? example.commoditiesData : commoditiesData
            }
          />
        </select>
        {!!meta.touched && !!meta.error && (
          <div className="text-red-700">{meta.error}</div>
        )}
      </>
    );
  };

  const initialValues = {
    growerId: "",
    farmId: "",
    clientId: "",
    commodityId: "",
    varietyId: "",
  };

  const labelClasses =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400";

  const selectClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        growerId: Yup.string().required("Required"),
        farmId: Yup.string().required("Required"),
        clientId: Yup.string().required("Required"),
        commodityId: Yup.string().required("Required"),
        varietyId: Yup.string().required("Required"),
      })}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      <div>
        {postErrorMessage && (
          <Alert alertType="error" message={postErrorMessage} />
        )}

        {isPostLoading && <Spinner />}

        {postResponse && postResponse.harvest && (
          <Alert alertType="info" message="Harvest added successfully!" />
        )}

        <Form>
          <label className={labelClasses} htmlFor="growerId">
            Grower ID
          </label>
          <CustomField as="select" name="growerId" className={selectClasses} />
          {growersErrorMessage && (
            <Alert alertType="error" message={growersErrorMessage} />
          )}

          <label className={labelClasses} htmlFor="farmId">
            Farm ID
          </label>
          <CustomField as="select" name="farmId" className={selectClasses} />

          <label className={labelClasses} htmlFor="clientId">
            Client ID
          </label>
          <CustomField as="select" name="clientId" className={selectClasses} />
          {clientsErrorMessage && (
            <Alert alertType="error" message={clientsErrorMessage} />
          )}

          <label className={labelClasses} htmlFor="commodityId">
            Commodity ID
          </label>
          <CustomField
            as="select"
            name="commodityId"
            className={selectClasses}
          />
          {commoditiesErrorMessage && (
            <Alert alertType="error" message={commoditiesErrorMessage} />
          )}

          <label className={labelClasses} htmlFor="varietyd">
            Variety ID
          </label>
          <CustomField as="select" name="varietyId" className={selectClasses} />

          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 ">
            <Button type="submit">Submit</Button>
            <CancelButton onClick={closeModal} />
          </div>
        </Form>
      </div>
    </Formik>
  );
}
