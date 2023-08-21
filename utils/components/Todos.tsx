import * as elements from 'typed-html'
import { Todo } from '../db/schema.ts';
function TodoForm() {
    return (
      <form
        class="flex flex-row space-x-3"
        hx-post="/todos"
        hx-swap="beforebegin"
        _="on submit target.reset()"
      >
        <input type="text" name="content" class="border border-black" />
        <button type="submit">Add</button>
      </form>
    );
  }
  
  export function TodoItem({ content, completed, id }: Todo) {
    return (
      <div class="flex flex-row space-x-3">
        <p>{content}</p>
        <input
          type="checkbox"
          checked={completed}
          hx-post={`/todos/toggle/${id}`}
          hx-swap="outerHTML"
          hx-target="closest div"
          />
        <button
          class="text-red-500"
          hx-delete={`/todos/${id}`}
          hx-swap="outerHTML"
          hx-target="closest div"
          >
          X
        </button>
      </div>
    );
  }
  export function TodoList({ todos }: { todos: Todo[] }) {
    return (
      <div>
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
        <TodoForm />
      </div>
    );
  }
