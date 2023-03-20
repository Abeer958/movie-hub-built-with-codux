import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Favorite } from './components/favorite/favorite';
import { Content } from './components/content/content';
import { FavoriteContextProvider } from './context/FavoriteContext';
import { SearchContextProvider } from './context/SearchContext';

function App() {
    return (
        <div className={styles.App}>
            <SearchContextProvider>
            <Menu />
            <FavoriteContextProvider>
                <Content />
                <Favorite />
            </FavoriteContextProvider>
            </SearchContextProvider>
        </div>
    );
}

export default App;
