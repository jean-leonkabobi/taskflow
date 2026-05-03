# Étape 1 : Build de l'application Angular
FROM node:20-alpine AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Build de l'application
RUN npm run build -- --configuration production

# Étape 2 : Serveur NGINX pour servir l'application
FROM nginx:alpine

# Copier les fichiers buildés dans NGINX
COPY --from=build /app/dist/taskflow/browser /usr/share/nginx/html

# Copier la configuration NGINX personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer NGINX
CMD ["nginx", "-g", "daemon off;"]