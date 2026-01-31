import { Link } from "react-router-dom"

function Home() {

  return (
    <>
      <h1>Welcome to Home Page</h1>
      <Link to="/content">Go to Content Page</Link>
    </>
  )
}

export default Home