import styled from "styled-components"

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 70%;
  margin: 0 auto;
  padding: 1em;

  .index-title {
    display: block;
    width: 100%;
  }
`
export const BioWrap = styled.div`
  font-family: "Helvetica Neue";
  font-size: 2em;
  font-weight: 900;

  strong {
    color: #ed2b49;
  }
  section {
    display: flex;
    margin: 1em 0;
    justify-content: center;
    a {
      padding: 0 0.5em;
    }
  }
`

export const BioLayout = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Cross = styled.span`
  background: red;
  height: 25px;
  position: relative;
  width: 5px;
  animation: cross-spin 15s infinite 0s linear;
  z-index: -10;

  :after {
    background: red;
    content: "";
    height: 5px;
    left: -10px;
    position: absolute;
    top: 10px;
    width: 25px;
  }

  @keyframes cross-spin {
    0% {
      transform: rotate(0deg);
      transform-origin: 50% 50%;
      opacity: 0.8;
    }
    25% {
      transform: rotate(90deg);
      transform-origin: 50% 50%;
    }
    50% {
      transform: rotate(180deg);
      transform-origin: 50% 50%;
    }
    75% {
      transform: rotate(270deg);
      transform-origin: 50% 50%;
      opacity: 0.8;
    }
    100% {
      transform: rotate(360deg);
      transform-origin: 50% 50%;
      opacity: 0.6;
    }
  }
  @media (max-width: 680px) {
    display: none;
  }
`
export const Donut = styled.span`
  border: 10px solid #ffde23;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  position: relative;
  top: 30%;
  left: 80%;
  animation: hover-animate 10s infinite 0s linear;
  z-index: -20;

  @keyframes hover-animate {
    0% {
      transform: translateY(5%);
    }
    20% {
      transform: translateY(40%);
    }
    49% {
      transform: translateY(-20%);
    }
    69% {
      transform: translateY(60%);
    }
    90% {
      transform: translateY(10%);
    }
  }

  @media (max-width: 680px) {
    display: none;
  }
`
export const Triangle = styled.span`
  width: 0;
  height: 0;
  position: absolute;
  top: 40%;
  left: 35%;
  z-index: -10;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #6c5491;
  animation: triangle-spin 15s infinite 0s linear;

  @keyframes triangle-spin {
    0% {
      transform: rotate(0deg);
    }
    11% {
      transform: rotate(90deg) translateY(20%);
      transform-origin: 50% 50%;
    }
    26% {
      transform: rotate(100deg) translateX(-30%) translateY(10%);
    }
    39% {
      transform: rotate(160deg) translateX(10%) translateY(-35%);
      transform-origin: 50% 50%;
      opacity: 50%;
    }
    51% {
      transform: rotate(270deg) translateY(-15%);
      opacity: 30%;
    }
    66% {
      transform: rotate(300deg) translateX(-80%) translateY(-40%);
      transform-origin: 50% 50%;
    }
  }

  @media (max-width: 680px) {
    display: none;
  }
`
export const PostContainer = styled.div`
  background: "#fff";
  min-width: 300px;
  max-width: 300px;
  margin: 1em;
  border-radius: 5px;
  transition: 0.5s ease;
  color: #17003a;

  div.pad {
    padding: 1em;
    box-sizing: border-box;
  }

  .tags {
    font-size: 0.75em;
    margin: none;
    color: #848189;
  }

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  }

  h3 {
    border-left: 6px solid #17003a;
    padding-left: 0.5em;
    font-weight: 900;
    color: #17003a;
  }
`

export const ExtraLayout = styled.div`
  width: 100%;
`
export const ResearchLayout = styled.div`
  display: block;
  margin: 1em 0;

  section {
    margin: 1em 0;
    padding-left: 1em;
  }
  span.date {
    font-size: 0.75em;
    font-weight: 400;
  }
  span {
    display: block;
    margin: 0;
  }
  a {
    display: block;
    color: blue;
  }
  h2 {
    border-left: 6px solid #17003a;
    padding-left: 0.5em;
  }
`
