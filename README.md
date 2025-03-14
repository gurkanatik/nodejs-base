# Node.js Base Project

A lightweight and well-structured Node.js base project with Express, EJS templating, and error handling middleware.

## Features

- **Express.js Framework**: Fast, unopinionated, minimalist web framework for Node.js
- **EJS Templating**: Simple templating language for generating HTML markup
- **Error Handling**: Comprehensive error handling and logging system
- **MVC Structure**: Organized using Model-View-Controller pattern
- **Development Tools**: ESLint with Prettier for code quality and Nodemon for hot reloading
- **Database Support**: PostgreSQL with Sequelize ORM for database operations

## Project Structure

```
nodejs-base/
├── app.js                          # Main application entry point
├── config/                         # Configuration files
│   └── db.js                       # Sequelize database configuration
├── controllers/                    # Route controllers
│   └── homeController.js           # Home page controller
├── middlewares/                    # Express middlewares
│   ├── errorLoggerMiddleware.js    # Error logging middleware
│   └── notFoundMiddleware.js       # 404 handler middleware
├── models/                         # Sequelize models
├── routes/                         # Express routes
│   └── index.js                    # Main routes definition
├── views/                          # EJS view templates
│   ├── 404.ejs                     # 404 page template
│   └── index.ejs                   # Home page template
├── logs/                           # Error logs (auto-generated)
├── .env                            # Environment variables
├── .env.example                    # Example environment variables
├── package.json                    # Project dependencies and scripts
├── nodemon.json                    # Nodemon configuration
└── eslint.config.js                # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js (v14.x or higher recommended)
- npm (v6.x or higher recommended)
- PostgreSQL (v12.x or higher recommended)

### Installation

1. Clone the repository:

   ```
   git clone git@github.com:gurkanatik/nodejs-base.git
   cd nodejs-base
   cp .env.example .env
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Configure your database:
   - Create a PostgreSQL database
   - Update the `.env` file with your database credentials:
     ```
     DB_DIALECT=postgres
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=your_database_name
     DB_USER=your_username
     DB_PASS=your_password
     ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start the development server with Nodemon for hot reloading
- `npm run lint` - Run ESLint to check code quality

## Database Configuration

The project uses Sequelize ORM for database operations:

- **Configuration**: Located in `config/db.js`
- **Models**: Create your Sequelize models in the `models/` directory
- **Auto Sync**: Database tables are automatically synced on application start
- **Environment Variables**: Database connection details are stored in `.env`

Example of creating a Sequelize model:

```javascript
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

export default User;
```

## Error Handling

The project includes a robust error handling system:

- All errors are logged to daily log files in the `logs/` directory
- 404 errors are handled with a custom page
- Unhandled exceptions are caught and logged
