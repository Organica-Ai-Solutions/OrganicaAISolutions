# Tanda Circles

A modern platform for managing savings groups and community finance.

## Features

- Group Management
  - Create and join savings groups
  - Set contribution schedules
  - Track member payments
  - Automated payout calculations

- Payment System
  - Secure payment processing
  - Payment history tracking
  - Automated reminders
  - Multiple payment methods

- Community Features
  - Group chat
  - Event planning
  - Document sharing
  - Member profiles

## Tech Stack

- Frontend:
  - React with TypeScript
  - Tailwind CSS
  - Redux Toolkit
  - React Query

- Backend:
  - Node.js with Express
  - PostgreSQL
  - Prisma ORM
  - JWT Authentication

- Payment Integration:
  - Stripe
  - M-Pesa
  - PayPal

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run development server: `npm run dev`

## Project Structure

```
tanda-circles/
├── src/
│   ├── components/
│   │   ├── groups/
│   │   ├── payments/
│   │   └── shared/
│   ├── pages/
│   ├── features/
│   ├── services/
│   └── utils/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
└── prisma/
    └── schema.prisma
```

## Contributing

Please read our contributing guidelines before submitting pull requests. 