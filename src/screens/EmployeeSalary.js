import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SalaryTablePagination from '../components/SalaryTablePagination'
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'

const EmployeeSalary = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)
    
    const ecode = useSelector((state) => state.userLogin.userInfo[0].ECODE)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)

            const res = await axios.get(`http://localhost:3000/api/employeeSalary/${ecode}`)

            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])


// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page number
const paginate = pageNumber => {setCurrentPage(pageNumber)
    // console.log('paginate', paginate, pageNumber)
}

// console.log('paginate', currentPage, currentPosts)
return (
    <div>
        <h3>Salary Summary</h3>
        <SalaryTablePagination data={currentPosts} isLoading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
)
}
export default EmployeeSalary