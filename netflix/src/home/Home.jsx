import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/featured";
import List from "../components/list/List";
import TopRateList from "../components/list/TopRateList";
import TopList from "../components/TopList/TopList";
import TVsList from "../components/list/TVsList";


function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List/>
      <TVsList />
      <TopRateList />
    </div>
  );
}

export default Home;
