// modules
import * as React from 'react';

// assets
import {
  Container,
  List,
  Item,
  Arrow,
  Link,
  Empty,
} from './assets/styles';

type PaginationProps = {
  className?: string;
  count: number;
  current: number;
  getTo: (id: number) => string;
};

type Pages = Array<(number | null)>;
type State = {};

class Pagination extends React.Component<PaginationProps, State> {
  container = React.createRef<HTMLUListElement>();

  componentDidMount() {
    this.forceUpdate();
    window.addEventListener('resize', this.calcPages);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcPages);
  }

  calcPages = () => {
    this.forceUpdate();
  }

  getPagesTemplate() {
    const { count, current } = this.props;
    const maxCount = this.getMaxCountOfPages();
    
    if (count <= maxCount) {
      return new Array(count).fill('').map((v, i) => i + 1);
    }
    
    const template: Pages = new Array(maxCount).fill('').map((v, i) => i + 1);
    const middle = Math.floor(maxCount / 2);
    const rightCount = count - current;
    const leftCount = current;
    const toCollapseLeft = leftCount - 1 > middle;
    const toCollapseRight = rightCount - 1 > middle;
    const pos = (!toCollapseRight ? maxCount - (count - current) : 
                !toCollapseLeft ? current - 1 : middle);

    for(let i = 1; i < maxCount + 1 - pos; i++) {
      template[maxCount - i] = count - i;
    }

    if (toCollapseLeft) {
      template[pos - 1] = current - 1;

      if (maxCount > pos + 3) {
        template[pos - 2] = null;
      } else {
        template[pos - 1] = null;
      }
    }

    if (toCollapseRight) {
      template[pos + 1] = current + 1;
      
      if (maxCount > pos + 3) {
        template[pos + 2] = null;
      } else {
        template[pos + 1] = null;
      }
    }
    
    template[pos] = current;
    
    return template;
  }

  getMaxCountOfPages() {
    const { current } = this.container;

    if (current) {
      const width = current.offsetWidth;
      
      return Math.floor(width / 50);
    } else {
      return 5;
    }
  }

  getTo(to: number) {
    const { count, getTo } = this.props;

    if (to > count || to < 1) {
      throw RangeError(`Out of range value. 0 < ${to} > ${count}`)
    }
    
    return getTo(to);
  }

  back() {
    const { current } = this.props;
    return this.getTo(current - 1);
  }

  forvard() {
    const { current } = this.props;
    return this.getTo(current + 1);
  }

  render () {
    const { className, current, count } = this.props;
    const pages = this.getPagesTemplate();
    
    // p               |1|, 2, 3                n
    // p, 1, 2, 3, 4, 5, 6, 7, 8, |9|, 10, 11   n
    // p, 1, 2, 3, |4|, 5 ... 7, 8, 9, 10, 12   n
    // p, 1, 2, 3, 5, 6, 7, 8 ... 10, |11|, 12  n
    // p, 1, 2 ... 11, |12|, 13, ... 43, 44, 45 n
    // p, 1 ... 11, |12|, 13 ... 45 n

    return count > 1 && (
      <Container className={className}>
        {current > 1 && (
          <Arrow to={this.back()} >
            Prev
          </Arrow>
        )} 

        <List ref={this.container}>
          {pages.map((num, index) => (
            <Item key={'empty_' + index}>
              {num ? (
                <Link to={this.getTo(num)} exact={true}>
                  {num}
                </Link>
              ) : (
                <Empty>...</Empty>
              )}
            </Item>
          ))}
        </List>

        {current < count && (
          <Arrow to={this.forvard()}>
            Next
          </Arrow>
        )}
      </Container>
    )
  }
}

export default Pagination;