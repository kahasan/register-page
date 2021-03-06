import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex, RadioGroup, Stack } from "@chakra-ui/react";

import Title from "../../components/Title";
import MainButton from "../../components/MainButton";
import Radio from "../../components/CustomRadio";

import { useTranslation } from "react-i18next";

import { InfoContext } from "../../context/InfoProvider";

function Step3() {
  const { addInfo } = React.useContext(InfoContext);
  const { t } = useTranslation();
  const goals = [
    t("STEP_3.GOALS.GOAL_1"),
    t("STEP_3.GOALS.GOAL_2"),
    t("STEP_3.GOALS.GOAL_3"),
  ];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(value: any) {
    if (Object.keys(errors).length === 0) {
      addInfo({ goal: value.goal });
      navigate("./register");
    }
  }
  return (
    <form style={{ height: "100%" }}>
      <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
        <Title Text={t("STEP_3.TITLE")} />

        <RadioGroup>
          <Stack direction="column">
            {goals.map((goal) => {
              const word = goal.split(" ");
              const url = `/${word[1]}.png`;
              return <Radio register={register} label={goal} imgSrc={url} />;
            })}
          </Stack>
        </RadioGroup>

        <Flex justifyContent={"space-between"}>
          <MainButton
            title={t("BUTTON.BACK")}
            disabled={false}
            isBack={true}
            func={() => navigate(-1)}
          />
          <MainButton
            title={t("BUTTON.NEXT")}
            disabled={false}
            isBack={false}
            func={handleSubmit(onSubmit)}
          />
        </Flex>
      </Flex>
    </form>
  );
}

export default React.memo(Step3);
