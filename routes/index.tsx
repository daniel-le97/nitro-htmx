import * as elements from  'typed-html'
import { TodoList } from '../utils/components/Todos.tsx';




const BaseHtml = ( { children }: elements.Children ) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THE BETH STACK</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <script src="https://cdn.twind.style" crossorigin></script>
  </head>
  ${ children }
  </html>
  `;
  // <link href="/styles.css" rel="stylesheet">


// if you are going to return html, please import elements from utils or  import * as elements from "typed-html"
export default defineEventHandler( async() => {
  const data = await db.select().from(todos).all();
  const GetTodos = () => <TodoList todos={data} />
  
  return (
    <BaseHtml>
      <body class='flex w-full h-screen justify-center items-center'>
      <GetTodos/>
      </body>
    </BaseHtml> );
} );
