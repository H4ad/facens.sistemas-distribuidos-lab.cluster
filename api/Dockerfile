# Defini qual imagem e qual versão rodará a nossa API.
FROM node:14.17.1 as base

# Copia o package.json para instalar as dependencias necessárias
COPY package*.json ./

# Instala as dependencias do NodeJS
RUN npm i

# Copia os arquivos de código fonte da nossa API para serem compilados
COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY webpack.config.js ./webpack.config.js

# Roda o comando para compilar toda a API para um formato que possa ser
# executado posteriormente
RUN npm run build

# Após compilar a API, iremos usar uma imagem mais leve 
# apenas para executar a API, isso ajuda a otimizar o
# tamanho da imagem como um todo.
FROM gcr.io/distroless/nodejs:14

# Copia todas as dependencias necessárias para rodar a API
COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

# Copia os arquivos estáticos da API que serão necessários
# para que ela possa ser executada
COPY brasil.db dist/brasil.db

# Por padrão, expoê a porta 3000 do container para que o 
# host possa acessar a API.
EXPOSE 3000

# Define um comando a ser executado ao rodar essa imagem.
# Ao iniciar o container, ele começará a rodar a API
# e caso algum erro ocorra na API, ele imediatamente para
# o container e já armazena as mensagens de erro nos logs.
CMD ["dist/main.js"]
