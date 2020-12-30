import {createMuiTheme} from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import { deepOrange } from '@material-ui/core/colors';
const theme = createMuiTheme({
    palette:{
        typography: {
            fontFamily: [
             'Open Sans','sans-serif'
            ].join(','),
          },
        primary:{
            main:teal[500]
        },
        secondary:deepOrange
    },

})

export default theme;