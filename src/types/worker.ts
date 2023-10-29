interface worker {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  job: string;
  instagram: string;
  createdAt: string;
  imageUrl: string;
  categories: {
    id: number;
    name: string;
  }[];
}

interface workersResponse {
  workers: worker[];
}
