import {
  signalStore,
  withState,
  withMethods,
  patchState,
} from '@ngrx/signals';
import { Task } from '../../../core/models/task.model';

let idCounter = 1;

export const taskStore = new (signalStore(
    withState({ tasks: [] as Task[] }),
    withMethods((store) => ({
        add(task: Omit<Task, 'id' | 'createdAt'>) {
            patchState(store, (state) => ({
                tasks: [
                    ...state.tasks,
                    {
                        ...task,
                        id: idCounter++,
                        createdAt: new Date(),
                    },
                ],
            }));
        },

        update(updatedTask: Task) {
            patchState(store, (state) => ({
                tasks: state.tasks.map((t) => t.id === updatedTask.id ? updatedTask : t
                ),
            }));
        },

        delete(id: number) {
            patchState(store, (state) => ({
                tasks: state.tasks.filter((t) => t.id !== id),
            }));
        },
    }))
))();  
