
FROM node:setup_14.x

RUN npm install
#j'ai un problem d'installation normalement dans le fichier json on trouve test : mocha pour tester avec mocha
CMD ["npm", "test"]
