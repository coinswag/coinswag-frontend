function NavBar() {
  return (
    <nav className="fixed top-0 left-0 h-[10vh] flex justify-between items-center w-full px-8">
      <span className="flex justify-center items-center text-primary font-black uppercase text-xl">
         Coinswag 
      </span>
      <div className="[&>a]:text-sm gap-10 flex items-center">
         <a href="">Home</a>
         <a href="">Merchandise</a>
         <a href="">About</a>
      </div>
    </nav>
  )
}
export default NavBar