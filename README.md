# API Sandbox

## Quick Reference
To run locally (if you have already completed the Application Setup steps): 
1. Start `docker run --name sandbox-postgres -e POSTGRES_PASSWORD=[PASSWORD] -d -p 5432:5432 postgres` or Restart your database: `docker container restart sandbox-postgres`
1. Run the application `npm start`
1. View API docs: [http://localhost:3000/api-docs]

Run tests:
* `npm test` or...
* `npm run test-coverage` to see test coverage

## Application Setup
This application has been designed to run with PostgreSQL as a database. You can follow these steps to get setup quickly. Note: Assumes you already have Docker installed. 
1. Pull down the latest version of postgres: `docker pull postgres`
1. Run the database: `docker run --name sandbox-postgres -e POSTGRES_PASSWORD=[PASSWORD] -d -p 5432:5432 postgres`
1. Connect to the database through psql: `docker run -it --rm --link sandbox-postgres:postgres postgres psql -h postgres -U postgres`
1. Create the todoapp user: `create user todoapp with login password '[PASSWORD]';`
1. Create the todo database: `create database todo owner todoapp;`
1. Disconnect and connect to the sandbox database through psql: `docker run -it --rm --link sandbox-postgres:postgres postgres psql -h postgres -U todoapp -d todo`
1. Run the contents of the file at: `script\sql\db.sql`

## SonarQube Setup
This application is configured to be analyzed by SonarQube. To install and run:
1. Login to the postgres database, run the following create user command: `create user sonar with login password 'anything'`
1. Then create an app database for the sonar user to own: `create database sonar owner sonar`;
1. Determine what your postgres database IP address is: `docker inspect sandbox-postgres` then search for `"IPAddress"`.
1. Run the server: `docker run -d --name sonarqube -p 9000:9000 -e sonar.jdbc.username=sonar -e sonar.jdbc.password=[PASSWORD] -e sonar.jdbc.url=jdbc:postgresql://[IP]]/sonar sonarqube`

## Run SonarQube Analysis
1. Run the tests and compile coverage: `npm run test-coverage`
1. Run the sonar-scanner: `sonar-scanner.bat` (requires the following settings in your properties file at a minimum)

```
#----- Default SonarQube server
sonar.host.url=http://localhost:9000

#----- Default source code encoding
sonar.sourceEncoding=UTF-8

sonar.login=SONAR_LOGIN_KEY
```



