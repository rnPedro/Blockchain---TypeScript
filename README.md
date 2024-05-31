# Blockchain em TypeScript

Este projeto é um exemplo básico de como criar uma blockchain usando TypeScript e NPM.

## Passos para Configuração

### Inicializar o Projeto

1. **Crie um diretório para o projeto e navegue até ele**
   * mkdir "Nome do seu Projeto"
   * cd "Nome do seu Projeto"
2. **Inicialize um novo projeto NPM**:
   * Comando: npm init -y
3. **Configure o TypeScript**:
   * Aqui deve-se instalar o Typescript e os tipos para Node.js
   * Comando: npm install typescript @types/node --save-dev
4. **Agora crie um arquivo 'tsconfig.json' com a seguinte config**
  *  {
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
5. **Agora estruture o projeto**
   * Crie a estrutura dos diretórios
   Comando: mkdir src
   Comando: src/index.ts // Ou crie la dentro da pasta mesmo.
6. **Código no meu repo. src/index.ts**
7. **Compilar e Executar o código**
   Compile o Typescript para JavaScript:
   Comando: npx tsc
   Execute o arquico compilado:
   Comando: node dist/index.js
8. **Scripts NPM**
   Adicione os seguintes scripts no seu 'package.json':
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
9. **Compile e Execute**
    Comando: npm run build
    Comando: npm start

# Este arquivo README.md resume os passos essenciais para configurar e executar o projeto de blockchain em TypeScript usando NPM.

   
   
   
