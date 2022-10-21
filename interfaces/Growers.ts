export interface Growers {
  name:     string;
  lastName: string;
  email:    string;
  farms:    Farm[];
}

export interface Farm {
  name:    string;
  address: string;
}
