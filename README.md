# 💸 Spendix - Your Personal Finance Manager

**Spendix** is a powerful and intuitive financial management application designed to help you take control of your
money. Whether you're budgeting, tracking expenses, or monitoring investments — Spendix gives you the tools you need in
one place.

## ✨ Features

- 🏦 **Multi-Account Management**
    - Add and manage accounts: cash, cards, bank, crypto, and more.
    - Support for multiple currencies with automatic exchange rate updates.

- 💸 **Smart Transactions**
    - Add income, expenses, and transfers across accounts.
    - Categorize your spending for easy insights.
    - Real-time currency conversion and stock price integration.

- 📊 **Dynamic Dashboard**
    - Fully customizable dashboard with widgets.
    - Quick filters by date, category, account, or currency.
    - Visual breakdowns of spending, income, investments, and net worth.

- 🎯 **Budgeting Made Simple**
    - Set up monthly/weekly/daily budgets by category.
    - Get alerts when you're close to overspending.
    - Track performance against goals in real time.

- 📈 **Market Integration**
    - Automatic updates of currency exchange rates.
    - Real-time stock price tracking for investment portfolios.

- 🧩 **Cross-Platform**
    - Available on Web, iOS, Android, and Desktop (macOS/Windows/Linux).

## 🛠️ Tech Stack

- **Frontend**: React, React Native (via Expo)
- **Backend**: Firebase
- **Authentication**: Firebase (OAuth, Google Sign-In, etc.)
- **Database**: Firestore
- **CI/CD**: GitHub Actions
- **Others**: Docker, Currency & Stock APIs

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Docker (for local development)
- Firebase project setup
- Expo CLI (for mobile development)

### Frontend (Web & Mobile)

```bash
git clone https://github.com/norison/spendix.git
cd spendix

# Install dependencies
npm install

# Run Expo app
npx run start