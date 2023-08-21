// import { TodoItem } from "../../utils/components/Todos.tsx";
import TodoItem from "../../utils/TodosItem.ts";
import { insertTodos, todos } from "../../utils/db/schema.ts";
import { elements } from "../../utils/elements.ts";

export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, insertTodos.parse )
    const newTodo = await db.insert(todos).values({content:body.content}).returning().get();
    return  <TodoItem {...newTodo} />;
})