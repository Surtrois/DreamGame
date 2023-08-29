import React from 'react'
import {useApi} from '../Router'
import { useState, useEffect } from 'react';
import sweetpagination from 'sweetpagination';


export default function News() {
  const [currentPageData, setCurrentPageData] = useState({});
  const [noData, setNoData] = useState(false);
  const [allNews, setAllNews] = useState(null)
  
  const fetchAllNews = async () => {
    const response = await useApi.new.GetAll();
    const news = response.data

    console.log(response)
    console.log(news)

    if (news.length <= 0) {
      setNoData(true);
    }

    return setAllNews(news);
  }

  useEffect(() => {
    fetchAllNews();
  }, []);



  return (
    <div className='pagePattern'>
      {/* Utilisation de la bibliothèque Helmet pour modifier la balise html "head" */}
      <div id='category'>
        <h2>
          Actualités
        </h2>
      </div>

      <div>
        {noData ? <p>Aucune actualité à afficher</p> :
          <>

            <div className="cardsContainer">
              {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
                <p></p> 
              )) : <p>Aucune actualité à afficher</p>}
            </div>

            <div className='pagination'>
              <Sweetpagination
                currentPageData={setCurrentPageData}
                dataPerPage={6}
                getData={allNews || []}
                navigation={true}
                getStyle={'pagination-style'}
              />
            </div>
          </>}
      </div>
    </div>
  )
}

