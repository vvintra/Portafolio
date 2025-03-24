export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b border-foreground py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold uppercase tracking-wider">
          <span className="text-primary">L</span>
          <span className="text-secondary">A</span>
        </a>
      </div>
    </nav>
  )
}

