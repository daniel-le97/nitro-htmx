import { elements } from "../utils/elements.ts";



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
  `;
  // <link href="/styles.css" rel="stylesheet">


// if you are going to return html, please import elements from utils or  import * as elements from "typed-html"
export default defineEventHandler( () => {
  return (
    <BaseHtml>
      <body
        class="flex w-full h-screen justify-center items-center"
        hx-get="/todos"
        hx-swap="innerHTML"
        hx-trigger="load"
      />
    </BaseHtml> );
} );
