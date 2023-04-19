import axios from 'axios'
import { useEffect, useState } from 'react'
const useDataFetcher = () => {
    // const API_URL = "https://api.github.com/users/fabpot/followers?per_page=6";
    const totalPages = 300
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            const page = Math.min(currentPage + 1, totalPages)
            const result = await axios.get(`${API_URL}&page=${page}`)
            setPages(result.data)
            setLoading(false)
            console.log(result.data)
        }
        fetchData()
    }, [currentPage])
    return {
        loading,
        pages,
        totalPages,
        currentPage,
        setCurrentPage,
    }
}

export default useDataFetcher
