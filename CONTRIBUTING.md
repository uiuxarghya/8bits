# Contributing to 8bits

Thank you for considering contributing to **8bits** — a collaborative link shortener and workspace management platform. We welcome all contributions, whether it's a small typo fix, a bug report, or a major feature.

---

## 🧰 Tech Stack

8bits is built with:

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma + MongoDB**
- **Better Auth** for authentication

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/uiuxarghya/8bits.git
cd 8bits
```

### 2. Install dependencies

```bash
bun install
```

> We recommend using `bun`.

### 3. Setup environment variables

Create a `.env` file using the example file:

```bash
cp .env.example .env
```

Fill in the appropriate credentials (DB URL, Auth secrets, etc.).

### 4. Generate Prisma Client

```bash
bunx prisma generate
```

### 5. Run the dev server

```bash
bun dev
```

---

## 🧑‍💻 How to Contribute

### 1. Fork the repository

Click the `Fork` button at the top right of the GitHub page.

### 2. Create your feature/bugfix branch

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/issue-name
```

### 3. Make changes

Follow project structure and conventions. Make sure your code is clean, well-documented, and tested.

### 4. Run linting and formatting

```bash
bun lint
bun format
```

### 5. Commit changes

Use clear and conventional commit messages (e.g., `fix: resolve redirect bug`, `feat: add custom domain support`).

### 6. Push and open a Pull Request

```bash
git push origin feat/your-feature-name
```

Then go to GitHub and open a PR. Fill in the description with:

- What you’ve done
- Any screenshots or context
- Related issues if applicable

---

## ✅ Code of Conduct

We expect contributors to follow the [Code of Conduct](./CODE_OF_CONDUCT.md). Be respectful and inclusive.

---

## 🤝 Community

- [Issues](https://github.com/uiuxarghya/8bits/issues) – Request features or report bugs
- [Discussions](https://github.com/uiuxarghya/8bits/discussions) – Ask questions, suggest ideas

---

## 💡 Tips

- Keep PRs small and focused
- Write clear commit messages
- Document any new components or APIs
- Don’t forget tests if the feature needs them

---

Thanks again for contributing!  
— Arghya Ghosh, [@uiuxarghya](https://github.com/uiuxarghya)
