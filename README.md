 <h1>APP Web from Asafe</h1>
Web app developed with the Next.js React framework.
Additionally, various dependencies such as Module Federation, NextAuth, and Tailwind have been used for a simpler design.
Demonstration of tests performed with Cypress.
 
<h1>Init</h1>
<h3>Install</h3>
<code>npm i
</code>

<h3>Build</h3>
<code>npm run build
</code>

<h3>run</h3>
<code>npm run dev
</code>

   <h2>Web Architecture</h2>
    <p>The application is structured as follows:</p>
 <p>An Index file that allows you to authenticate through GitHub or Google. When the authentication has been carried out we have a menu with three components:
A Home with news (post route/{id}) and two other menus that allow you to make a call to the Spain electrical network API, where there are two tables of renewable or non-renewable energy generation and two graphs with the same content.
</p>

<p>The third tab allows you to read, delete, edit and enter notes in a Google Firestore database. The fourth button allows you to disconnect from the user and the fifth button allows you to change the theme</p>

<p>Regarding how the application is set up:
We have the page folder which is the base where the entire application will move, in addition to the news pages (pages/[id]). The components folder where we will find different utilities such as calls, date format..., a designs folder where we have the login and the dashboard itself. and in the views folder, we can see the different views.</p>
