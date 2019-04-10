// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { History } from 'history';
import { match } from 'react-router';
import { Helmet } from "react-helmet";

// system
import book from 'system/book';

// custom
import { fetchWords, fetchInfo } from './saga';
import { selectWords, selectCountWords } from './selectors';
import { selectWordsPerPage } from 'pages/Settings/selectors';
import Pagination from 'widgets/Pagination';

// assets
import { Container, Title, Table, Th, Tr } from './assets/styles';

interface WordsProps {
  className?: string;
  words: Array<{en: string; ru: string}>;
  wordsPerPage: number;
  countWords: number;
  dispatch: any;
  match: match<{id: string;}>;
  history: History;
  location: Location;
};

class Words extends React.Component<WordsProps> {
  componentDidMount() {
    const { countWords, words, dispatch, wordsPerPage, match: { params: { id } } } = this.props;

    if (!countWords || !words.length ) {
      fetchInfo(dispatch);
      fetchWords(dispatch, wordsPerPage, parseInt(id) * wordsPerPage);
    }
  }
  
  componentDidUpdate(prevProps: any) {
    const { dispatch, wordsPerPage, match: { params: { id } } } = prevProps;
    
    if (id !== this.props.match.params.id) {
      fetchWords(dispatch, wordsPerPage, id * wordsPerPage);
    }
  }

  render () {
    const { className, words = [], wordsPerPage, countWords, match: { params: { id } } } = this.props;
    
    return words.length ? (
      <Container className={className}>
        <Helmet>
          <title>Words</title>
        </Helmet>
        <Title>Words player</Title>
        <Table>
          <thead>
            <Tr>
              <Th>EN</Th>
              <Th>RU</Th>
              <Th>Know</Th>
            </Tr>
          </thead>
          <tbody>
            {words.map(({en, ru}, i) => (
              <Tr key={en + ru + i}>
                <td>{en}</td>
                <td>{ru}</td>
                <td>
                  <input type="checkbox"/>
                </td>
              </Tr>
            ))}
          </tbody>
        </Table>
        <Pagination count={Math.ceil(countWords / wordsPerPage)} getTo={book.words.root} current={parseInt(id)}/>
      </Container>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default connect(createStructuredSelector({
  words: selectWords,
  wordsPerPage: selectWordsPerPage,
  countWords: selectCountWords,
}))(Words);