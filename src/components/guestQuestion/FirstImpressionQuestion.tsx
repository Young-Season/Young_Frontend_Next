import React from "react";
import QuestionContent from "../layout/QuestionContent";
import { firstImpressionArray } from "../utils/questionArray";
import { QuestionBtn } from "@/styles/questionStyle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { useQuestionStore } from "@/store/question";
import { ReducerProps } from "@/types/Treducer";
import SurveyImageCompo from "../utils/SurveyImageCompo";

const FirstImpressionQuestion = (props: ReducerProps) => {
  const testName = "루씨";
  const changeQuestion = useQuestionStore.use.changeQuestion();
  return (
    <>
      <SurveyImageCompo />
      <QuestionContent
        children2={firstImpressionArray.map((e, idx) => {
          return (
            <QuestionBtn
              key={e}
              onClick={() => {
                changeQuestion(3, idx);
                props.dispatch({ type: "PLUS" });
              }}
            >
              {e}
            </QuestionBtn>
          );
        })}
      >
        <>
          {testName}
          {useGetSuffix(testName, 4)}
          <br />
          처음 봤을 때
        </>
      </QuestionContent>
    </>
  );
};

export default FirstImpressionQuestion;
