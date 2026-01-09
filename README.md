# User Management System

A modern, minimal user management application built with Next.js 16, Drizzle ORM, and PostgreSQL. Features a clean interface for performing CRUD operations with real-time updates.

## Overview

This application demonstrates best practices for building full-stack Next.js applications with server actions, database integration, and a responsive UI. The project implements a complete user management system with create, read, and delete operations.

## Features

- **Server Actions**: Leverages Next.js Server Actions for seamless server-side operations
- **Real-time Updates**: Automatic page revalidation after data mutations
- **Database Integration**: PostgreSQL database with Drizzle ORM for type-safe queries
- **Responsive Design**: Minimal, elegant UI built with Tailwind CSS and shadcn/ui components
- **Type Safety**: Full TypeScript support throughout the application
- **Modern Stack**: Built with the latest Next.js 16 and React 19

## Tech Stack

### Core
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **Drizzle ORM 0.45.1** - TypeScript ORM for PostgreSQL
- **PostgreSQL** - Relational database (via Neon)

### UI Components
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Additional Libraries
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **date-fns** - Date manipulation
- **next-themes** - Theme management

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL database (local or hosted)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory:
```env
DATABASE_URL=your_postgresql_connection_string
```

For Neon Database, your connection string should look like:
```
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
```

4. Push the database schema:
```bash
npx drizzle-kit push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── actions/               # Server Actions
│   └── index.js          # User CRUD operations
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── user-form.jsx     # User creation form
│   └── user-list.jsx     # User list display
├── schema/                # Database schema
│   └── index.js          # Drizzle schema definitions
├── lib/                   # Utility functions
│   ├── db.js             # Database connection
│   └── utils.js          # Helper functions
├── drizzle/               # Database migrations
├── drizzle.config.js      # Drizzle configuration
└── package.json           # Dependencies and scripts
```

## Database Schema

The application uses a single `users` table with the following structure:

```javascript
{
  id: serial (primary key),
  name: text (required),
  email: text (required, unique),
  isActive: boolean (default: true),
  createdAt: timestamp (default: now),
  updatedAt: timestamp (default: now)
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx drizzle-kit push` - Push schema changes to database
- `npx drizzle-kit studio` - Open Drizzle Studio for database management

## Server Actions

The application implements the following server actions:

### `createUser(formData)`
Creates a new user with name and email.

### `getAllUsers()`
Retrieves all users from the database.

### `getUserById(id)`
Fetches a specific user by ID.

### `updateUser(id, formData)`
Updates user information including active status.

### `deleteUser(id)`
Removes a user from the database.

## UI Components

### UserForm
A form component for creating new users with validation and minimal styling.

### UserList
Displays all users in a clean, card-based layout with hover effects and delete functionality.

## Styling

The application uses a minimal, elegant design philosophy:

- Clean white background
- Subtle border-based cards
- Hover interactions for better UX
- Light typography with proper hierarchy
- Responsive grid layout
- Dark mode support via next-themes

## Database Management

### Using Drizzle Studio

Access the visual database management tool:
```bash
npx drizzle-kit studio
```

### Schema Changes

After modifying the schema in `schema/index.js`:
```bash
npx drizzle-kit push
```

### Migrations

Generate migrations for production:
```bash
npx drizzle-kit generate
```


## Environment Variables

Required environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host/db` |

## Best Practices

This project follows Next.js and React best practices:

- Server Components by default for optimal performance
- Server Actions for data mutations
- Proper error handling and loading states
- Accessible UI components from Radix UI
- Type-safe database queries with Drizzle ORM
- Responsive design with mobile-first approach

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request


## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Database ORM by [Drizzle](https://orm.drizzle.team)
- Icons by [Lucide](https://lucide.dev)

## Support

For issues and questions, please open an issue in the repository.
