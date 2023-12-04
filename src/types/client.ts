export interface ClientParams {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  image_url: string | null;
  birth_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface ClientsResponse {
  clients: ClientParams[];
}
