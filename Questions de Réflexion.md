## Questions de Réflexion

### 1. Quelle est l’utilité de Docker Compose comparé à l’utilisation directe de Docker pour une application unique ?

Docker Compose est utile lorsqu'on doit gérer plusieurs conteneurs qui doivent travailler ensemble, 
comme une application web et une base de données et un back (dans notre cas il n'y a q'un back et une bdd). Contrairement à Docker où on doit exécuter chaque 
conteneur séparément avec des commandes spécifiques, Docker Compose permet de définir 
tous les conteneurs dans un seul fichier `docker-compose.yml` et de les lancer d'un seul 
coup avec une commande `docker-compose up`. ça simplifie la gestion de l'application.

### 2. Quelles différences observes-tu entre un fichier Dockerfile et un fichier docker-compose.yml ?

- Dockerfile : C'est un fichier qui décrit comment construire une image Docker. 
Il contient des instructions sur l'installation des dépendances, 
la configuration de l'environnement et la façon dont le projet doit être lancée à l'intérieur du conteneur. 


- docker-compose.yml : Il décrit comment déployer plusieurs conteneurs qui communiquent ensemble. 
Il définit les services, les réseaux, les volumes pour chaques conteneurs. 
Ce n'est pas pour créer une image, mais pour gérer et connecter plusieurs conteneurs en même temps.

### - Comment Docker Compose facilite-t-il la gestion de plusieurs services ? Quels sont les avantages pour le déploiement en équipe ou en production ?

Docker Compose facilite la gestion de plusieurs services en permettant de tout configurer dans un seul fichier. Il permet de définir des services (comme le front, le back, la bdd, etc.) 
et de les exécuter ensemble avec une seule commande. Cela permet de :

- Gérer les dépendances facilement : Par exemple, si le projet dépend d'une base de données, Docker Compose s'assure que la base de données est lancée avant l'application.
- Simplifier la configuration : Un seul fichier pour configurer tous les services au lieu de devoir exécuter plusieurs commandes Docker manuellement.
- Faciliter la collaboration en équipe : Tout le monde peut utiliser le même fichier docker-compose.yml pour avoir exactement le même environnement de développement ou de production.
- Déploiement en production : En production, Docker Compose permet de reproduire facilement des environnements complexes (avec plusieurs services) 
- et de les déployer sur différents serveurs ou cloud, en réduisant le risque d'erreurs.