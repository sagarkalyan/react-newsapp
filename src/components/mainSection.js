import React from 'react'

import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import Article from './newslist'

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 5 * 4 }}>
      {props.children}
    </Typography>
  );
}



const MainSection = (props) => {
  const { currentTab } = props

  return(


    <div className='MainSection'>

      {props.articles &&
        <React.Fragment>
          { currentTab === 'in' &&  <TabContainer>India</TabContainer> }
          { currentTab === 'us' &&  <TabContainer>USA</TabContainer> }
          { currentTab === 'sr' &&  <TabContainer>Search Results</TabContainer> }
          { currentTab === 'ca' &&  <TabContainer>Canada</TabContainer> }
          { currentTab === 'au' &&  <TabContainer>Australia</TabContainer> }
        </React.Fragment>
      }

      {!props.articles && 
        <TabContainer>Select a tab</TabContainer>
      }

      {props.articles && props.articles.map((item, key) =>
        <Article item={item} key={key} />
      )}
      
      {props.loading &&
        <LinearProgress />
      }
    </div>
  
  )

}


export default MainSection