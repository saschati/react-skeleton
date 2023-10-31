import React, { useCallback } from 'react'
import styles from './Paginate.module.scss'
import classNames from 'classnames/bind'
import ReactPaginate, { type ReactPaginateProps } from 'react-paginate'

const cx = classNames.bind(styles)

type ReactPaginatePropsRequired = Required<Pick<ReactPaginateProps, 'onPageChange'>>

export type PaginateProps = ReactPaginateProps & {
  /**
   * Action to change the page
   */
  onChange(page: number): void
  /**
   * Number of pagination pages
   */
  pageCount: number
  /**
   * Current pagination page
   */
  forcePage: number
}

/**
 * UI Component for building pagination
 */
const Paginate = React.memo<PaginateProps>(
  ({ className, onChange, pageCount, forcePage, ...rest }): JSX.Element => {
    const handlerZero = useCallback(() => null, [])
    const handlerPageChange = useCallback<ReactPaginatePropsRequired['onPageChange']>(
      ({ selected }) => onChange(selected + 1),
      [onChange],
    )

    return (
      <ReactPaginate
        className={cx('paginate', className)}
        pageCount={pageCount}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlerPageChange}
        forcePage={forcePage && forcePage - 1}
        renderOnZeroPageCount={handlerZero}
        disableInitialCallback={true}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        breakClassName={cx('paginate__break')}
        breakLinkClassName={cx('paginate__link')}
        pageClassName={cx('paginate__item')}
        pageLinkClassName={cx('paginate__link')}
        previousClassName={cx('paginate__previous', 'paginate__item')}
        previousLinkClassName={cx('paginate__link')}
        nextClassName={cx('paginate__next', 'paginate__item')}
        nextLinkClassName={cx('paginate__link')}
        activeClassName={cx('paginate__item_type_active')}
        disabledClassName={cx('paginate__item_type_disabled')}
        {...rest}
      />
    )
  },
)

Paginate.displayName = 'Paginate'

export default Paginate
