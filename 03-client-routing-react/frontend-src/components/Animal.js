import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Axios from "axios"

function Animal(props) {
  const [animal, setAnimal] = useState({ name: "", species: "" })
  const { name } = useParams()

  useEffect(() => {
    async function ourRequest() {
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
