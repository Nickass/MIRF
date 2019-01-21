// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { Link } from 'react-router-dom';
import * as cn from 'classnames';

// custom
import { fetchWords } from './saga';
import { selectSomeWords } from './selectors';

// assets
import './assets/styles.scss';

interface PaginationProps {
  className?: string;
  dispatch: any;
};

class Pagination extends React.Component<PaginationProps> {
  render () {
    const { className } = this.props;
    
    return (
      <ul className={cn(className, 'pagination')}>
        <li className="pagination__item">
          <span className="pagination__link">1</span>
        </li>
        <li className="pagination__item">
          <span className="pagination__link">2</span>
        </li>
        <li className="pagination__item">
          <span className="pagination__link">3</span>
        </li>
        <li className="pagination__item">
          <span className="pagination__link">4</span>
        </li>
        <li className="pagination__item">
          <span className="pagination__link">5</span>
        </li>
      </ul>
    )
  }
}

export default connect()(Pagination);