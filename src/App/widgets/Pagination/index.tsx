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
    let { className, path, count } = this.props;
    count = count > 10 ? 10 : count;

    return (
      <div className="Pagination">
        <ul className={cn(className, 'Pagination__list')}>
          {(new Array(count)).fill('').map((v, num) => (
            <li className="Pagination__item" key={(num + 1)}>
              <Link
                className="Pagination__link"
                activeClassName="Pagination__link--active"
                to={path + (num + 1)}
                exact={true}
              >
                {(num + 1)}
              </Link>
            </li>
          ))}
        </ul>
      
      </div>
    )
  }
}

export default Pagination;