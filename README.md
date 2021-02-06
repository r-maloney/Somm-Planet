# Somm-Planet
A clone of the popular 'destination' website, Lonely Planet, but instead of destinations, Somm Planet is focused on wines and wine regions. 


To run this application locally, you'll need to:
Clone the repo
git clone https://github.com/r-maloney/Somm-Planet

cd into the backend
cd backend

Install NPM packages
npm install

return to the root
cd ..

cd into the frontend
cd backend

Install NPM packages
npm install

Create a .env file based on the .env.example file included in the repo with your own values

Create a user on your local machine with the username and password specified in your .env file in PostgreSQL

Create the database

npx dotenv sequelize db:create

Run the migrations
npx dotenv sequelize db:migrate

Seed the database
npx dotenv sequelize db:seed:all

Finally, start the development server with npm start. The scripts in the package.json should do the work. You'll see the local address you can use show up in the terminal.
** using two terminals, make sure to start both the frontend and backend with npm

npm start
