const Declaration = () => {
  return (
    <div className="pt-[22px] pb-[40px] pl-[40px]">
      Declaration
      <p>
        Upload proof for the declarations that you have done for the FY 2022-23
      </p>
      <div className="pt-[48px] flex gap-x-[53px]">
        <div className="flex gap-x-[16px]">
          <img
            src="/svg/declared.svg"
            alt="declared"
            className="bg-[#F2FFD6] rounded-[100%] p-[16px]"
          />
          <div>
            <p className="text-[16px]">Declared Amount</p>
            <p className="text-[20px] font-bold">67,987 INR</p>
          </div>
        </div>
        <div className="flex gap-x-[16px]">
          <img
            src="/svg/remaining.svg"
            alt="remaining"
            className="bg-[#D6EEFF] rounded-[100%] p-[16px]"
          />
          <div>
            <p className="text-[16px]">Remaining to Declare</p>
            <p className="text-[20px] font-bold">67,987 INR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Declaration;
