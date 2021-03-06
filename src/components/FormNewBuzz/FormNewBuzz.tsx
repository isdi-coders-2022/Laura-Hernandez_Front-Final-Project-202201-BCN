import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addNewBuzzThunk } from "../../redux/thunks/buzzsThunk";
import {
  ButtonSubmitContainer,
  ContainerFormNewBuzz,
} from "../../styles/globalStyledComponents";
import { BuzzBasic } from "../../types/buzzInterfaces";
import ButtonDisabled from "../Buttons/ButtonDisabled";
import ButtonSubmit from "../Buttons/ButtonSubmit";

const FormNewBuzz = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [topicValue, setTopicValue] = useState<string>("general");
  const [messageValue, setMessageValue] = useState<string>("");

  const resetForm = () => {
    setTopicValue("general");
    setMessageValue("");
  };

  const buzzToCreate: BuzzBasic = {
    topic: topicValue,
    text: messageValue,
  };

  const goToHomePage = () => {
    navigate("/home");
  };

  const onSubmitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(addNewBuzzThunk(buzzToCreate));
    resetForm();
    setTimeout(goToHomePage, 500);
  };

  const onChangeTopic = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setTopicValue(event.target.value);
  };

  const onChangeMessage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMessageValue(event.target.value);
  };

  return (
    <ContainerFormNewBuzz className="container">
      <form onSubmit={onSubmitForm} autoComplete="off">
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="topicBuzz">
            Topic
          </label>
          <select
            className="form-select"
            id="topicBuzz"
            defaultValue="general"
            onChange={onChangeTopic}
          >
            <option value="general">General</option>
            <option value="resources">Resources</option>
            <option value="playtime">PlayTime</option>
            <option value="events">Events</option>
            <option value="jobs">Jobs</option>
          </select>
        </div>

        <div className="form-floating">
          <InputMessage
            className="form-control"
            placeholder="Leave a comment here"
            id="messageBuzz"
            type="text"
            value={messageValue}
            onChange={onChangeMessage}
          ></InputMessage>
          <label htmlFor="messageBuzz">Writte your buzz here...</label>
        </div>
        {messageValue.length > 2 && messageValue.length < 201 ? (
          <ButtonSubmitContainer>
            <ButtonSubmit className={"btn-primary"} text={"Buzz It!"} />
          </ButtonSubmitContainer>
        ) : (
          <ButtonSubmitContainer>
            <ButtonDisabled
              className={"btn btn-outline-secondary"}
              text={"Buzz It!"}
            />
          </ButtonSubmitContainer>
        )}
      </form>
    </ContainerFormNewBuzz>
  );
};

const InputMessage = styled.input`
  word-break: break-all;
`;

export default FormNewBuzz;
