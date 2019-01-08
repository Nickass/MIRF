// modules
import * as React from 'react';
import * as cn from 'classnames';
import { connect } from 'react-redux';
import { fetchWords } from './saga';

// custom

// assets
import './assets/styles.scss';

interface TranslatorProps {
  className?: string;
  words: Array<{en: string; ru: string}>;
  dispatch: any;
};

class Translator extends React.Component<TranslatorProps> {
  componentDidMount() {
    fetchWords(this.props.dispatch);
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
            </tr>
          </thead>
          <tbody>
            {words.slice(0, 10).map(({en, ru}, i) => (
              <tr key={en + ru + i}>
                <td>{en}</td>
                <td>{ru}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state: any) => ({
  words: state.translator.words
}))(Translator);