# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Light Cyan: hsl(193, 38%, 86%)
- Neon Green: hsl(150, 100%, 66%)

### Neutral

- Grayish Blue: hsl(217, 19%, 38%)
- Dark Grayish Blue: hsl(217, 19%, 24%)
- Dark Blue: hsl(218, 23%, 16%)

## Typography

### Body Copy

- Font size (quote): 28px

### Font

- Family: [Manrope](https://fonts.google.com/specimen/Manrope)
- Weights: 800

@media only screen and (min-width: 375px) {
.attribution {
color: white;
font-size: 11px;
text-align: center;
}
.attribution a {
color: hsl(228, 45%, 44%);
}
.main {
height: 500px;
/_ display: flex;
align-items: center;
justify-content: center; _/
}
.container {
background-color: hsl(217, 19%, 24%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 15px;
max-width: max-content;
}
.advice-id .id {
color: hsl(150, 100%, 66%);
text-transform: uppercase;
}
.advice-text {
padding: 0 15px 0 15px;
}
.advice-text .text {
font-size: 28px;
color: white;
}
.line {
display: flex;
justify-content: space-between;
padding-bottom: 30px;
}
.line i {
padding: 0 15px 0 15px;
color: #ffffff;
}
hr {
width: 200px;
}
.random-advice {
position: absolute;
top: 47%;
display: flex;
align-items: center;
justify-content: center;
background-color: hsl(150, 100%, 66%);
border-radius: 50%;
height: 40px;
width: 40px;
cursor: url("https://w7.pngwing.com/pngs/999/933/png-transparent-white-glove-illustration-mickey-mouse-epic-mickey-computer-mouse-pointer-macintosh-mouse-cursor-love-miscellaneous-text.png"),
auto;
border: transparent;
transition: box-shadow 0.5s;
}
.random-advice svg {
font-size: 20px;
}
button.random-advice:hover {
box-shadow: 0 0 20px hsl(150, 100%, 66%);
}
}
