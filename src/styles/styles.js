import styled from "styled-components"

//color variables
export const red = "#ed2b49"
export const darkblue = "#17003a"
export const gray = "#848189"
export const blue = "#364cc7"
export const brightblue = "#0072ff"
export const slateblue = "#736CED"

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 80%;
  margin: 0 auto;
  padding: 1em;

  @media screen and (max-width: 768px) {
    max-width: 95%;
  }
`

export const BioContainer = styled(Container)`
  display: block;
  text-align: center;
`

export const ProjectContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1em;
  }
`
export const BioWrap = styled.div`
  font-family: "Helvetica Neue";
  font-size: 2em;

  strong {
    font-weight: 900;
  }
  .highlight {
      display: block;
      text-align: center;
    color: ${red};
  }

  section.bio__social {
    display: flex;
    margin: 1em 0 0 0;
    justify-content: center;
    color: ${brightblue};

    a {
      padding: 0 0.5em;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`

export const BioLayout = styled.div``

export const PostContainer = styled.div`
  background: "#fff";
  color: ${darkblue};
  height: 25em;
  line-height: 1.5;

  div.card__wrap {
    margin: 1em;

    .card__image {
      height: 260px;
      width: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 0 0 1em 0;
      transition: 0.7s ease;

      &:hover {
        box-shadow: 6px 8px 0px ${blue};
      }
    }
    h2 {
      color: ${gray};
      margin-bottom: 0.25em;
    }

    .text__tag {
      font-size: 0.9em;
      text-transform: uppercase;
      margin-bottom: 0.5em;
    }

    &:hover h2 {
      color: ${brightblue};
    }
  }
`

export const BlogLayout = styled.div`
  display: inline-block;
  float: left;
  width: 50%;
  margin: 0 1em;


  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0;
  }
`

export const ExtraLayout = styled.div`
  display: inline-block;
  float: left;
  width: 40%;
  margin: 0 1em;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0;
  }
`

export const MenuContainer = styled.div`
    width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0;
  text-transform: uppercase;

  a {
      color: initial;
  }

`
export const Box = styled.div`
  background: ${slateblue};
  margin-bottom: 1em;
  padding: 5%;

  h2,
  p {
    color: white;
  }

  p {
      margin: 0;
  }

  a,
  a:visited {
    color: white;
    text-decoration: underline;
  }
`
