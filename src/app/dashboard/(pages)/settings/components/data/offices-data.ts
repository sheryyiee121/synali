export interface IOffice {
  id: string;
  name: string;
  street: string;
  houseNumber: string;
  country: string;
  default: boolean;
  code: string;
  jobs: number;
}

export const offices: IOffice[] = [
  {
    id: "1",
    name: "Waldorf",
    street: "Virgin Islands Street",
    houseNumber: "20695",
    country: "United States",
    code: "US",
    default: true,
    jobs: 0,
  },
  {
    id: "2",
    name: "Springfield",
    street: "Maple Avenue",
    houseNumber: "1450",
    country: "Canada",
    code: "CA",
    default: false,
    jobs: 2,
  },
  {
    id: "3",
    name: "Greenville",
    street: "Oak Road",
    houseNumber: "789",
    country: "United Kingdom",
    code: "UK",
    default: false,
    jobs: 1,
  },
  {
    id: "4",
    name: "Riverton",
    street: "Cedar Lane",
    houseNumber: "3021",
    country: "Australia",
    code: "AU",
    default: false,
    jobs: 3,
  },
];
