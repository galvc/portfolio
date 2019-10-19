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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;

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
      font-weight: 600;
      font-size: 1.4em;
    color: ${red};
  }

  section.bio__social {
    display: flex;
    margin: 1em 0 0 0;
    justify-content: center;
    color: ${brightblue};

    a {
      padding: 0 0.5em;
      opacity: 0.8;
    }

    a:hover {
        opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5em;

    section.bio__social a {
        opacity: 1;
    }
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
      font-size: 0.8em;
      text-transform: uppercase;
        color: ${blue};
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

export const Header = styled.header`

    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:0 10%;
    box-sizing: border-box;
    span.title {
        font-size: 1.5em;
    }

     @media screen and (max-width: 768px) {
         display: block;
        padding: 1em;

         span.title {

         }
    }
`

export const MenuContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 1.5em 0;


    a {
        color: initial;
        height: 100%;
        padding: 0 2em;
    }
    a:hover {
        background: ${slateblue};
        color: white;
    }

    .menu {
        list-style: none;
        box-sizing: border-box;
        overflow: hidden;
        clear: none;
        max-height: none;
        display: flex;
        margin: 0;
        text-transform: uppercase;
        text-align: center;
    }

    menu li {
        margin: 0;
    }

    .menu-icon, .menu-btn {
        display: none;
    }

 @media screen and (max-width: 768px) {
     display: inline;

    .menu {
        clear: both;
        max-height: 0;
        width: 100%;
        margin: 0;
        padding: 0;
        transition: max-height .75s ease-in-out;
        display: block;
        }
        /* menu icon */
        .menu-icon {
            cursor: pointer;
            display: inline-block;
            float: right;
            // margin: 1em;
            padding: 1em;
            position: relative;
            user-select: none;
            background: #fff;
        }

        .menu-icon .navicon {
            background: black;
            display: block;
            height: 2px;
            position: relative;
            transition: background .2s ease-out;
            width: 18px;
        }

        .menu-icon .navicon:before,
        .menu-icon .navicon:after {
            background: black;
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all .2s ease-out;
            width: 100%;
        }

        .menu-icon .navicon:before {
            top: 5px;
        }

        .menu-icon .navicon:after {
            top: -5px;
        }
        /* menu btn */
        .menu-btn {
            display: none;
        }

        .menu-btn:checked ~ .menu {
            max-height: 20em;
            background:
        }

        .menu-btn:checked ~ .menu-icon .navicon {
            background: transparent;
        }

        .menu-btn:checked ~ .menu-icon .navicon:before {
            transform: rotate(-45deg);
        }

        .menu-btn:checked ~ .menu-icon .navicon:after {
            transform: rotate(45deg);
        }

        .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
        .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
            top: 0;
        }
        }

`
export const WorkingOn = styled.div`
  background: ${slateblue};
  margin: 1em 0;
  padding: 5%;
  display: flex;
	img {
		width: 25%;
		height: auto;
		display: inline-block;
		margin: 0.75em;
	}
  h2,
  p {
    color: white;
  }

  p {
      margin: 0;
    //   font-size: 1.2em;
  }

  a,
  a:visited {
    color: white;
    text-decoration: underline;
  }
`
