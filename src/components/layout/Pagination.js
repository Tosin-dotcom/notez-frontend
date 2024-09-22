import { useState } from "react";
import '../../assests/styles/layout/pagination.css'

const Pagination = ({ totalItems, itemsPerPage, setPageChange }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        setPageChange(pageNumber)
    }

    return (
        <div className="pagination-section">
            {Array.from({length : totalPages}, (_, index) => (
                <button className={currentPage === index + 1 ? "pagination-button pagination-active-button" : "pagination-button"}
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                </button>

            ))}    
        
        </div>
    )

}

export default Pagination