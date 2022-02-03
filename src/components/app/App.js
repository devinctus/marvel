import { useState } from 'react';

import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/AppBanner';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import RandomChar from '../randomChar/RandomChar';
import ComicsList from '../comicsList/ComicsList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  }

  return (
    <div className="app">
      <AppHeader/>
      <main>
        <ErrorBoundary>
          <RandomChar/>
        </ErrorBoundary>
        <div className="char__content">
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={selectedChar}/>
          </ErrorBoundary>
        </div>
      <img className="bg-decoration" src={decoration} alt="vision"/>
      <AppBanner/>
      <ComicsList/>
      </main>
    </div>
  );
}

export default App;
