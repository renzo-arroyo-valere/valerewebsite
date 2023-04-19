import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const PaginationButtons = ({
    totalPages,
    currentPage,
    setCurrentPage,
    type,
}) => {
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1)
    }
    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 2,
            },
        },
    }

    const showNextButton = currentPage !== totalPages
    const showPrevButton = currentPage !== 1
    return (
        <motion.div
            variants={paginationVariants}
            initial="hidden"
            animate="visible"
            className="top-0 left-0 right-0 bottom-0 flex items-center justify-between "
        >
            {type === 'prev' && (
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className="hidden w-10 h-10 lg:mb-0 2xl:flex lg:flex items-center justify-center rounded-full bg-white mr-4 mb-16"
                >
                    <BsChevronLeft size={26} />
                </button>
            )}

            {type === 'next' && (
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className="hidden w-10 h-10 2xl:flex lg:mb-0 lg:flex items-center justify-center rounded-full bg-white mb-16 ml-4"
                >
                    <BsChevronRight size={26} />
                </button>
            )}
        </motion.div>
    )
}

export default PaginationButtons
