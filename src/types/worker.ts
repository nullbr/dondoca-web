export interface WorkerParams {
  id: number;
  first_name: string;
  last_name: string | null;
  phone_number: string | null;
  job: string;
  instagram: string | null;
  created_at: string;
  updated_at: string;
  image_url: string;
  description: string;
  categories: {
    id: number;
    name: string;
  }[];
}

export interface WorkersResponse {
  workers: WorkerParams[];
}
