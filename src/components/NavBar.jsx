function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
        <a href="#hero" className="hover:text-gray-300">
          <i className="fa-brands fa-apple"></i>
        </a>
        <a href="#design" className="hover:text-gray-300">
          Design
        </a>
        <a href="#performance" className="hover:text-gray-300">
          Performance
        </a>
        <a href="#camera" className="hover:text-gray-300">
          Camera
        </a>
        <a href="#cores" className="hover:text-gray-300">
          Cores
        </a>
        <a
          href="#comprar"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full inline-block"
        >
          Comprar
        </a>
        
      </div>
    </nav>
  );
}

export default NavBar;
