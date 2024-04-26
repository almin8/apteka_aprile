export interface VehicleTypes {
  IsPrimary: boolean;
  Name: string;
}

export interface Cars {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: VehicleTypes[];
}

export interface State {
  cars: Cars[];
  chooseComponent: boolean;
  showModal: boolean;
  modalData: Cars | null;
}

export interface ManufactureData {
  Count: number;
  Message: string;
  Results: Cars[];
}
