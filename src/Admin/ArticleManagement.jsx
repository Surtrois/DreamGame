
import React, { useState } from "react";
import axios from "axios"; 

const ArticleManagement = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Faites une requête API pour ajouter un nouvel article
    // Ici, je suppose que vous avez une API /articles pour ajouter des article
    axios.post("/api/articles", { title, content })
      .then(response => {
        console.log("Article added successfully:", response.data);
        // Réinitialisez les champs du formulaire après l'ajout
        setTitle("");
        setContent("");
      })
      .catch(error => {
        console.error("Error adding article:", error);
      });
  };

  return (
    <div>
      <h2>Ajouter un nouvel article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre de l'article:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Contenu de l'article:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Ajouter l'article</button>
      </form>
    </div>
  );
};

export default ArticleManagement;