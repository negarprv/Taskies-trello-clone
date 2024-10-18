export type IdWrapper<T> = {
    id: string;
  } & T;

export interface Cookies {
    user_id?: string; 
}