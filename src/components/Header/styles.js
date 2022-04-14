import styled from 'styled-components'

export const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  padding: 10px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  a {
    color: #222;
    font-weight: 400;
    font-size: 36px;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const Navigation = styled.nav`
  ul {
    list-style-type: none;

    display: flex;
    align-items: center;

    li {
      button {
        border: none;
        cursor: pointer;
        background: transparent;
      }

      a,
      button {
        color: #222;
        font-weight: 800;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;

        margin-right: 20px;

        &.button {
          background: #1e0e00;
          padding: 10px;
          border-radius: 3px;
          color: #fff;

          &:hover {
            background: #3e3e3e;
          }
        }
      }
    }
  }
`
