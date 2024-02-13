import { useState } from "react";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import Input from "src/components/FormComponents/Input";
import { Declaration } from ".";

type ItemProps = {
  item: Declaration;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  errors: FieldErrors<any>;
};

const Item = ({ item, register, watch, errors }: ItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className="flex justify-between pt-[16px] pr-[74px] pb-[8px] pl-[25px] text-[14px]"
      key={item.key}
    >
      <p className="text-[#667085]">{item.label}</p>
      <div className="flex gap-x-[10px]">
        {isEdit ? (
          <Input register={register} name={item.key} errors={errors} />
        ) : !!watch(item.key) ? (
          watch(item.key)
        ) : (
          "--"
        )}
        <img
          src="/svg/edit.svg"
          alt="edit"
          width="21.44px"
          height="20px"
          className="cursor-pointer"
          onClick={() => setIsEdit(!isEdit)}
        />
      </div>
    </div>
  );
};

export default Item;
