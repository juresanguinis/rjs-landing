This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project File Structure: 
```
|- /public 		-> here goes public files
|- /src			-> main source folder
|-- /app		-> App folder, holds all the routes, error page, not found page, root layout, loading page and the "/" base path where the HeroPage will go.
|--- /about-js		-> About route
|---- page.tsx		-> In all of the routes inside the /app folder the route will contain the page.tsx file and that file will be the page component, ex. AboutPage
|--- /community		
|--- /faq		
|--- /help		
|--- /news
|--- /resources
|--- /tracker
|-- /assets		-> Private project assets folder
|-- /components		-> This folder will hold any component developed for any of the pages sections.
|--- /loader		-> This folder contains all the files needed for the Loader component and an index.tsx file where the main component is exported.
|-- /lib		-> Contains the utility files, middleware functions or utility functions for general use.
|-- /pages-sections	-> This folder contains the sections implemented in the /app folder routes
|--- /error		-> For example the error page in /app will implement the Error.tsx file inside this folder and if any other section is needed for a page, it will be here.
|---- Error.tsx
|-- /types		-> Types folder will hold all interfaces needed through the application.
|--- base.interface.ts	-> The naming pattern is <object>.interface.ts
|-- /utils		-> Utils folder is where constants and API calls are made.
|--- /__api__		-> This folder contains the API files for calls.
|---- data.ts		-> Files here have a name convention of <model>.ts and will export Axios API calls.
|--- axiosInstance.ts	-> This file contains the main Axios instance for all API calls.
|--- /constants		-> This folder contains any constant used through the app, ex. api.constants.ts
|---- index.ts		-> This file exports all constants from the different files in the folder.
|---- aoi.constants.ts	-> This file would contain any constant used for API related things.

```

## WiP:
- Finish News section.
- Finish Tracker app.