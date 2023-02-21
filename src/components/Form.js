import styled from "styled-components";

export default function Form({ onSubmit }) {
  function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { userName, userPassword } = Object.fromEntries(formData);

    onSubmit({ userName, userPassword });
    event.target.reset();
  }

  return (
    <FormStyled onSubmit={sendForm}>
      <label htmlFor="userName">Name:</label>
      <input id="userName" name="userName" required />

      <label htmlFor="userPassword">Password:</label>
      <input id="userPassword" name="userPassword" type="password" required />

      <button>Submit</button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: grid;
  gap: 10px;
`;
