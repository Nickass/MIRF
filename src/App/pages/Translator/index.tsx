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
import { selectWordsPerPage } from 'App/pages/Settings/selectors';
import Pagination from 'App/widgets/Pagination';

// assets
import './assets/styles.scss';

interface TranslatorProps {
  className?: string;
  words: Array<{en: string; ru: string}>;
  wordsPerPage: number;
  countWords: number;
  dispatch: any;
  match: any;
};

class Translator extends React.Component<TranslatorProps> {
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
      <div className={cn(className, 'Translator')}>
        <h2 className="Translator__title">Translator player</h2>
        <table className="Translator__table">
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
        <Pagination className="Translator__pagination" count={countWords} path="/translator"/>
      </div>
    )
  }
}

export default connect(createStructuredSelector({
  words: selectWords,
  wordsPerPage: selectWordsPerPage,
  countWords: selectCountWords,
}))(Translator);