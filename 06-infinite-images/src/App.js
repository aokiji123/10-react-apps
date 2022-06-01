import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css'

const accessKey = process.env.REACT_APP_KEY

const App = () => {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')

  useEffect(() => {
    getPhotos()
    // eslint-disable-next-line
  }, [page])

  function getPhotos() {
    let apiUrl = `https://api.unsplash.com/photos?`;
    if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;
    apiUrl += `&page=${page}`;
    apiUrl += `&client_id=${accessKey}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const imagesFromApi = data.results ?? data;

        if (page === 1) {
          setImages(imagesFromApi);
          return;
        }

        setImages((images) => [...images, ...imagesFromApi]);
      });
  }
  function searchPhotos(event) {
    event.preventDefault()
    setPage(1)
    getPhotos()
  }

  if (!accessKey) {
    return (
      <a href="https://unsplash.com/developers" className="error">
        Required: Go and get your API key first
      </a>
    )
  }

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form onSubmit={searchPhotos}>
        <input type="text" placeholder="Search Unsplash..." value={query} onChange={event => setQuery(event.target.value)}/>
        <button>Search</button>
      </form>

      <InfiniteScroll
        dataLength={images.length}
        next={() => { setPage(page => page + 1) }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="image-grid">
        {images.map((image, index) => ( 
            <div className="image" key={index}>
              <img src={image.urls.regular} alt={image.alt_description} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default App