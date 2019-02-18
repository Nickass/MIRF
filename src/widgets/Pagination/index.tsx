// modules
import * as React from 'react';

// assets
import {
  Pagination,
  PaginationList,
  PaginationItem,
  PaginationLink
} from './assets/styles';

interface PaginationProps {
  className?: string;
  path: string;
  count: number;
};

export default class extends React.Component<PaginationProps> {
  render () {
    let { className, path, count } = this.props;
    count = count > 10 ? 10 : count;

    return (
      <Pagination className={className}>
        <PaginationItem>
          <PaginationLink to={path + 1} exact={true}>
            Prev
          </PaginationLink>
        </PaginationItem>

        <PaginationList>
          {(new Array(count)).fill('').map((v, num) => (
            <PaginationItem key={(num + 1)}>
              <PaginationLink to={path + (num + 1)} exact={true}>
                {(num + 1)}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationList>

        <PaginationLink to={path + count} exact={true}>
          Next
        </PaginationLink>
      </Pagination>
    )
  }
}