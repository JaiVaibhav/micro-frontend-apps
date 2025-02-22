import './globals.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
              <h1 className="text-xl font-bold">My Next.js App</h1>
              <div className="space-x-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/about" className="hover:underline">About</a>
              </div>
            </nav>
          </header>
  
          {/* Main Content */}
          <main className="flex-grow container mx-auto p-4">{children}</main>
  
          {/* Footer */}
          <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            &copy; {new Date().getFullYear()} My Next.js App
          </footer>
        </body>
      </html>
    );
  }
  