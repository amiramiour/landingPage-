# Étape de construction
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le contenu du projet dans l'image
COPY . .

# Construire l'application React
RUN npm run build

# Étape pour servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers de construction depuis l'étape précédente
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
