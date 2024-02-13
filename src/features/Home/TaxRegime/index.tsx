const TaxRegime = () => {
  return (
    <div className="flex justify-between pl-[40px] pr-[31px] pt-[16px] bg-[#F4F6FA] mb-[58px]">
      <div className="w-[50%]">
        <div className="flex text-[16px]">
          Tax Regime :
          <div className="flex gap-x-[4px]">
            <p>Old</p>
            <img src="/svg/switch.svg" alt="switch" />
            Change
          </div>
        </div>
        <div className="flex gap-x-[10px]">
          {/* <img src="/svg/coins.svg" alt="coins" /> */}
          <p className="text-[#10AA64]">
            Considering your salary structure we feel that Old Regime suits you
            the best. Although you can move to other tax regime if you want
          </p>
        </div>
      </div>
      <img src="/svg/coins.svg" alt="coins" />
    </div>
  );
};

export default TaxRegime;
