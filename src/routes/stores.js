import { writable } from "svelte/store";

export const tasks = writable([
    {
        folder: 'Work',
        name: 'Finish project proposal',
        due: new Date('2023-06-06T09:00:00')
    },
    {
        folder: 'Personal',
        name: 'Buy groceries',
        due: new Date('2023-06-05T18:00:00')
    },
    {
        folder: 'Home',
        name: 'Clean the living room',
        due: new Date('2023-06-07T15:30:00')
    },
    {
        folder: 'Work',
        name: 'Prepare presentation slides',
        due: new Date('2023-06-08T13:00:00')
    }
])