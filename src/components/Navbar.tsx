import Button from "./Button"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100]">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
      <div>
        <Button>Sign In</Button>
        <Button variant="Sign Up">Sign Up</Button>
      </div>
    </div>
  )
}

export default Navbar