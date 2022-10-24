export interface Harvests {
  harvests: Harvest[];
  count: number;
}

export interface Harvest {
  id: string;
  grower: Client;
  farm: Farm;
  client: Client;
  commodity: Commodity;
  variety: Commodity;
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

export interface Commodity {
  id: string;
  name: string;
}

export interface Farm {
  id: string;
  name: string;
  address: string;
}
