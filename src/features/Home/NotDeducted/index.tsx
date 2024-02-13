const NotDeducted = () => {
  return (
    <div className="flex gap-x-[25px] pl-[47px] pt-[13px]  bg-red">
      <img src="/svg/notDeclared.svg" alt="notDeclared" />
      <div>
        <p className="text-[#96302A]">Amount Not Declared</p>
        <p className="text-[#C84038]">
          You will miss out on lot of tax benefits
        </p>
      </div>
    </div>
  );
};

export default NotDeducted;
