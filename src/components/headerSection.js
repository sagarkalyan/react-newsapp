import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import SearchIcon from '@material-ui/icons/Search'
import Flag from 'react-world-flags'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles({
  section: {
    margin: 20
  },
  paper: {
    padding: '5px',
    display: 'flex',
    alignItems: 'left',
  },
  inputField: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  searchIcon: {
    width: 2,
    height: 26,
    margin: 6,
  },

});

const MyFlag = (props) => (
  <Flag code={ props.code } height="18" />
)


const HeaderSection = (props) => {
  const classes = useStyles();
  return (


    <div className="HeaderSection">
      <Container maxWidth='xl'>

        <form className={classes.section} noValidate autoComplete="off" onSubmit={props.submitSearch}>
          <Paper className={classes.paper}>
           
           
            <InputBase
              className={classes.inputField}
              label="Search Keyword"
              placeholder="Search Keyword"
              inputProps={{ 'aria-label': 'Search Keyword' }}
              onChange={props.changeQuery}
            />

            <Divider className={classes.searchIcon} />

            <IconButton className={classes.iconButton} aria-label="Search" color="primary" type="submit">
              <SearchIcon />
            </IconButton>

          </Paper>
        </form>
      </Container>




      <AppBar position="sticky" color="inherit">


        <Tabs value={props.currentTab} onChange={props.changeTab} centered  >


          <Tab value="in" label="India" icon={<MyFlag code='in'/>} />

          <Tab value="us" label="USA" icon={<MyFlag code='us'/>} />

          <Tab value="sr" label="Search Results" icon={<SearchIcon />} />

          <Tab value="ca" label="Canada" icon={<MyFlag code='ca'/>} />

          <Tab value="au" label="Australia" icon={<MyFlag code='au'/>} />


        </Tabs>

      </AppBar>
    </div>
  )
}
export default HeaderSection