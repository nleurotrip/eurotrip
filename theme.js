import { createTheme } from "@rneui/themed";

const theme = createTheme({
    // only color scheme
    lightColors: {
      primary: 'blue',
      secondary: 'green',
      background: 'lightgrey',
    },
    //force light mode
    mode: 'light',
    components: {
      Button: {
        raised: true,
      },
    },
  });

  export default theme;