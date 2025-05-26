# 🧩 MoWi Escape Room

**ES**: MoWi Escape Room es un prototipo funcional de una app de escape room multijugador creada con **Expo + React Native**, orientada a dispositivos móviles y web. Incluye roles de usuario y administrador, autenticación con Firebase y navegación condicional.

**EN**: MoWi Escape Room is a functional prototype of a multiplayer escape room app built with **Expo + React Native**, targeting both mobile and web. It includes user and admin roles, Firebase authentication, and conditional navigation.

---

## 🎯 Objetivo / Goal

**ES**: Construir una aplicación funcional que demuestre experiencia técnica moderna en frontend, manteniendo un enfoque de trabajo diario de 1 hora (lunes a viernes).

**EN**: Build a functional application that demonstrates modern frontend technical expertise, while following a focused work schedule of 1 hour per day (Monday to Friday).

---

## 💡 Habilidades Requeridas / Skills Demonstrated

- ✅ English level - C1 or C2  
- ✅ React (3+ years)  
- ✅ Software Engineering (5+ years)  
- ✅ JavaScript state management (Context API)  
- ✅ JavaScript build tools (Expo, monorepo with Yarn Workspaces)  
- ✅ Modern CSS (React Native Flexbox styling)  
- ✅ TypeScript  
- 🔲 Unit & Component Testing (Jest, Testing Library)  
- 🔲 E2E Testing (Cypress / Playwright)  
- 🔲 Monorepo management (NX / Yarn Workspaces)  
- 🔲 Fintech experience (planned)  
- 🔲 .NET integration (optional)

---

## ⚙️ Tecnologías / Technologies Used

- **Expo (React Native)** – multiplatform app development
- **Firebase Auth** – authentication (without persistence)
- **React Navigation** – routing and navigation
- **Context API** – role-based state management
- **TypeScript** – static typing
- **Yarn Workspaces** – monorepo management
- **Jest / Testing Library** (planned)
- **Playwright / Cypress** (planned)

---

## 🗂️ Estructura del Proyecto / Project Structure
mowi-escape-room/

├── apps/

│ └── mobile/ # Expo app

│ ├── screens/ # Login, Register, Home

│ ├── context/ # Auth context

│ ├── firebase/ # Firebase config

│ └── App.tsx

├── package.json

└── yarn.lock

---

## 📅 Plan de Trabajo / Work Plan

### Semana 1 / Week 1

#### Día 1 / Day 1 - ✅

- [x] Instalar herramientas: Node, Yarn, Expo CLI
- [x] Crear monorepo con Yarn Workspaces
- [x] Inicializar app móvil en Expo con TypeScript  
- [x] Install dependencies and base project setup

#### Día 2 / Day 2 - ✅

- [x] Configurar Firebase en consola y app
- [x] Conectar Firebase Auth (sin persistencia / without persistence)
- [x] Crear pantallas de Login y Registro / Create Login & Register screens

#### Día 3 / Day 3 - ✅

- [x] Crear `AuthContext` para manejar sesión / Create `AuthContext`
- [x] Navegación condicional por rol / Role-based navigation (admin/user/guest)
- [x] Crear pantallas base de Home / Create base Home screens

#### Día 4 / Day 4 - ✅

- [x] Validación de formularios y manejo de errores / Form validation and error handling
- [x] Refactorizar navegación / Refactor navigation
- [x] Mejorar estilos básicos / Improve base styling

---

## 📈 Próximos Pasos / Next Steps

### Semana 2 / Week 2

#### Día 5 / Day 5

- [ ] Crear estructura para niveles / Create level structure
- [ ] UI para selección de niveles / Level selector UI
- [ ] Pantalla base de CRUD (admin) / Base CRUD UI for admin

#### Día 6–7 / Day 6–7

- [ ] Conectar Firestore (o JSON local) para niveles  
- [ ] Mostrar pistas y acertijos / Show puzzles and clues
- [ ] Lógica básica de juego / Puzzle solving logic

#### Día 8–10 / Day 8–10

- [ ] Guardar score por usuario / Store user scores
- [ ] Pantalla de puntuación / Scoreboard screen
- [ ] Setup de pruebas / Setup tests (Jest, Cypress/Playwright)

---

## 📸 Capturas / Screenshots

_(por agregar / to be added)_

---

## 👤 Autor / Author

- Gabriel Witt — [GitHub](https://github.com/gabowitt)

---

## 📄 Licencia / License

MIT
