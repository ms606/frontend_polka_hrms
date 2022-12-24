const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    // console.log('asdfdasfsd', paginate)
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i ++){
        // console.log(i, totalPosts, postsPerPage)
        pageNumbers.push(i)
    }

    return (
      <nav>
        <ul className='pagination'>
            {pageNumbers.map(x => (
                <li key={x}>
                  <button  onClick={() => paginate(x)} href="#" className='page-link'>
                      {x}
                  </button >
                </li>
            ))}
        </ul>    
      </nav>
       
    )
}

export default Pagination