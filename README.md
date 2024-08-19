This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

## The project comprises of:
1. public folder:static files.
2. src folder: containing the app,components,hashElement folder,global css, firebase.tsx file, general layout.tsx, general page.tsx and the toast-ui-editor.d.ts
3. Then under the app folder : we have the admin-dashboard, authentiaction folder with sign-in, sign-up, and admin-login details and authentication.It also has the main page folder with hospital details, then the api folder with the api route. I also created a custom notfound component.
4. components folder: has resusable components like navbar, hero, faq, services, etc.
5. The .env file: contains sensitive app details.
6. /node_modules: Project dependencies.
7. .gitignore: Specifies files to be ignored by Git.
8. package.json: Project metadata and dependencies.
9. README.md: Project documentation.
10. tsconfig.json: TypeScript configuration.



## Some key Features of this application is:
1. Hospital Search: Allows users to search for hospitals within their region.
2. Export Hospitals: Allows users to export the list of hospitals to a CSV file.
3. Share Hospitals: Allows users to share the list of hospitals with others.
4. User Authentication: Requires admin users to create an account to access admin     features.
6. Markdown Support: Allows admin users to write content with markdown.


### These are the technologies Used
Next.js: React framework for server-side rendering and static site generation.
React: JavaScript library for building user interfaces.
TypeScript: Typed superset of JavaScript.
Tailwind css: for inline styling and responsive styling.
Vercel: Deployment platform for modern web applications.
Toast-ui/editor: for markdown support.
papaparse: for csv export and sharing.
Count-up: it the numbers on the landing page a count up functionality.

# Project summary.
The carefinder project begins with a landing page that is divided into different sections, they are: home, about, services, blog, contact and footer. 
The home section offers a brief intro of the project and it has a button that navigates you to the Sign-up page if you have not signed up and sign-in page if you have signed up.
The about section breaks down the actions that can be carried out in the application such as search, export, share, markdown support for admin etc
The services sections shows the services that are availed to you when you sign up for carefinder
The blog section shows notable articles written by carefinder admin
The contact section allows you make appoints using carefinder to enjoy their services, it also has possible questions people might have about carefinder in the Faq section with possible answers.
The footer section has social media links, section breakdown and address and number for carefinder among other things.

Using the navbar on the landing page you can smoothly scroll to any of the above mentioned sections and clicking on the admin portal button allows you navigate to the admin login page, when logged in as a admin, you can use admin features such as the markdown support that allows you make hospital entries, add images, links etc and save them in the firebase firestore using the save button.

After signing up, you are naviagted to the sign in page, when you sign in then you can access the hospital list page, on the hospitals page, there is a back to home button allowing you to navigate back to the landing page and a sign out button that allows you sign out and return to the landing page, underneath it is a heading and a brief intro, then we have the search bar that allows you search for hospitals based on location, by simply typing in your location. Below the search bar there is a display of the hospitals, you can navigate through the hospitals using the pagination button at the bottom, you can export your list of hospitals using the export button and share your export using your share button. 
This is the carefinder application in a nutshell!
