import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Axios from "axios"

function Animal(props) {
  // in the real world you would want to show some sort of animated loading / spinner icon while the axios request is still fetching the data
  const [animal, setAnimal] = useState({ name: "", species: "" })
  const { name } = useParams()

  useEffect(() => {
    async function ourRequest() {
      // in the real world you would want to cancel this Axios request using React's return/cleanup function of useEffect, so that if a slow request was still running and the user clicked on a new link before the first request finished, the first request would be cancelled instead of eventually finishing and using data that the user is no longer interested in...
      const response = await Axios(`/api/animals/${name}`)
      setAnimal(response.data)
      document.title = `${response.data.name} | Our Amazing App`
    }
    ourRequest()
  }, [name])

  return (
    <div className="row">
      <div className="col-md-8 mb-4 mb-md-0">
        <h2 className="display-4">
          {animal.name} <small className="text-muted text-tiny">({animal.species})</small>
        </h2>
        <p className="lead">{animal.bio}</p>
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </div>
      <div className="col-md-4">
        <img src={animal.photo} className="img-fluid" />
      </div>
    </div>
  )
}

export default Animal
