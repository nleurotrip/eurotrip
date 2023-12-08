import { createTheme } from "@rneui/themed";

const theme = createTheme({
    // only color scheme
    lightColors: {
      primary: 'red',
      secondary: 'blue',
      background: 'red',

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