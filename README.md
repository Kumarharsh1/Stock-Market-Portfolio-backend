For Backend README.md
Go to: https://github.com/Kumarharsh1/Stock-Market-Portfolio-backend
Click README.md → pencil icon ✏️ → replace everything with this:

markdown
# Stock Market Portfolio Backend

Hey, this is the backend for my portfolio dashboard project. It's a simple Node.js/Express server that feeds data to the frontend.

## Live API
https://stock-market-portfolio-backend-km7b.onrender.com

text

## What it does
- Has 30 Indian stocks (the ones you asked for)
- Calculates all the numbers - investment, current value, gains/losses
- Groups everything by sector
- Sends JSON to the frontend every time it's called

## API Endpoints

**GET /api/portfolio**
This returns ALL the data. Try it: 
https://stock-market-portfolio-backend-km7b.onrender.com/api/portfolio

**GET /health**
Just checks if the server is alive. Nothing fancy.

## Tech I used
- Node.js (v18)
- Express (for routing)
- Axios (for calling APIs)
- Render (for hosting - it's free)

## Run it locally (if you want)

```bash
git clone https://github.com/Kumarharsh1/Stock-Market-Portfolio-backend.git
cd Stock-Market-Portfolio-backend
npm install
cp .env.example .env
npm run dev
Then open http://localhost:5000

Environment Variables
Copy .env.example to .env and add these if you have API keys (not required, I have fallback data):

text
ALPHA_VANTAGE_KEY=your_key_here
TWELVE_DATA_KEY=your_key_here
PORT=5000
The API key situation
The assignment wanted Yahoo/Google Finance but they don't have proper free APIs. So I used:

Alpha Vantage (primary)

Twelve Data (backup)

Cached everything for 5 minutes so I don't hit rate limits

Fallback market data when APIs fail

Folder structure
Nothing complicated:

text
backend/
├── src/
│   └── server.js          # all the code lives here
├── .env.example            # shows what env vars you need
├── .gitignore              # stuff I don't want on GitHub
├── package.json            # dependencies
└── README.md               # this file
Author
Kumar Harsh

Phone: 9279157296

GitHub: @Kumarharsh1

Built for Octa Byte AI case study. Took longer than expected but learned a lot about deployment.
