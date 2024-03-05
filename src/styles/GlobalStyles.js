import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  box-sizing: border-box;
}


:root {
  --color-dark: #0e0d0d;
  --color-red: #6d0000;
  --color-dark-red: #330101;
  --color-dark-gray: #151515;
  --color-light: #c4c3c3;

  --gradient: linear-gradient(
    45deg,
     #0e0d0d,
     #141111,
     #1a0b0b,
     #190202,
     #320303,
     #190202,
     #1b0a0a,
     #191212,
     #0e0d0d
  );
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Chakra Petch", sans-serif;
}
body {
  background-image: var(--gradient);
  color: var(--color-light);
  animation: bg-animation 45s ease-in-out infinite alternate;
  background-size: 300%;
}
@keyframes bg-animation {
    0% {
        background-position: left;
    }
    50% {
        background-position: right;
        
    }
    100% {
      background-position: left;
    }
}
@keyframes transitionIn {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyles;
