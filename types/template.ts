export interface Template {
  queryP: QueryP;
  'Templating example': string;
  users: User[];
  total: string;
}

export interface QueryP {}

export interface User {
  userId: string;
  firstname: string;
  lastname: string;
  friends: Friend[];
}

export interface Friend {
  id: string;
}
