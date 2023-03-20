import styles from './menu.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface MenuProps {
    className?: string;
}

const sortBy: { q: string, text: string}[] = [
    { q: 'popularity.desc', text: 'Popularity' },
    { q: 'vote_code.desc', text: 'Most Voted' },
    { q: 'release_date.desc', text: 'Release Date' }
];
const genres: { id: string, name: string}[] = [
    { id: '28', name: "Action" },
    { id: '12', name: "Adventure" },
    { id: '16', name: "Animation" },
    { id: '35', name: "Comedy" },
    { id: '80', name: "Crime" },
    { id: '99', name: "Documentary" },
    { id: '18', name: "Drama" },
    { id: '10751', name: "Family" },
    { id: '14', name: "Fantasy" },
    { id: '36', name: "History" },
    { id: '27', name: "Horror" },
    { id: '10402', name: "Music" },
    { id: '9648', name: "Mystery" },
    { id: '10749', name: "Romance" },
    { id: '878', name: "Science Fiction" },
    { id: '10770', name: "TV Movie" },
    { id: '53', name: "Thriller" },
    { id: '10752', name: "War" },
    { id: '37', name: "Western" }
]
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    const { state, dispatch } = useContext(SearchContext)
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    alt=""
                    src="https://i.pinimg.com/originals/22/76/52/22765207594454c464c0714ff8b4da4d.png"
                    className={styles['logo-img']}
                />
                <span className={styles['logo-text']}>Reels</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li className={styles['list-item']} key={item.q} onClick={()=>dispatch({ type: "SORT_BY", payload: item.q})}>
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li className={styles['list-item']} key={item.id} onClick={()=>dispatch({ type: "ADD_GENRE", payload: item.id})}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
