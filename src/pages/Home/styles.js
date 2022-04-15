import styled from 'styled-components'

export const Container = styled.section``

export const Content = styled.div`
  width: 1000px;
  margin: 50px auto;
`

export const Search = styled.div`
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  background-color: #157d8b;
  margin-bottom: 50px;

  input {
    width: 73%;
    border: none;
    box-shadow: 0px 0px 3px #ccc;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 15px;
    margin-left: 15px;

    font-family: 'Montserrat', sans-serif;
  }

  select {
    width: 10%;
    border: none;
    box-shadow: 0px 0px 3px #ccc;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;

    font-family: 'Montserrat', sans-serif;
  }

  button {
    margin-left: 15px;
    border: none;
    padding: 18px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;

    font-family: 'Montserrat', sans-serif;
  }
`

export const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    color: #222;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #585858;
    }

    strong {
      margin-left: 10px;
    }
  }
`

export const Recents = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`

export const AllLink = styled.div`
  text-align: center;
  margin-top: 50px;

  a {
    display: block;
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    text-transform: uppercase;
    background-color: #157d8b;
  }
`

export const Title = styled.h1`
  color: #222;
  font-size: 32px;
  font-weight: 700;
`

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
