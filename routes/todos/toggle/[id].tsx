import { eq } from "drizzle-orm";
import { TodoItem } from "../../../utils/components/Todos.tsx";
import * as elements from 'typed-html'


export default defineEventHandler( async ( event ) => {
    const id = JSON.parse( event.context.params.id ) as number;

    const oldTodo = await db
        .select()
        .from( todos )
        .where( eq( todos.id, id ) )
        .get();

    const newTodo = await db
        .update( todos )
        .set( { completed: !oldTodo.completed } )
        .where( eq( todos.id, id ) )
        .returning()
        .get();

    return <TodoItem { ...newTodo } />;
} );