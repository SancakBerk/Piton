import Aboutus from "./components/Aboutus";
import Header from "./components/header";
import Info from "./components/Info";
import Proposal from "./components/Proposal";

export default function Home() {
  return (
    <main className="font-pitonfon ">
      <Header />
      <Aboutus />
      <Info />
      <Proposal />
    </main>
  );
}
