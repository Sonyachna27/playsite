import React, { useState } from 'react';
import { AllNews, NewsList, SearchImg, SingleNews } from '../../const';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = () => {

    const [value, setValue] = useState('');
    const [isOpen, setOpen] = useState(true);
    const filteredNews = AllNews.filter((el) =>{ 
        return el.title.toUpperCase().includes(value.toUpperCase()) || el.author.toUpperCase().includes(value.toUpperCase())}
    )
    const firstTwoNews = filteredNews.slice(0, 2);
    const otherNews = filteredNews.slice(2); 
    const itemClickHandler =(e)=>{
        setValue(e.target.textContent);
        setOpen(!isOpen);
    }
    const inputClickHandler = () => setOpen(true);
        return (
            <section className='search'> 
            <div className='container'>
            <div className='form-search'>
            <form className={value ? 'search-form focused' : 'search-form'}>
                <input 
                type='text'
                placeholder='Search'
                className='search-input' 
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onClick={inputClickHandler}
                />
                <ul className='news__list'>
                {
                value 
                ?
                    filteredNews.map((note, index) =>{
                        return(
                            <li 
                            key={index}
                            className='news__list-item'
                            onClick={itemClickHandler}>
                            {note.title}
                            </li>                        
                            )
                    })
                    : null 
                }  
                </ul>
            </form>
            </div>
            <div className='all-news'>
           <div className='first-news'>
           {firstTwoNews.map((item)=>(
                <Link to={`/playsite/news/${item.id}`} className='news-wrapper'>
                    <img className='news-img bs-img' src={item.img} alt='News photo' />
                    <div className='news'>
                        <div className='news__btn-wrap'>
                            <button className='news-btn-bg'> {item.author} </button>
                            <span>{item.time}</span>
                        </div>
                    <h2>{item.title}</h2>
                    <p> {item.paragraph}</p>
                    <p> {item.paragraph2}</p>
                    </div>
                </Link>
        ))}
                </div>
            <div className='other-news'>
            {
                otherNews.map((item) => (  
                <Link to={`/playsite/news/${item.id}`} className='news-m'>
                        <img className='news-img ls-img' src={item.img} alt='News photo' />
                   <div className='news-content'>
                    <div className='news__btn-wrap'>
                        <button className='news-btn'> {item.author} </button>
                        <span>{item.time}</span>
                    </div>
                    <h2>{item.title}</h2>
                    </div>
                </Link>
            
                ))
            }
            </div>
         </div>
            </div>
            </section>
        );
    
};

export default Search;

