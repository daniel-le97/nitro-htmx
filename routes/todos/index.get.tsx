


import { TodoList } from "../../utils/components/Todos.tsx";
import { elements } from "../../utils/elements.ts";


export default defineEventHandler(async(event) => {
    const data = await db.select().from(todos).all();
    return <TodoList todos={data} />
})