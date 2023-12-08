import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
        rootContainer: {
            backgroundColor: theme.colors.background,
            flex: 1,
            margin: 0,
            padding: 0,
        },
        typography: {
            header: {
                fontSize: 40,
                fontWeight: 'bold',
                marginLeft: 'auto',
                marginRight: 'auto',
            }
        }
    })
);

export default useStyles;