type TaskStatus = 'Pending' | 'In Progress' | 'Completed';

export interface Task {

  id: number;
  title:string;
  createdAt: Date;
  status: TaskStatus;

}
