export interface Author {
  id: number;
  attributes: {
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
