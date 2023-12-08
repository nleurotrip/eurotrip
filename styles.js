import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.colors.background,
            flex: 1,
            margin: 0,
            padding: 0,
            borderWidth: 2,
            borderColor: 'black'
        }
    })
);

export default useStyles;