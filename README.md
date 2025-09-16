# Vision Friend 👀

**Vision Friend** is a personal gallery project built with **Next.js 15**.  
The goal of this project is:  
- To create a simple and responsive gallery for drawings and doodles  
- To practice **React + Next.js + Prisma + SQLite** full-stack development  
- To later extend with **Cloudinary storage, user accounts, and AI features**  

---

## 🚀 Tech Stack

- [Next.js 15](https://nextjs.org/) - React full-stack framework
- [Prisma](https://www.prisma.io/) - Modern ORM
- [SQLite](https://sqlite.org/) - Lightweight database (for development)
- [TypeScript](https://www.typescriptlang.org/) - Strong typing
- [Tailwind CSS](https://tailwindcss.com/) - Styling (optional)

---

## 📦 Installation & Setup

### 1. Clone the project
```bash
git clone https://github.com/yourname/vision-friend.git
cd vision-friend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Initialize Prisma
```bash
npx prisma init --datasource-provider sqlite
```

### 4. Run initial migration
```bash
npx prisma migrate dev --name init
```

### 5. Start the development server
```bash
npm run dev
```

Then open your browser:  
- Local: [http://localhost:3000](http://localhost:3000)  
- Network: `http://<your-local-ip>:3000` (useful for testing on mobile devices)

---

## 📂 Project Structure
```
vision-friend/
├── prisma/          # Prisma schema definition
├── public/          # Static assets
├── src/             # Main source code
│   ├── app/         # Next.js App Router
│   ├── components/  # Shared React components
│   └── lib/         # Utility functions
├── .env             # Environment variables
└── package.json
```

---

## 🔮 Roadmap

- [ ] Phase 1: Local gallery with upload + display  
- [ ] Phase 2: Image storage via **Cloudinary**  
- [ ] Phase 3: Basic user management (accounts)  
- [ ] Phase 4: NestJS integration (optional)  
- [ ] Phase 5: AI-powered features (auto-tagging, recognition)  

---

## 📜 License
MIT