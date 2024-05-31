# Blockchain em TypeScript

Este projeto é um exemplo básico de como criar uma blockchain usando TypeScript e NPM.

## Passos para Configuração

### Inicializar o Projeto

1. **Crie um diretório para o projeto e navegue até ele**:
   ```sh
   mkdir "Nome do seu Projeto"
   ```
   ```sh
   cd "Nome do seu Projeto"
   ```
3. **Inicialize um novo projeto NPM**:
   ```sh
   Comando: npm init -y
   ```
5. **Configure o TypeScript**:
   * Aqui deve-se instalar o Typescript e os tipos para Node.js
   ```sh
   npm install typescript @types/node --save-dev
   ```
6. **Agora crie um arquivo 'tsconfig.json' com a seguinte config**
   
  ~~~
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
~~~
  
6. **Agora estruture o projeto**:
   * Crie a estrutura dos diretórios
   Comando: mkdir src
   Comando: src/index.ts // Ou crie la dentro da pasta mesmo.
7. **Código no meu repo. src/index.ts**:
8. **Compilar e Executar o código**:
   * Compile o Typescript para JavaScript:
   * Comando: npx tsc
   * Execute o arquico compilado:
   * Comando: node dist/index.js
9. **Scripts NPM**
   * Adicione os seguintes scripts no seu 'package.json':
  ~~~
    {
  "name": "minha-blockchain",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^4.5.5",
    "@types/node": "^17.0.0"
  }
}
~~~

10. **Compile e Execute**
    ```sh
    npm run build
    Comando: npm start
    ```

# Este arquivo README.md resume os passos essenciais para configurar e executar o projeto de blockchain em TypeScript usando NPM.

   
   
   
