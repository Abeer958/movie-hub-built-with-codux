import styles from './search.module.scss';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface SearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-searchs-and-templates
 */
export const Search = ({ className }: SearchProps) => {
    const [input, setInput] = useState('')
    const { dispatch } = useContext(SearchContext)

    console.log(input)
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles.input} aria-placeholder="" placeholder="Search..." onChange={(e)=>setInput(e.target.value)}/>
            <button className={styles.button} onClick={()=>dispatch({ type: "ADD_QUERY", payload: input})}>Search</button>
        </div>
    );
};
