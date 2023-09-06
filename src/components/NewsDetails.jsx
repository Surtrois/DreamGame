import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApi } from '../Router';
import "./css/NewsDetails.css"

export default function NewsDetails() {
    const [newsDetails, setNewsDetails] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = useApi.baseUrl;

    const fetchNew = async () => {
        try {
            const response = await useApi.new.GetById({ id: parseInt(id) });
            if (response.error) return navigate('/News');
            setNewsDetails(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchNew();
    }, [id]);


    return (
        <div>
            <Link to='/News' className='returnButton'>
                <i className="fa-solid fa-circle-up fa-rotate-270"></i>
            </Link>
            <div className='pagePattern__content'>
            {newsDetails.length <= 0 || !newsDetails.content || !newsDetails.createdAt ? <p>Chargement</p> :
                    <>
                        <h2 className='Title'>{newsDetails.title}</h2>
                        <img className='Image' src={`${apiUrl}/images/${newsDetails.thumbnail}`} alt={newsDetails.title} />
                        <p className='Article'>{newsDetails.content}</p>
                    </>
                }
            </div>
        </div>
    )
}