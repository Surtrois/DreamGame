import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useApi } from "../Router";

const ArticleManagement = (props) => {

  const { logout } = props

  const [noData, setNoData] = useState(false);

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [content, setContent] = useState("");
  const [categorieId, setCategorieId] = useState(null)
  const [categories, setCategories] = useState(undefined)
  const [error, setError] = useState([]);

  const fetchCategories = async () => {
    const response = await useApi.categorie.GetAll();

    if (response.data.length <= 0) {
      setNoData(true);
    }

    return setCategories(response.data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError([]);

    let newError = [];

    if (!title || title.length < 3) {
      newError.push('title');
    }

    if (!thumbnail) {
      newError.push('medias');
    }

    if (!content || content.length < 10) {
      newError.push('description');
    }

    if (newError.length > 0) {
      return setError(newError);

    } else {
      const response = await useApi.new.Create({ title: title, content: content, thumbnail: thumbnail, categorieId: categorieId })

      console.log(response)
    }
  };



  const handleMediasChange = (event) => {
    const format = event.target.files[0].type;

    if (!format.split("/").includes('image')) {
      console.log('error', 'Le format de l\'image n\'est pas valide.');
    }
    return setThumbnail(event.target.files[0]);
  }

  const disconnectedClick = () => {
    logout("logout");
  }

  console.log(title)
  console.log(thumbnail)
  console.log(content)
  console.log(categorieId)

  return (
    <div>

      {noData ? <p>Aucune actualité à afficher</p> : !categories || categories.length <= 0 ? <p>chargement</p> :

        <div>
          <h2>Ajouter un nouvel article</h2>
          <form onSubmit={(event => handleSubmit(event))}>
            <div>
              <label>Titre de l'article:</label>
              <input
                type="text"
                value={title}
                name='title'
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
              {error.includes('title') ? <label htmlFor="title">Le titre doit contenir 3 caractères minimum</label> : null}
            </div>
            <div>
              <label>Contenu de l'article:</label>
              <textarea
                value={content}
                onChange={(event) => setContent(event.currentTarget.value)}
                name="content"
                id="content"
              />
              {error.includes('content') ? <label htmlFor="content">Le contenu de l'actualité doit contenir 3 caractères minimum</label> : null}
              <div>
                <select
                  onChange={(event) => setCategorieId(event.currentTarget.value)}
                >
                  {categories.map((categorie, index) => (
                    <option key={index} value={categorie.id}>
                      {categorie.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  max-size="10000000"
                  name="thumbnail"
                  id='thumbnail'
                  onChange={handleMediasChange}
                />
                {error.includes('thumbnail') ? <label htmlFor="download">Veuillez ajouter une photo de couverture</label> : null}
              </div>

              {thumbnail ? <img src={URL.createObjectURL(thumbnail)} alt="Médias de l'article" /> : null}

            </div>

            <button type="submit">Ajouter l'article</button>
          </form>

          <NavLink to={'/'} onClick={() => { disconnectedClick(); }}>
            Déconnexion
          </NavLink>
        </div>
      }
    </div>
  );
};

export default ArticleManagement;