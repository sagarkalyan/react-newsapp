import React, { Component } from 'react'
import axios from "axios";
import Header from './components/headerSection'
import Footer from './components/footerSection'
import Main from './components/mainSection'
import Config from './configuration/index' 
import './App.css'



class App extends Component {
  state = {

    currentTab: 'sr',
    reachBottom: false,
    currentPage: 1,
    loading: false
  }

  constructor() {
    super()
    window.addEventListener('scroll', (event) => {
      const reachBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 20)

      if (reachBottom) {
        if (!this.state.reachBottom) {
          this.onScroll(event)
          this.setState({ reachBottom: true })
        }
      } else {
        if (this.state.reachBottom) {
          this.setState({ reachBottom: false })
        }
      }

    })
    
  }

  changeTab = async (event, newTab) => {
    await this.setState({
      currentTab: newTab,
      currentPage: 1,
      articles: []
    })

    await this.getNews()
  }

  changeQuery = (event) => {
    this.setState({
      q: event.target.value
    })
  }

  getUrl = () => {
    const searchUrl = `https://newsapi.org/v2/everything?q=${this.state.q}`
    const countryUrl = `https://newsapi.org/v2/top-headlines?country=${this.state.currentTab}`
    const url = this.state.currentTab === 'sr' ? searchUrl : countryUrl
    return `${url}&sortBy=publishedAt&pageSize=10&page=${this.state.currentPage}&apiKey=${Config.apikey}`
  }

  submitSearch = async (event) => {
    if (event) {
      event.preventDefault()
    }
    await this.setState({ 
      currentTab: 'sr',
      currentPage: 1,
      articles: []
    })

    await this.getNews()
  }

  getNews = async () => {
    const url = this.getUrl()
    if (this.state.currentTab === 'sr' && !this.state.q) {
      this.setState({ 
        currentPage: 1,
        articles: []
      })
      return
    }

    this.setState({ loading: true })
    const articles = this.state.articles || []

    try {
      let res = await axios.get(url);
      let json = res.data;
      if (json && json.status === "ok") {
        this.setState({ articles: [...articles, ...json.articles] })
      }
    } catch (e) {
      console.log(`e: ${e}`)
    } finally {
      this.setState({ loading: false })
    }
  }

  onScroll = async (event) => {
    this.setState({ currentPage: this.state.currentPage + 1 })
    await this.getNews()
  }

  render() {
    return (
      <div className="App">
        <header className="App-HeaderSection">
          <Header currentTab={this.state.currentTab} changeTab={this.changeTab} submitSearch={this.submitSearch} changeQuery={this.changeQuery} />
        </header>
        <main className="App-MainSection">
          <Main currentTab={this.state.currentTab} articles={this.state.articles} loading={this.state.loading} />
        </main>
        <footer className="App-FooterSection">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;