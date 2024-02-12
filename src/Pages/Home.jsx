import Banner from "../Components/Shared/Banner";
import Benifits from "../Components/Shared/Benifits";

const Home = () => {
  return (
    <div>
      {/* functional component Banner to show banner */}
      <Banner />
      {/* functional component to show Benefits and Uses */}
      <Benifits />
    </div>
  );
};

export default Home;
