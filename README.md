 https://github.com/Kumarharsh1/Stock-Market-Portfolio-backend


# Stock Market Portfolio Backend

This is the backend for my stock market portfolio project.  
It is a simple Node.js + Express server that sends stock data to the frontend.

## Live API
https://stock-market-portfolio-backend-km7b.onrender.com

## What this backend does
- Contains data for 30 Indian stocks
- Calculates:
  - Total investment
  - Current value
  - Profit / Loss
- Groups stocks by sector
- Sends clean JSON data to the frontend

## API Endpoints

### GET /api/portfolio
Returns the complete portfolio data.

Try it here:  
https://stock-market-portfolio-backend-km7b.onrender.com/api/portfolio

### GET /health
Simple health check to see if the server is running.

## Tech Used
- Node.js
- Express
- Axios
- Hosted on :contentReference[oaicite:0]{index=0}

## Run Locally

```bash
git clone https://github.com/Kumarharsh1/Stock-Market-Portfolio-backend.git
cd Stock-Market-Portfolio-backend
npm install
cp .env.example .env
npm run dev


Server will run at:
http://localhost:5000

Environment Variables

Create a .env file using .env.example

ALPHA_VANTAGE_KEY=your_key_here
TWELVE_DATA_KEY=your_key_here
PORT=5000


API keys are optional.
If APIs fail, fallback data is used.

API Data Notes

Yahoo Finance and Google Finance do not provide free APIs

Used:

Alpha Vantage (main)

Twelve Data (backup)

Data is cached for 5 minutes to avoid rate limits

Folder Structure
backend/
├── src/
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md

Author

Kumar Harsh
Phone: 9279157296
GitHub: https://github.com/Kumarharsh1

Built for Octa Byte AI case study.


---

