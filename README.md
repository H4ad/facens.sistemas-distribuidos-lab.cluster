# Sistemas Distribuídos - Lab

Esse repositório contém o projeto de exemplo usado para demonstrar a eficácia de um cluster.

## O que há tanto?

Para esse projeto, criamos uma simples API que busca as informações de um banco SQLite, e retorna as informações em JSON.
Essa API possui 4 rotas para listar cidades, estados, cidade pelo ID e estado pelo ID.

Além disso, dentro da pasta `api`, temos as configurações do `Dockerfile` e `docker-compose.yml` para rodar o ambiente no modo cluster.

## Como usar

Para usar, primeiro, vá na pasta `api` e rode o comando:

```bash
npm run build:docker
```

E após isso, configure os parâmetros do teste no arquivo `docker-compose.yml`, e quantas instâncias deve ser rodado por vez em:

```yml
replicas: 2
update_config:
  parallelism: 2
resources:
  limits:
    cpus: '0.25'
    memory: 256M
  reservations:
    cpus: '0.25'
    memory: 256M
```

No exemplo acima, foi configurado para que ele execute 2 instâncias ao mesmo tempo, e dedique 256MB de memória assim como 25% de um único core.

Depois, rode o comando a seguir para criar o cluster.

```bash
docker swarm init
```

E após criar o cluster, vamos rodar ele usando o comando:

```bash
npm run deploy:stack
```

Após isso, acesse a pasta `loadtest` e rode o comando `pewpew stress`.
Dessa forma, ele irá executar 4000 requisições para API em 4 rotas diferentes de uma API.

## Resultados

Na pasta `loadtest/results`, há alguns resultados de performance ao se utilizar o modo cluster com diferentes números de instâncias, cpu e memória.

Esses resultados foram obtidos ao rodar eles em uma máquina com as seguintes específicações:

- Memória: 32gb 3200Mhz
- Processador: Ryzen 3 2200g 3.5Ghz
- Sistema: Rodando em um Ubuntu 18.04 dentro do WSL2
