# TaskFlow

Gestionnaire de tâches collaboratives développé avec Angular.

## Fonctionnalités

- **CRUD complet** : Créer, lire, modifier et supprimer des tâches
- **Tableau Kanban** : 3 colonnes (À faire, En cours, Terminé)
- **Authentification** : Inscription et connexion (localStorage)
- **Filtres** : Par statut, priorité et personne assignée
- **Statistiques** : Nombre de tâches par statut en temps réel
- **Icônes Material Symbols** : Interface moderne et épurée
- **Docker** : Conteneurisation avec NGINX

## Technologies

- Angular 19
- TypeScript
- SCSS
- Material Symbols (icônes)
- Docker & NGINX

##  Installation

### Prérequis

- Node.js 18+
- Angular CLI
- Docker (optionnel)

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
