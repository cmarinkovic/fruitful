import React, { PropsWithChildren } from "react";

import Accordion from "./Accordion";

// TODO: Refactor to decrease complexity
export default function DataTable({ data }: any) {
  const TableHead = () => {
    const TableHeader = ({ children }: PropsWithChildren) => {
      return (
        <th scope="col" className="py-3 px-6">
          <div className="flex items-center">{children}</div>
        </th>
      );
    };

    return (
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {data[0] &&
            Object.keys(data[0]).map((key) => (
              <TableHeader key={key}>{key}</TableHeader>
            ))}
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    const TableRow = ({ children }: PropsWithChildren) => {
      return <tr className="bg-white border-b ">{children}</tr>;
    };

    const ItemProperty = ({ children }: PropsWithChildren) => {
      return <td className="py-4 px-6">{children}</td>;
    };

    return (
      <tbody>
        {data.map((item: any) => {
          return (
            <TableRow key={item.id}>
              {Object.keys(item).map((key) => (
                <ItemProperty key={key}>
                  {"object" === typeof item[key] && (
                    <Accordion items={[item[key]].flat()}>
                      <DataTable data={[item[key]].flat()} />
                    </Accordion>
                  )}

                  {"string" === typeof item[key] && item[key]}
                </ItemProperty>
              ))}
            </TableRow>
          );
        })}
      </tbody>
    );
  };

  return (
    <div className="w-fit mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-fit text-sm text-left text-gray-800">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}
