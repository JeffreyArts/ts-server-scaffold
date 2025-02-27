# TS Server Scaffold

Dit project is een eenvoudige Node.js-applicatie met Express en MongoDB, geschreven in TypeScript.

## Aan de slag

Volg deze stappen om het project op te zetten en uit te voeren:

### Vereisten

- [Node.js](https://nodejs.org/) en npm
- [MongoDB]()


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

### Projectstructuur

Dit project bestaat uit de volgende bestanden:

```
ts-server-scaffold/
│── src/
│   ├── server.ts         # Centraal bestand van de server
│   ├── database.ts       # MongoDB-verbinding
│   ├── populate.ts       # Vul de database met random data
│   ├── routes/
│   │   ├── api.ts        # Test-route
│   │   ├── products.ts   # CRUD route voor producten
│── .env                  # Configuratie bestand
│── package.json
│── tsconfig.json
```

### De server starten

Maak eerst een `.env` bestand aan in de root van je project met de volgende inhoud:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/<database_naam>
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
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Tips!
- Gebruik [MongoDB Compass](https://www.mongodb.com/products/tools/compass) om gemakkelijk inzicht te krijgen in je database
- Gebruik [Postman](https://www.postman.com/downloads/) om de API endpoints te testen


## Licentie

Dit project valt onder de MIT-licentie.
