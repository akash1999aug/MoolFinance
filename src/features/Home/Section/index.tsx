import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "src/dataProvider";
import SectionItem from "./SectionItem";

type SectionType = "80C" | "80D" | "80G";

export type Declaration = {
  section: SectionType;
  amount: number;
  limit: number;
  label: string;
  key: string;
};

type ApiDeclaration = {
  [key in number]: Declaration;
};

type SectionImg = {
  [key in SectionType]: { imgSrc: string };
};

export type ResultSectionType = {
  name: string;
  imgSrc: string;
  items: Declaration[];
};

type ResultDeclaration =
  | {
      [key in SectionType]?: ResultSectionType;
    };

const sectionImg: SectionImg = {
  "80C": {
    imgSrc: "/svg/80C.svg",
  },
  "80D": {
    imgSrc: "/svg/80D.svg",
  },
  "80G": {
    imgSrc: "/svg/80G.svg",
  },
};

const Section = () => {
  const [declarations, setDeclarations] = useState<ResultDeclaration>({});

  const { register, control, handleSubmit, reset, watch, formState } = useForm({
    defaultValues: {},
  });

  const getFormValues = useCallback(
    (apiDeclaration: ApiDeclaration) =>
      Object.values(apiDeclaration).reduce(
        (acc, curr) => ({ ...acc, [curr.key]: curr.amount }),
        {}
      ),
    []
  );

  const manipulateDeclaration = useCallback(
    (apiDeclaration: ApiDeclaration) =>
      Object.values(apiDeclaration).reduce<ResultDeclaration>((acc, curr) => {
        const { section, ...rest } = curr;

        return {
          ...acc,
          [section]: {
            ...acc?.[section],
            name: section,
            imgSrc: sectionImg[section]?.imgSrc,
            items: [...(acc?.[section]?.items ?? []), rest],
          },
        };
      }, {}),
    []
  );

  useEffect(() => {
    const fetchDeclarations = async () => {
      const data = await fetcher()
        .get<ApiDeclaration>("/assignment/declarations")
        .then((res) => res)
        .catch((err) => err);

      reset(getFormValues(data?.data));

      const manipulatedRes = manipulateDeclaration(data?.data);

      setDeclarations(manipulatedRes);
    };

    fetchDeclarations();
  }, [getFormValues, manipulateDeclaration, reset]);

  const onFormSubmit = (data: any) => {
    console.log("🚀 ~ Section ~ data:", data);
    alert(`Input data is in Console, Inspect Element`);
  };

  const { errors, isValid } = formState;

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {Object.values(declarations).map((section) => (
        <SectionItem
          key={section.name}
          section={section}
          register={register}
          watch={watch}
          control={control}
          errors={errors}
        />
      ))}

      <button
        className="bg-[#405CD2] text-[#FFFFFF] mt-[70px] py-[10px] px-[16px] rounded-[8px]"
        type="submit"
        disabled={!isValid}
      >
        Save
      </button>
    </form>
  );
};

export default Section;
