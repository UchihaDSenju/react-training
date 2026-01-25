import { NavLink, Outlet } from "react-router-dom"

function ContentPage() {

  return (
    <>
      <h1>ContentPage</h1>
      <nav>
        {/* Links to the child routes `.` refers to the index route */}
        <NavLink to=".">Content</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default ContentPage