// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import * as cn from 'classnames';

// custom
import { fetchWords, fetchInfo } from './saga';
import { selectWords, selectCountWords } from './selectors';
import { selectWordsPerPage } from 'pages/Settings/selectors';
import Pagination from 'widgets/Pagination';

// assets
import './assets/styles.scss';
import book from 'system/book';

interface WordsProps {
  className?: string;
  words: Array<{en: string; ru: string}>;
  wordsPerPage: number;
  countWords: number;
  dispatch: any;
  match: any;
};

class Words extends React.Component<WordsProps> {
  componentDidMount() {
    const { dispatch, wordsPerPage, match: { params: { id } } } = this.props;
    
    fetchWords(dispatch, wordsPerPage, id * wordsPerPage);
    fetchInfo(dispatch);
  }
  
  componentDidUpdate(prevProps: any) {
    const { dispatch, wordsPerPage, match: { params: { id } } } = prevProps;

    if (id !== this.props.match.params.id) {
      fetchWords(dispatch, wordsPerPage, id * wordsPerPage);
    }
  }

  render () {
    const { className, words = [], countWords } = this.props;
    
    return (
      <div className={cn(className, 'Words')}>
        <h2 className="Words__title">Words player</h2>
        <table className="Words__table">
          <thead>
            <tr>
              <th>EN</th>
              <th>RU</th>
              <th>Know</th>
            </tr>
          </thead>
          <tbody>
            {words.map(({en, ru}, i) => (
              <tr key={en + ru + i}>
                <td>{en}</td>
                <td>{ru}</td>
                <td>
                  <input type="checkbox"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination className="Words__pagination" count={countWords} path={book.words.root('')} />
      </div>
    )
  }
}

export default connect(createStructuredSelector({
  words: selectWords,
  wordsPerPage: selectWordsPerPage,
  countWords: selectCountWords,
}))(Words);