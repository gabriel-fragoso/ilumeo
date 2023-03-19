# Define a imagem base
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do aplicativo para dentro do contêiner
COPY . /app

# Instala as dependências
RUN yarn install;\ 
    yarn run build

# Expõe a porta 3000 para o mundo exterior
EXPOSE 3000

# Inicia o servidor do aplicativo
ENTRYPOINT ["yarn", "run", "dev"]   