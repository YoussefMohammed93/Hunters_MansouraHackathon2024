import { Navbar } from "../home/_components/navbar";
import { Footer } from "./_components/footer";
import { Main } from "./_components/main";
import { Map } from "./_components/map";
import { SearchBar } from "./_components/search";

export default function Passenger() {
  return (
    <>
      <Navbar />
      <Map />
      <SearchBar />
      <Main />
      <Footer />
    </>
  );
}
