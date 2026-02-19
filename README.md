📝 Simple Backend README (Copy & Paste)
markdown
# Stock Market Portfolio - Backend API

Node.js/Express backend for the portfolio dashboard.

## 🔗 Live API
https://stock-market-portfolio-backend-km7b.onrender.com

text

## 📡 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/portfolio` | Returns all stock data (30 stocks, sector summaries) |
| `GET /health` | Health check - returns {status: "OK"} |

## 🛠️ Tech Stack
- Node.js
- Express
- Axios
- Render (deployment)

## 🚀 Local Setup

```bash
# Clone repo
git clone https://github.com/Kumarharsh1/Stock-Market-Portfolio-backend.git
cd Stock-Market-Portfolio-backend

# Install dependencies
npm install

# Create env file
cp .env.example .env

# Start server
npm run dev
Server runs on http://localhost:5000

🔑 Environment Variables
text
ALPHA_VANTAGE_KEY=your_key_here
TWELVE_DATA_KEY=your_key_here
PORT=5000
📁 Project Structure
text
backend/
├── src/
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
👨‍💻 Author
Kumar Harsh - 9279157296

🔗 GitHub
https://github.com/Kumarharsh1/Stock-Market-Portfolio-backend

text

---

Just copy this entire block and paste it into your `backend/README.md` file. It's short, clean, and has everything needed! ✅
