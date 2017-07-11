# [FetesBnB](https://github.com/WildCodeSchool/laloupe-0217-Salle-des-fetes)

## AngularJs 1.6.4


## Requirements

-   [Node](https://doc.ubuntu-fr.org/nodejs#depuis_un_ppa)
-   [MongoDB](https://doc.ubuntu-fr.org/mongodb#installation)
-   [Nodemon](https://nodemon.io/)


## Execution


### Installation

```bash
git clone https://github.com/WildCodeSchool/laloupe-0217-Salle-des-fetes.git
cd FetesBnB
npm install
```


### Create admin

```bash
cd FetesBnB
npm run createAdmin
curl -d "email=admin@mail.com&password=azerty1&firstName=Admin&lastName=Admin&isAdmin=true" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/
```


### Development

- Start server on port 8000
```bash
cd FetesBnB
npm start
```


##### MongoDB Express NodeJS

- Start sevrer for Back on port 3000
```bash
cd FetesBnB
npm nodemon --exec npm run server
```


### Production

- Build frontEnd for app
```bash
cd FetesBnB
npm run production
```
- DataBase for app
```bash
SECRET_TOKEN='secretToken' MONGODB_URI='mongodb://localhost:27017/mean-lineman-server' npm start
```

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

# laloupe-0217-Salle-des-fetes
