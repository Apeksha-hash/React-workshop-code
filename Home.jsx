import Navbar from "../component/Navbar";
import Card from "../component/Card";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="flex  justify-between flex-wrap p-5 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
</>

  );
}

export default Home;