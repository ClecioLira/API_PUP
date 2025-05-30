# API_PUP

## Visão Geral

API_PUP é um backend que utiliza Node.js e diversas bibliotecas populares para autenticação, manipulação de arquivos, integração com serviços de nuvem, e persistência de dados com MongoDB.

---

## Tecnologias Utilizadas

- **Node.js** (runtime principal)
- **Express** (estrutura de API)
- **Mongoose** (ORM para MongoDB)
- **JWT (jsonwebtoken)** (autenticação baseada em token)
- **bcrypt & bcryptjs** (hash de senhas)
- **multer** e **multer-storage-cloudinary** (upload de arquivos e integração com Cloudinary)
- **dotenv** (gerenciamento de variáveis de ambiente)
- **cors** (política de acesso cruzado)
- **nodemon** (monitoramento em desenvolvimento)
- **json-server** e **json-serve** (mock de APIs REST)
- **cloudinary** (armazenamento de arquivos na nuvem)

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/ClecioLira/Fake_API_PUP.git
cd Fake_API_PUP

# Instale as dependências
npm install
```

---

## Configuração

1. **Variáveis de Ambiente**  
   Crie um arquivo `.env` na raiz do projeto e defina ao menos as variáveis necessárias (exemplo):
   ```
   MONGODB_URI=mongodb://localhost:27017/fake_api_pup
   JWT_SECRET=sua_chave_secreta
   CLOUDINARY_CLOUD_NAME=seu_cloud_name
   CLOUDINARY_API_KEY=sua_api_key
   CLOUDINARY_API_SECRET=sua_api_secret
   ```

2. **Inicie o servidor**
   ```bash
   npm start
   ```
   O servidor rodará, por padrão, em `http://localhost:3000`.

---

## Endpoints Principais

> **Nota:** Como o código-fonte principal (`app.js`, `main.py` ou arquivos de rotas) não foi localizado, a seguir está uma estrutura típica baseada nas dependências usadas.

### Autenticação
- `POST /login` — Autentica um usuário e retorna um token JWT.
- `POST /register` — Cria um novo usuário.

### Recursos
- `GET /items` — Lista itens.
- `POST /items` — Cria um novo item (necessário autenticação).
- `PUT /items/:id` — Atualiza um item existente.
- `DELETE /items/:id` — Remove um item.

### Upload de Arquivos
- `POST /upload` — Faz upload de arquivos para o Cloudinary.

---

## Scripts Disponíveis

- `npm start` — Inicia o servidor com **nodemon** para desenvolvimento.
- `npm test` — (placeholder para testes, não implementado por padrão).

---

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

---

## Licença

ISC. Consulte o arquivo `LICENSE` para mais detalhes.

---

## Observações

- O projeto pode conter arquivos de configuração adicionais ou scripts customizados.
- Para detalhes adicionais sobre rotas, consulte os arquivos de implementação (`app.js` ou similares) assim que disponíveis.
