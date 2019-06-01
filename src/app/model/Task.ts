export interface Task {
  _id?: { ObjectId: string };
  name: string;
  created: string;
  end?: string;
  isDone: boolean;
}
