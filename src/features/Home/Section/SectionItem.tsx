import { useState } from "react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { ResultSectionType } from ".";
import Item from "./Item";

type SectionItemProps = {
  section: ResultSectionType;
  control: Control;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  errors: FieldErrors<any>;
};

const SectionItem = ({
  section,
  register,
  watch,
  errors,
  control,
}: SectionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex justify-between mt-[17px] p-[20px] bg-[#F4F6FA]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-x-[9px]">
          <img src={section.imgSrc} alt={section.imgSrc} />
          <p className="text-[18px] text-[#344054]">Section {section.name}</p>
        </div>
        <img
          src="/svg/arrow.svg"
          alt="arrow"
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 330ms ease-in-out",
          }}
        />
      </div>

      {isOpen && (
        <div
          className="border-[1px] border-[#E6E9EE] transition-all duration-[500ms] ease-in-out delay-200"
          style={{
            transition: "transform 330ms ease-in-out",
          }}
        >
          <div className="flex justify-between pt-[16px] pr-[74px] pb-[8px] pl-[25px] border-b-[1px] border-[#E6E9EE] text-[14px]">
            item
            <p>Amount (in INR)</p>
          </div>

          {/* Section Items */}
          {section.items.map((item) => (
            <Item
              item={item}
              register={register}
              watch={watch}
              errors={errors}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionItem;
