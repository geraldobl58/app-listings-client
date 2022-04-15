import styled from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  margin: 50px auto;
  border-radius: 3px;
  background-color: #fff;
`

export const Content = styled.div`
  padding: 50px;

  input:disabled,
  button:disabled {
    cursor: not-allowed;
  }

  .input {
    width: 100%;
    border: none;
    box-shadow: 0px 0px 3px #ccc;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;

    font-family: 'Montserrat', sans-serif;
  }

  input[type='text'] {
    width: 100%;
    border: none;
    box-shadow: 0px 0px 3px #ccc;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;

    font-family: 'Montserrat', sans-serif;
  }

  select {
    width: 100%;
    border: none;
    box-shadow: 0px 0px 3px #ccc;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;

    font-family: 'Montserrat', sans-serif;
  }

  textarea {
    width: 100%;
    height: 200px;
    border: none;
    box-shadow: 0px 0px 3px #ccc;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;

    font-family: 'Montserrat', sans-serif;
  }

  input[type='checkbox'] {
    margin-bottom: 15px;
  }

  button {
    border: none;
    width: 100%;
    padding: 20px;
    margin: 20px 0;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;

    font-family: 'Montserrat', sans-serif;
  }
`

export const Title = styled.div`
  font-size: 14px;
`
