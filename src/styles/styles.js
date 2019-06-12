import styled from "styled-components"

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  padding: 1em;
`
export const BioWrap = styled.div`
  font-family: "Helvetica Neue";
  font-size: 2.5em;
  font-weight: 900;
  strong {
    color: #ed2b49;
  }
  section {
    font-size: 14px;
  }
`

export const BioLayout = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PostContainer = styled.div`
  background: "#fff";
  min-width: 260px;
  max-width: 300px;
  margin: 1em;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);

  section {
    padding: 1em;
  }

  span.tags {
    display: flex;
    justify-content: flex-end;
    font-size: 0.5em;
    color: #011936;
  }
`
