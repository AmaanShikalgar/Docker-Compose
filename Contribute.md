## Manual Installation
- Install nodejs locally ()
- clone the repo
- install dependencies 
- Start the db locally ()
  - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres   
  - Go to neon.tech and get yourself a new DB
- Change the .env file and update your DB credentials
- Npx prisma migrate
- npx prisma generate
- npm run build
- npm run start 

## Docker Installation
- Instal Docker
- Start postgres
   - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres   
- Build the image - 'docker build -t user-project .'
- Start the image - 'docker run -p 3000:3000 user-project'

## Docker Compose Installation steps
- Install docker, docker-compose
- Run 'docker-compose up'