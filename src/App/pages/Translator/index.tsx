// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { Link } from 'react-router-dom';
import * as cn from 'classnames';

// custom
import { fetchWords } from './saga';
import { selectSomeWords } from './selectors';
import { selectWordsPerPage } from 'App/pages/Settings/selectors';
import Pagination from 'App/widgets/Pagination';

// assets
import './assets/styles.scss';

interface TranslatorProps {
  className?: string;
  words: Array<{en: string; ru: string}>;
  wordsPerPage: number;
  dispatch: any;
};

class Translator extends React.Component<TranslatorProps> {
  componentDidMount() {
    const { dispatch, wordsPerPage } = this.props;
    
    fetchWords(dispatch, wordsPerPage, 0);
  }

  render () {
    const { className, words = [] } = this.props;
    
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
        <Pagination className="Translator__pagination" />
      </div>
    )
  }
}

export default connect(createStructuredSelector({
  words: selectSomeWords,
  wordsPerPage: selectWordsPerPage,
}))(Translator);