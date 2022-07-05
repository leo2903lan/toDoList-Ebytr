# toDoList-Ebytr
Lista de tarefas em React como parte do desafio técnico da Ebytr.

## Para rodar o projeto:

fazer um fork da raiz do projeto, com as pastas backend e frontend,

em cada um dos diretórios rodar o npm install para instalar as dependencias do projeto;

OBS: O MySQL já deverá estar rodando localmente ou em um conteiner com a porta mapeada para 3306

o arquivo .env deve ser criado coma variável:

SUBSTITUIR ONDE SINALIZADO!!!!

DATABASE_URL="mysql://<usuário_do_BD>:<senha_do_BD>@localhost:3306/toDoEbtry"

usar o comando na pasta backend:

npx prisma migrate dev --name init

para rodar o banco utilizadno das migrations do PRISMA.


o backend roda com o comando:

npm run dev

já o frontend, roda com :

npm start;



