import useHomePage from "../../src/hooks/useHomePage";
import NavigationStore from "../../src/store/NavigationStore";
import HomeComponent from "./components/HomeComponent";

function Home() {
  const address = process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY || "";

  const { assets, collections } = useHomePage();

  NavigationStore.active("MyCollection");

  return (
    <HomeComponent
      assets={assets}
      collections={collections}
      address={address}
    />
  );
}

export default Home;
