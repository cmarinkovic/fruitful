export interface Growers {
  growers: Grower[];
  count: number;
}

export interface Grower {
  id: string;
  name: string;
  lastName: string;
  email: string;
  farms: Farm[];
}

export interface Farm {
  id: string;
  name: string;
  address: string;
}
