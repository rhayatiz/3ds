##### Requirements
- php 8.0.2+
- composer
- node 16.20.2+
- mysql


##### Note
Ce projet utilise [InertiaJS](https://inertiajs.com/), une bibliothèque qui permet d'injecter les composants/pages ReactJS à la place des vues blade de laravel


##### Guide
- Installer les dépendances php ```composer install```
- Installer les dépendances node ```npm i```
- Configurer votre fichier .env.local à partir de .env.example
- Générer les clés Laravel ```php artisan key:generate```
- Lancer les migrations et les seeders ```php artisan migrate:fresh --seed```


##### Local dev
- Lancer le back-end ```php artisan serve```
- Lancer le back-end ```npm run dev ```