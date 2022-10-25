import { useEffect, useState } from "react";

import { Commodities, Commodity } from "../interfaces/Commodities";
import { Grower, Growers } from "../interfaces/Growers";
import { Clients } from "../interfaces/Clients";

interface OptionsProps {
  name: string;
  growerId: string;
  commodityId: string;
  commoditiesData: Commodities | undefined;
  growersData: Growers | undefined;
  clientsData: Clients | undefined;
}

export default function Options({
  name,
  growerId,
  commodityId,
  commoditiesData,
  clientsData,
  growersData,
}: OptionsProps) {
  const [optionsData, setOptionsData] = useState<any>();

  const filterData = (data: any, keys: string[]) => {
    if (!data) return;

    return data.map((item: any) => {
      const itemObj: any = {};

      keys.forEach((key) => {
        itemObj[key] = item[key];
      });

      return itemObj;
    });
  };

  useEffect(() => {
    if (!growersData || !clientsData || !commoditiesData) return;

    switch (name) {
      case "growerId":
        setOptionsData(
          filterData(growersData.growers, ["id", "name", "lastName"])
        );

        break;
      case "farmId":
        const grower: Grower | undefined = growersData.growers.find(
          (grower) => grower.id === growerId
        );

        if (!grower) return;

        setOptionsData(filterData(grower.farms, ["id", "name"]));
        break;
      case "clientId":
        setOptionsData(
          filterData(clientsData.clients, ["id", "name", "lastName"])
        );
        break;
      case "commodityId":
        setOptionsData(filterData(commoditiesData.commodities, ["id", "name"]));
        break;
      case "varietyId":
        const commodity: Commodity | undefined =
          commoditiesData.commodities.find(
            (commodity) => commodity.id === commodityId
          );

        if (!commodity) return;

        setOptionsData(filterData(commodity.varieties, ["id", "name"]));
        break;
    }
  }, [name, growerId, commodityId, growersData, clientsData, commoditiesData]);

  return (
    <>
      {optionsData &&
        optionsData.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name && `${option.name} - `}
            {option.lastName && `${option.lastName} - `}
            {option.id}
          </option>
        ))}
    </>
  );
}
