import styles from './content.module.scss';
import classNames from 'classnames';
import { Search } from '../search/search';
import { Cards } from '../cards/cards';

export interface ContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-contents-and-templates
 */
export const Content = ({ className }: ContentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Search />
            <Cards />
        </div>
    );
};
