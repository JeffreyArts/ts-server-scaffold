# TS Server Scaffold

Dit project is een eenvoudige Node.js-applicatie met Express en SQLite, geschreven in TypeScript, en maakt gebruik van Prisma als ORM.

## Aan de slag

Volg deze stappen om het project op te zetten en uit te voeren:

### Vereisten

- [Node.js](https://nodejs.org/) en npm
- Geen aparte database nodig – SQLite wordt gebruikt als embedded database

### Installatie

1. Clone de repository:
   ```bash
   git clone <repository-url>
   cd ts-server-scaffold
   ```

2. Installeer de packages die voor dit project nodig zijn:
   ```bash
   npm install
   ```

3. Initialiseer Prisma:
   ```bash
   npx prisma init
   ```

4. Maak een eerste migratie aan en genereer de Prisma Client:
   ```bash
   npm run prisma:migrate
   npm run prisma:generate
   ```

### Projectstructuur

Dit project bestaat uit de volgende bestanden:

```
ts-server-scaffold/
│── prisma/
│   └── schema.prisma       # Prisma schema definitie
│── src/
│   ├── server.ts           # Centraal bestand van de server
│   ├── database.ts         # SQLite database-verbinding via Prisma
│   ├── populate.ts         # Vul de database met random data via Prisma
│   ├── routes/
│   │   ├── api.ts          # Test-route
│   │   └── products.ts     # CRUD route voor producten, nu met Prisma
│── .env                    # Configuratie bestand
│── package.json
│── tsconfig.json
```

### De server starten

Maak eerst een `.env` bestand aan in de root van je project met de volgende inhoud:
```env
PORT=3000
DATABASE_URL="file:./database_naam.db"
```
Let op, de database_naam moet lowercase zijn en mag geen speciale karakters, anders dan underscores `_` bevatten.

Om de server te starten, voer uit:
```bash
npm run dev
```

Dit start de server op het port nummer zoals in het .env bestand staat aangegeven `http://localhost:3000`. Ook worden code wijzigingen worden in real-time ge-update.

### Populate script

Er is een populate script beschikbaar waarmee je de producten in de database kunt beheren. Het script verwijdert alle bestaande producten en voegt 8 nieuwe producten toe.
Hoe gebruik je het populate script?

Voer het volgende commando uit om de producten in de database te resetten en opnieuw te vullen:

```bash
npm run populate
```

#### Wat doet het populate script?

Verwijdert alle bestaande producten: Het script maakt gebruik van een MongoDB-query om alle documenten uit de productenverzameling te verwijderen.
Voegt 8 nieuwe producten toe: Na het verwijderen van de oude producten, wordt een lijst van 8 nieuwe producten toegevoegd aan de database. Deze producten kunnen eenvoudig worden aangepast in het script om bijvoorbeeld verschillende gegevens of eigenschappen toe te voegen.

Het script is nuttig voor ontwikkelingsdoeleinden om snel testdata in je database te plaatsen zonder handmatig producten toe te voegen.

## Gebruikte technologieën

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Prisma](https://www.prisma.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Tips!

- Gebruik [Prisma Studio](https://www.prisma.io/studio) om je SQLite-database visueel te inspecteren.
- Gebruik [Postman](https://www.postman.com/downloads/) om de API endpoints te testen


## Licentie

Dit project valt onder de MIT-licentie.
