App web desarrollada con el framework de react Next.js.
Además, se han utilizado diferentes dependencias como Module Federation, NextAuth, Tailwind para un diseño más sencillo.
Demostración de Test Realizados con Cypress

Build

npm run build

start

npm run dev

Web architecture:

An Index file that allows you to authenticate through GitHub or Google. When the authentication has been carried out we have a menu with three components:
A Home with news (post route/{id}) and two other menus that allow you to make a call to the Spain electrical network API, where there are two tables of renewable or non-renewable energy generation and two graphs with the same content.

The third tab allows you to read, delete, edit and enter notes in a Google Firestore database. The fourth button allows you to disconnect from the user and the fifth button allows you to change the theme

En cuanto a como está montada la aplicación:
contamos con la carpeta página que es la base por donde se va a mover toda la aplicación, además de las páginas de noticias (pages/[id]). La carpeta components donde encontraremos diferentes utils como las llamadas, el formato de fechas..., una carpeta de layouts donde tenemos el login y el dashboard propiamente dicha. y en la carpeca views, podremos ver las diferentes vistas.
