
export interface BoxProps {
    id : string;
    width: number;
    height: number;
    backgroundColor: string;
    remove: (id: string) => void;
  }

export interface BoxInterface {
    id : string;
    width: number;
    height: number;
    backgroundColor: string;
}

export interface NewFormDataInterface {
    height: string;
    width: string;
    backgroundColor: string;
}