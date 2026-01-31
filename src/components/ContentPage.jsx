import { NavLink, Outlet } from "react-router-dom"
import './content-page.css'

function ContentPage() {

  return (
    <div className="bg-amber-400 p-2.5">
      <h1>This is a title</h1>
      <div className="content">
        <div className="content-navbar">
          <nav>
            {/* Links to the child routes `.` refers to the index route */}
            <NavLink to=".">Content</NavLink>
            <NavLink to="about">About</NavLink>
          </nav>
        </div>
        <div className="content-body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ContentPage