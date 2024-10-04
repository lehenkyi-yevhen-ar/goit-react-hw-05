
const LoadMoreBtn = ({ setPage, isLoading }) => {
    const handleNextPage = (event) => {
        event.preventDefault()
        setPage(prev => prev + 1)
    }
  return (
    <div>
        <button type="button" onClick={handleNextPage} disabled={isLoading}>Load More</button>
    </div>
  )
}

export default LoadMoreBtn