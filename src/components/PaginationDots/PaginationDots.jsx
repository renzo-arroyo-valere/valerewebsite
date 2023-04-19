import React from 'react'

const PaginationDots = ({ totalPages, currentPage }) => {
    return (
        <div className="flex space-x-5 ml-6 mt-1 lg:mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                        currentPage === index + 1 ? 'bg-white' : 'bg-zinc-400'
                    }`}
                />
            ))}
        </div>
    )
}

export default PaginationDots
