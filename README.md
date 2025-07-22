# 🤖 AI Chatbot

## ✨ Features

- 💬 Interactive AI-powered chat interface using Groq API
- 🌙 Sleek dark theme with smooth animations
- 🔒 Secure API key configuration
- 🎨 Beautiful gradient accents and modern UI
- ✨ Auto-scrolling to latest messages
- 🚀 Built with Next.js and AI SDK
- 🎭 Framer Motion for delightful animations
- 📱 Fully responsive design

## 🛠️ Technologies Used

- **Next.js** 15.4.2 (with Turbopack)
- **React** 19.1.0
- **AI SDK** by Vercel with Groq integration
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for beautiful icons
- **TypeScript** for type safety

## 🔑 API Configuration

Before running the project, you'll need to:

1. Get your Groq API key from [Groq Cloud](https://console.groq.com/)
2. Create a `.env.local` file in the root directory
3. Add your API key:

```env
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

*Never commit this file to version control!*

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn
- Groq API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bagheri-dev/chatbot-ai.git
   cd chatbot-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual API key

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Scripts

- `dev`: Start development server with Turbopack
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint

## 🔒 Security Note

Always keep your API keys secure:
- Never expose them in client-side code
- Never commit them to version control
- Add `.env.local` to your `.gitignore` file

## 🎨 Customization

To customize the chatbot:

1. **Theme Colors**: Modify the gradient colors in the Chat component
2. **AI Model**: Change the AI model in the `useChat` configuration
3. **Animations**: Adjust animation parameters in the motion components

## 🌐 Deployment

Deploy your own version with:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fchatbot-ai)

Remember to add your `GROQ_API_KEY` as an environment variable in your deployment settings!

## 📄 License

This project is licensed under the MIT License.

## 💖 Credits

- Developed by [Mahdi Bagheri](https://bagheri-dev.info)
- Built with [Vercel AI SDK](https://vercel.com/ai) and [Groq](https://groq.com/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)

---

<p align="center">
  Enjoy chatting with AI! ✨<br/>
  <sub>Star ⭐ the repo if you like it!</sub>
</p>