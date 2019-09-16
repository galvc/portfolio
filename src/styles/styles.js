import styled from "styled-components"

//color variables
export const red = "#ed2b49"
export const darkblue = "#17003a"
export const gray = "#848189"
export const blue = "#364cc7"
export const brightblue = "#0072ff"

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 90%;
  margin: 0 auto;
  padding: 1em;
`

export const BioContainer = styled(Container)`
  display: block;
  text-align: center;
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  width: 100%;

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
    color: ${red};
  }

  section.bio__social {
    display: flex;
    margin: 1em 0;
    justify-content: center;
    color: ${brightblue};

    a {
      padding: 0 0.5em;
    }
  }
`

export const BioLayout = styled.div``

export const BioSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "design develop goals";

  span.bio__design {
    grid-area: design;
  }

  span.bio__develop {
    grid-area: develop;
  }

  span.bio__goals {
    grid-area: goals;
  }
`

export const PostContainer = styled.div`
  background: "#fff";
  border-radius: 5px;
  transition: 0.5s ease;
  color: ${darkblue};
  height: 25em;

  div.card__wrap {
    margin: 1em;

    .card__image {
      height: 240px;
      width: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 0 1em 0.5em 0;
    }
    .card__details {
      color: ${gray};

      h2 {
        margin-bottom: 0;
        color: ${brightblue};

        :hover {
          text-decoration: underline;
        }
      }

      p {
        margin: 0;
        line-height: 1.5;
      }

      .text__tag {
        font-size: 0.9em;
        margin-bottom: 0.5em;
      }

      .text__desc {
        font-weight: 300;
      }
      &:hover,
      p:hover {
        cursor: pointer;
        color: ${brightblue};
      }
    }
  }
`

export const ExtraLayout = styled.div`
  width: 100%;
`
export const ResearchLayout = styled.div`
  display: block;
  margin: 1em 0;

  .post__grid {
    display: grid;
    grid-template-columns: 0.8fr 2fr;
    grid-template-areas: "title excerpt";
    grid-column-gap: 0.75em;
    margin: 1.5em 1em;
  }

  .post__title {
    grid-area: title;
  }

  .post__excerpt {
    grid-area: excerpt;
  }

  .post__read-more {
    border-left: 3px solid ${blue};
    font-size: 0.75em;
    font-weight: 600;
    text-transform: uppercase;
    padding-left: 0.5em;
    line-height: 3em;
  }

  .post__read-more:hover {
    border-color: ${brightblue};
  }

  @media (max-width: 640px) {
    .post__grid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(1, 2fr);
      grid-template-areas:
        "title"
        "excerpt";
    }
  }
`
