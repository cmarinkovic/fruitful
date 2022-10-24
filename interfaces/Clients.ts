export interface Clients {
  clients: Client[];
  count: number;
}

export interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
}
