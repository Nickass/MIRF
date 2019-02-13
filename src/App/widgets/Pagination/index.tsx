// modules
import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import * as cn from 'classnames';

// assets
import './assets/styles.scss';

interface PaginationProps {
  className?: string;
  path: string;
  count: number;
};

class Pagination extends React.Component<PaginationProps> {
  render () {
    const { className, path, count } = this.props;
    
    return (
      <ul className={cn(className, 'pagination')}>
        {(new Array(count)).fill('').map((v, num) => (
          <li className="pagination__item" key={(num + 1)}>
            <Link
              className="pagination__link"
              activeClassName="pagination__link--active"
              to={path + '/' + (num + 1)}
              exact={true}
            >
              {(num + 1)}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default Pagination;