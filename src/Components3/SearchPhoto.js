import React, { useState, useEffect } from "react";


const SearchPhotos2 =  () => {

  const [query, setQuery] = useState("car");
  const [pics, setPics] = useState([]);

  const getphoto = async (e)=>{
    let url = `https://api.unsplash.com/photos/?query=${query}&client_id=WVgJj2iOE00TzsZb1S4TjADsrE7uz1peRqLyHr_3ReU`;
    const data = await fetch(url);
    setPics(await data.json());
  }


  console.log(pics);

  useEffect(() => {
    getphoto();
  }, [])

  return (
    <>
      <form className="form" onSubmit={SearchPhotos2}>
        {" "}
        <label className="label" htmlFor="query">
          {" "}
          Flicker's
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="60%"
              height="60%"
            ></img>
          </div>
        ))}{" "}
      </div>
    </>
  );
}


export default SearchPhotos2;