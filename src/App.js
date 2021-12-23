import './App.css';

import Search from './widgets/search/Search';

// weather, stocks, favourite links, music top charts, trending, search, rss, email, chat, photo of the day, shopping, news, reddit top page, "explore" links, horoscope, virtual pet

// save config via local storage and to file; sign-in to save on cloud, share configs

function App() {
  return (
    <div className="wrapper">
      <div className="box logo">Debut</div>
      <Search />
      <div className="box weather">Weather</div>
      <div className="box news">News</div>
      <div className="box stocks">Stocks</div>
    </div>
  );
}

export default App;
