import Chapter from "./Chapter";
import Declaration from "./Declaration";
import NotDeducted from "./NotDeducted";
import Section from "./Section";
import TaxRegime from "./TaxRegime";

const Home = () => {
  return (
    <div className="flex items-center justify-center text-[16px] mb-[142px]">
      <div className="w-[77.44%]">
        <Chapter />
        <NotDeducted />
        <Declaration />
        <TaxRegime />
        <Section />
      </div>
    </div>
  );
};

export default Home;
