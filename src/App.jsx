import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Admin from "./Pages/Admin";

export default function App() {
  return (
    <main className="bg-slate-300">
      <Navbar/>
      <Admin/>
    </main>
  )
}