export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl text-black">Samuel Gutiérrez Calle</span>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-black hover:text-blue-700 transition">Home</a>
          <a href="#about" className="text-black hover:text-blue-700 transition">About</a>
          <a href="#projects" className="text-black hover:text-blue-700 transition">Projects</a>
          <a href="#skills" className="text-black hover:text-blue-700 transition">Skills</a>
          <a href="#contact" className="text-black hover:text-blue-700 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
