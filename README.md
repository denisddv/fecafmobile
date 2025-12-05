# 🛍️ Catálogo Interativo Mobile - E-commerce

Aplicativo mobile desenvolvido em React Native com Expo para apresentar produtos de uma loja online, com sistema de login, listagem por categorias e navegação entre telas.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

## 📱 Sobre o Projeto

Este é um projeto acadêmico da disciplina **Mobile Development** que demonstra o desenvolvimento completo de um catálogo de produtos e-commerce com as seguintes funcionalidades:

- ✅ Sistema de login com validação de campos
- ✅ Listagem de produtos por categoria (Masculino/Feminino)
- ✅ Navegação por abas (Tabs)
- ✅ Detalhes completos de cada produto
- ✅ Consumo de API REST com Axios
- ✅ Gerenciamento de estado com Redux Toolkit
- ✅ Tratamento de erros e loading states
- ✅ Pull-to-refresh para atualizar dados
- ✅ Logout funcional

## 🎯 Funcionalidades Implementadas

### 1. 🔐 Tela de Login
- Validação de formato de email (regex)
- Validação de senha mínima (6 caracteres)
- Feedback visual de erros
- Loading state durante autenticação
- Armazenamento de dados do usuário no Redux

### 2. 📋 Tela de Listagem de Produtos
- **Aba Masculina**: produtos das categorias
  - Camisas (mens-shirts)
  - Sapatos (mens-shoes)
  - Relógios (mens-watches)
- **Aba Feminina**: produtos das categorias
  - Bolsas (womens-bags)
  - Vestidos (womens-dresses)
  - Joias (womens-jewellery)
  - Sapatos (womens-shoes)
  - Relógios (womens-watches)
- Grid de 2 colunas responsivo
- Cards com imagem, nome, preço e desconto
- Pull-to-refresh para recarregar
- Loading spinner
- Tratamento de erros com retry

### 3. 🔍 Tela de Detalhes do Produto
- Imagem em destaque
- Nome e descrição completa
- Preço original e preço com desconto
- Badge de desconto percentual
- Cálculo de economia
- Rating (avaliação)
- Quantidade em estoque
- Marca e categoria
- Layout scrollável

### 4. 🚪 Logout
- Botão de logout no header das tabs
- Limpa dados do Redux
- Retorna para tela de login

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **React Native** | Framework para desenvolvimento mobile |
| **Expo** | Plataforma de desenvolvimento e build |
| **Redux Toolkit** | Gerenciamento de estado global |
| **React Navigation** | Navegação entre telas (Stack + Tabs) |
| **Axios** | Cliente HTTP para consumo de API REST |

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **Expo CLI**
- **Expo Go** (app no celular) OU emulador Android/iOS

## 🔧 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/denisddv/fecafmobile.git
cd fecafmobile
```

### 2. Instale as dependências
```bash
Npm install
```

### 3. Inicie o projeto
```bash
npx expo start
```

## ▶️ Como Executar

### 📱 No Celular Físico (Recomendado)
1. Instale o app **Expo Go**
2. Escaneie o QR code
3. O app será carregado automaticamente

### 🤖 No Emulador Android
Pressione **`a`** no terminal do Expo

### 🍎 No Simulador iOS (macOS)
Pressione **`i`** no terminal do Expo

## 📂 Estrutura do Projeto

```
fecafmobile/
├── App.js
├── src/
│   ├── components/
│   │   ├── ProductCard.js
│   │   ├── LoadingSpinner.js
│   │   └── ErrorMessage.js
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── ProductListScreen.js
│   │   └── ProductDetailScreen.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── services/
│   │   └── api.js
│   ├── store/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       └── productsSlice.js
│   └── utils/
│       └── validators.js
```

## 🌐 API Utilizada

**DummyJSON API**: `https://dummyjson.com`

### Endpoints:
- `GET /products/category/{categoria}` - Lista produtos
- `GET /products/{id}` - Detalhes do produto

📚 **Documentação**: https://dummyjson.com/docs

## 🧪 Como Testar

### Credenciais de Login
- **Email**: qualquer email válido (ex: `teste@email.com`)
- **Senha**: mínimo 6 caracteres (ex: `123456`)

### Fluxo de Teste
1. ✅ Faça login
2. ✅ Navegue entre abas
3. ✅ Clique em um produto
4. ✅ Use pull-to-refresh
5. ✅ Clique em "Sair"

## 📚 Conceitos Aplicados

- ✅ Componentização
- ✅ Redux Toolkit
- ✅ Navegação (Stack + Tabs)
- ✅ Consumo de API REST
- ✅ Validação de Formulários
- ✅ Tratamento de Erros

## 👨‍💻 Autor

**Denis David**
- GitHub: [@denisddv](https://github.com/denisddv)
- Repositório: [fecafmobile](https://github.com/denisddv/fecafmobile)

## 📝 Requisitos Atendidos ✅

- [x] Tela de Login com validação
- [x] Listagem de produtos por categoria
- [x] Navegação por abas
- [x] Tela de detalhes
- [x] Logout funcional
- [x] Axios + Redux Toolkit
- [x] Tratamento de erros
- [x] README completo

---

**Desenvolvido com ❤️ para Mobile Development - Dezembro 2025**
