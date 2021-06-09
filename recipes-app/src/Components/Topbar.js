import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Recipes</a>
    <Link to={`/create-recipe`} >
    <button className="btn btn-warning" type="button">
     ADD RECIPE
    </button>
    </Link>
  </div>
</nav>
        </>
    )
}

export default Topbar
