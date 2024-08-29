# VirtueVault

A dynamic website created to [these project specifications](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) from the Odin Project's Javascript path.

## Sources of Inspiration

The name **VirtueVault** was one of the many name ideas ChatGPT gave me, and it sounded quite original, so I adopted it. It evoked this idea of perfectly-preserved, timeless wisdom and moral goodness. And the question of what that would practically look like on the "World Wide Web" is what guided me when I was making design decisions.

In regards to the design, I wanted it to be reminiscent of an early 2000s website. This is especially evident in the minimalism, the serif font, and the shades of blue, red, and purple used for the hyperlinks. I also merged that with a pirate-y feeling (with the light sea-green background, and the chat-bubbles that look like parchment paper) because I thought it exploratory and liberatingly unmodernized.

## Technical Details: Model-View-Controller Architecture

### Model

**directory**: `/models`

I used an array of objects (each conforming to a TypeScript interface) as my pretend "database". However, because I only export functions from the module responsible for this, I can easily migrate to a real database (by only modifying the functions within the module, and not having to modify every place in the codebase where data storage/retrieval is needed).

This shows the _Dependency Inversion_ design principle. It's a must for a maintainable codebase!

I tested my functions with Jest.

### View

**directory**: `/views`
I used the **EJS** template engine because of how intuitive and HTML-like it is.

### Controller

**file**: `/index.ts`
I used **Express JS** as my framework. By controller I mean any middleware which receives a request, performs operations on the model (using the aforementioned functions), delegates rendering to the view engine, and sends HTML as a response (thus ending the request-response cycle).

## Possible Future Upgrades

- Migrating to a real database solution.
- Implementing user account creation, user sign-in, session management, et cetera, to allow users to edit and delete messages that they wrote.
- Use of websocket protocol to make the application real time.
