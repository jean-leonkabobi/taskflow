# TaskFlow

Gestionnaire de tâches collaboratives développé avec Angular.

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-Style-CC6699?logo=sass&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-Server-009639?logo=nginx&logoColor=white)
![License](https://img.shields.io/badge/Licence-MIT-green)

## Fonctionnalités

- **CRUD complet** : Créer, lire, modifier et supprimer des tâches
- **Tableau Kanban** : 3 colonnes (À faire, En cours, Terminé)
- **Authentification** : Inscription et connexion (localStorage)
- **Filtres** : Par statut, priorité et personne assignée
- **Statistiques** : Nombre de tâches par statut en temps réel
- **Icônes Material Symbols** : Interface moderne et épurée
- **Docker** : Conteneurisation avec NGINX

## Technologies

 ### Technologie | Usage

 Angular 19 | Framework frontend

TypeScript | Langage de programmation

SCSS | Styles

Material Symbols | Icônes

localStorage | Stockage des données

Docker | Conteneurisation

NGINX | Serveur web

##  Installation

### Prérequis

- Node.js v24.14.1
- Angular CLI
- Docker (vu que je voulais dockeriser mon projet...)

## Lancer en développement

### Cloner le projet
git clone https://github.com/jean-leonkabobi/taskflow.git
cd taskflow

### Installer les dépendances
npm install

### Lancer le serveur de développement
ng serve

### Ouvrir http://localhost:4200

### Construire l'image
docker build -t taskflow .

### Lancer le conteneur
docker run -d -p 8080:80 --name taskflow taskflow

### Ouvrir http://localhost:8080

## Utilisation
Inscription : Créez un compte avec un nom d'utilisateur, email et mot de passe

Connexion : Connectez-vous avec vos identifiants

Créer une tâche : Cliquez sur "Nouvelle tâche" et remplissez le formulaire

Gérer les tâches : Modifiez ou supprimez des tâches via les boutons

Filtrer : Utilisez les filtres en haut pour affiner l'affichage

Suivre : Consultez les statistiques pour voir la progression

## Mes contacts : Jean-Leon KABOBI     kabobi.jeanleon.dev@gmail.com
