# API Sandbox

## Quick Reference
To run locally (if you have already completed the Application Setup steps): 
1. Start `docker run --name sandbox-postgres -e POSTGRES_PASSWORD=[PASSWORD] -d -p 5432:5432 postgres` or Restart your database: `docker container restart sandbox-postgres`
1. Run the application `npm start`

## Application Setup
This application has been designed to run with PostgreSQL as a database. You can follow these steps to get setup quickly. Note: Assumes you already have Docker installed. 
1. Pull down the latest version of postgres: `docker pull postgres`
1. Run the database: `docker run --name sandbox-postgres -e POSTGRES_PASSWORD=[PASSWORD] -d -p 5432:5432 postgres`
1. Connect to the database through psql: `docker run -it --rm --link sandbox-postgres:postgres postgres psql -h postgres -U postgres`
1. Run: `CREATE DATABASE sandbox;`
1. Disconnect and connect to the sandbox database through psql: `docker run -it --rm --link sandbox-postgres:postgres postgres psql -h postgres -U postgres -d sandbox`
1. Run the contents of the file at: `script\sql\db.sql`
1. Verify everything ran successfully by switching to the `todo` schema: `set search_path to todos;`



