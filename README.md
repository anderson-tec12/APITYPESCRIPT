# APITYPESCRIPT

Projeto para pratica com typescrits e alguns conceitos

# Ambiente dockerrizado

rode o comado para gerar a imagem
docker build -t abs/api-ts .

verificando se a imagem foi criada
docker images

Instanciando o container com a imagem gerada
docker run -d -p 5000:3050 abs/api-ts
