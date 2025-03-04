import PropTypes from 'prop-types';
import Paginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./index.scss";

/**
 * CustomPaginate component for paginating through items.
 *
 * This component contains pagination ands previous and next buttons.
 * It also handles scrolling to the top of the page when the page changes.
 *
 * @param {number} pageCount - The total number of pages (must be an integer).
 * @param {function} changePage - Callback function to handle page changes.
 * @param {number} currentPage - The current page number (must be an integer).
 */
const CustomPaginate = ({ pageCount, changePage, currentPage }) => {
  const handlePageChange = (e) => {
    changePage(e);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, .1);
  };

  // If there are no extra pages does not need to be rendered
  if (pageCount <= 0) {
    return null;
  }

  return (
    <Paginate
      previousLabel={<FaChevronLeft className="icon-custom" />}
      nextLabel={<FaChevronRight className="icon-custom" />}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      forcePage={currentPage}
      containerClassName="pagination"
      previousClassName="pagination__arrow"
      nextClassName="pagination__arrow"
      disabledClassName="pagination__link--disabled"
      activeClassName="pagination__link--active"
      pageClassName="pagination__link"
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
    />
  )
}

// PropTypes validation
CustomPaginate.propTypes = {
  pageCount: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default CustomPaginate;