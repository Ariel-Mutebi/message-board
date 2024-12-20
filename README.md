# VirtueVault

A dynamic website created to [these project specifications](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) from the Odin Project's Javascript path.

Live [here](https://message-board-7ebm.onrender.com/).

## Sources of Inspiration

The name **VirtueVault** was one of the many name ideas ChatGPT gave me, and it sounded quite original, so I adopted it. It evoked this idea of perfectly-preserved, timeless wisdom. And the question of what that would practically look like on the "World Wide Web" is what guided me when I was making design decisions.

In regards to the design, I wanted it to be reminiscent of an early 2000s website. This is especially evident in the minimalism, the serif font, and the shades of blue, red, and purple used for the hyperlinks. Also by elements like the light sea-green background and the chat-bubbles that look like parchment paper, I tried to achieve a pirate-y, freeing, uncivilized, exploratory mood.

## Codebase organization: Model-View-Controller Architecture

### Model

**directory**: `/model (db)`

Originally, I used a JavaScript object for data storage. But because my code was SOLID (that's a pun hinting at the design principles acronym 🙂), I easily migrated to a **PostgreSQL** database with the help of the **pg** (node-postgres) library.

### View

**directory**: `/views`
I used the **EJS** template engine because of how intuitive and HTML-like it is.

### Controller

**directories**: `/controllers`, `/middlewares` and `/routes`

I used **Express JS** as my web framework.

Here `controller` means a middleware that ends the request-response cycle. That's usually by doing some operation on the data model (such as reading it) and responding with a HTML file (put together by the view engine).

In this code base, the controllers use high-level abstractions (following on the principle of dependency inversion). I also separated them into different files based on weather they are for `GET` or `POST` requests.

In addition, `/middlewares` contains my custom middleware functions (like validators).

`/routers` contains the app's router. I did not lump together the routing, middlewares, and controllers for better modularity.

## Side notes for Local Development:

**Regarding the runtime**
I love Typescript. Deno loves Typescript. I love Deno.

**On Environment Variables:** In a `.env` file, specify the two:

- PORT
- DATABASE_URL

## Possible Future Upgrades

- Feature for users to edit or delete their messages. (This will likely entail extending the database schema to store user accounts, and also adding web workers for session management. Yikes.)
- Use of websocket protocol to make the application real time. (Switching between `/` and `/new` routes is not too convenient.)
