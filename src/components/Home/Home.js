import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Language from '../Language/Language';
import './Home.css'

const Home = () => {
    const [languages, setLanguages] = useState([]);
    

    useEffect( ()=>{
        fetch('https://aimless00.github.io/languageHomeApi/language%20-%20home.json')
        .then(res=>res.json())
        .then(data=>setLanguages(data))
    }, []);
    console.log(languages)
    return (
        <div>
            <Header></Header>
            <h1 className="text">Specific Language Lessons</h1>
            <div className="language-section">
                {
                    languages.map(language => <Language
                    key={language.id}
                    language= {language}
                    ></Language>)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;