import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex, RadioGroup, Stack } from "@chakra-ui/react";

import Title from "../../components/Title";
import MainButton from "../../components/MainButton";
import Radio from "../../components/CustomRadio";

function Step3() {
  const goals = ["Lose weight", "Build muscle", "Stay healthy"];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(d: any) {
    if (Object.keys(errors).length === 0) {
      navigate("./final");
    }
  }
  return (
    <form style={{ height: "100%" }}>
      <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
        <Title Text="What is your fitness goal?" />

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
            title={"Back"}
            disabled={false}
            isBack={true}
            func={() => navigate(-1)}
          />
          <MainButton
            title={"Next"}
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