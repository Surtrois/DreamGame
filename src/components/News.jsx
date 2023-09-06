import React from 'react'
import { useApi } from '../Router'
import { useState, useEffect } from 'react';
import Sweetpagination from 'sweetpagination';
import "./css/News.css"
import { Link } from 'react-router-dom';


export default function News() {
    const [currentPageData, setCurrentPageData] = useState({});
    const [noData, setNoData] = useState(false);
    const [allNews, setAllNews] = useState(null)

    const apiUrl = useApi.baseUrl;

    const fetchAllNews = async () => {
        const response = await useApi.new.GetAll();
        const news = response.data

        if (news.length <= 0) {
            setNoData(true);
        }

        return setAllNews(news);
    }

    useEffect(() => {
        fetchAllNews();
    }, []);

    return (
        <div className='news-article'>
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
                                <div key={item.id}>
                                    <Link to={`/News/${item.id}`} >
                                        <p>{item.title}</p>
                                        <img className='cardsImages' src={`${apiUrl}/images/${item.thumbnail}`} alt={item.title} />
                                    </Link>
                                </div>
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

