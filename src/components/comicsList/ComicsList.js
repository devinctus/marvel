import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './comicsList.scss';

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [offset, setOffset] = useState(200);
    const [listEnded, setListEnded] = useState(false);
    const {getAllComics, resetError, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequestNewComics(offset, true);
        // eslint-disable-next-line
    }, []);

    const onRequestNewComics = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
        resetError();
        getAllComics(offset)
            .then(onListLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onListLoaded = (newComicsList) => {
        const listEnded = newComicsList.length < 8 ? true : false;
        setComicsList(ComicsList => [...ComicsList, ...newComicsList]);
        setNewComicsLoading(false);
        setOffset(offset => offset + 20);
        setListEnded(listEnded);
    }

    const renderItems = (arr) => {
        const items = arr.map((item) => {
            return (
                <CSSTransition key={item.id} timeout={500} classNames="comics__item">
                    <li tabIndex={0}
                        className="comics__item"
                        key={item.id}>
                        <Link to={`/comics/${item.id}`}>
                            <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                            <div className="comics__item-name">{item.title}</div>
                            <div className="comics__item-price">{item.price}</div>
                        </Link>
                    </li>
                </CSSTransition>
            )
        });
        return items;
    }

    return (
        <div className="comics__list">
            <ul className="comics__grid">
                <TransitionGroup component={null}>
                    {setContent(process, () => renderItems(comicsList), null, newComicsLoading)}
                </TransitionGroup>
            </ul>
            <button 
                className="button button__main button__long"
                disabled={newComicsLoading}
                onClick={() => onRequestNewComics(offset)}
                style={{'display': listEnded? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;