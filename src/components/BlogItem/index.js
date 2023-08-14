// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-con">
          <img src={imageUrl} className="blog-item-img" alt={`item${id}`} />
          <div className="blog-item-info">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="author-info">
              <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
