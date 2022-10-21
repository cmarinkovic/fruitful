export interface Commodities {
  commodities: Commodity[];
  count:       number;
}

export interface Commodity {
  id:        string;
  name:      string;
  varieties: Variety[];
}

export interface Variety {
  id:   string;
  name: string;
}
