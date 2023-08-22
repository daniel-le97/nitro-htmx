


import { TodoList } from "../../utils/components/Todos.tsx";
import * as elements from 'typed-html'


export default defineEventHandler(async(event) => {
    const data = await db.select().from(todos).all();
    return <TodoList todos={data} />
})