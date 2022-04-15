import styled from 'styled-components'

export const Container = styled.section``

export const Content = styled.div`
  width: 1000px;
  margin: 50px auto;

  display: flex;
  justify-content: space-between;
`

export const LeftSidebar = styled.div`
  width: 30%;
  background-color: #fff;

  padding: 10px;

  input:disabled,
  button:disabled {
    cursor: not-allowed;
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
  button {
    border: none;
    width: 100%;
    padding: 20px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;

    font-family: 'Montserrat', sans-serif;
  }
`

export const RightSidebar = styled.div`
  width: 65%;
  background-color: #fff;
`

export const CardContent = styled.div`
  display: flex;
`

export const TitleCard = styled.h1`
  font-size: 22px;
  padding: 20px;
`

export const Title = styled.div`
  font-size: 14px;
`

export const ListCategories = styled.div`
  margin-top: 10px;
  ul {
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 3px;
      color: #222;
      cursor: pointer;

      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }

      strong {
        font-size: 12px;
      }
    }

    .categoryItem:hover,
    .categoryItem.active {
      color: #fff;
      background-color: #222;
    }
  }
`

export const ListLoading = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`
