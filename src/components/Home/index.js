import './index.css'
import BlogList from '../BlogItem'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
