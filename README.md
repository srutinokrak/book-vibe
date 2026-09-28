# Book Vibe

Book Vibe is a book discovery and reading-list app built with Next.js. Browse a collection of books, view their details, add books to your read list or wishlist, and compare read-book page counts in a chart.

## Features

- Browse the book collection and open individual book details.
- Add books to the read list or wishlist.
- View and sort listed books by rating, page count, or publication year.
- See read books represented in a page-count chart.
- Browse book covers and the home-page banner image.

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 and daisyUI 5
- Recharts for the read-books chart
- React Toastify for action notifications

## Getting Started

### Requirements

- Node.js 20.9 or later
- npm

### Install

```bash
npm install
```

### Configure the book data URL

The book pages request `booksData.json` from the base URL in the `NEXT_PUBLIC_Server_Base_Url` environment variable. For local development, create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_Server_Base_Url=http://localhost:3000
```

The repository includes the data file at `public/booksData.json`, which Next.js serves at `http://localhost:3000/booksData.json` while the development server is running. Set the same variable to the deployed app's base URL in your hosting environment.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Start the production server. Run this after building. |
| `npm run lint` | Run ESLint. |

## Pages

| Path | Description |
| --- | --- |
| `/` | Home page with a featured banner and a selection of books. |
| `/books` | Full book collection. |
| `/books/[id]` | Details and reading-list actions for a book. |
| `/listed-books` | Read list and wishlist, with sorting controls. |
| `/read-books` | Chart of books in the read list by page count. |

## Project Structure

```text
public/
	booksData.json          # Book collection data
src/
	app/                    # App Router pages and loading states
	assets/                 # Local banner and logo assets
	components/             # Page and shared UI components
	context/                # Shared read-list and wishlist state
	types/                  # TypeScript book model
```

## Data and State

Book records are stored in `public/booksData.json`. Read-list and wishlist selections are held in the app's React context; they are not saved to a database or browser storage and reset when the app is reloaded.

## Deployment

Deploy the app to any platform that supports Next.js. Configure `NEXT_PUBLIC_Server_Base_Url` to the public base URL that serves `booksData.json`, then build and start the app using the production scripts above. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific guidance.
