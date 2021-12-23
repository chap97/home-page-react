import './Search.css';
import React, { useEffect, useState } from 'react';

import SearchOpt from './SearchOpt';
import searchOpts from './search_opts.json';

function Search() {
    var defaultOpt = localStorage.getItem("searchOpt");
    if (defaultOpt === null) {
        localStorage.setItem("searchOpt", "Google");
        defaultOpt = "Google";
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [searchOpt, setSearchOpt] = useState(defaultOpt);

    useEffect(() => {
        localStorage.setItem("searchOpt", searchOpt);
    }, [searchOpt]);

    const searchListItems = Object.keys(searchOpts)
        .map(i => <SearchOpt key={i} opt={i} setSearchOpt={setSearchOpt} />);

    const performSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.length != 0) {
            const searchUrl = searchOpts[searchOpt];
            window.open(`${searchUrl}${encodeURIComponent(searchTerm)}`);
        }
    }
    
    return (
        <div className="box search">
            <div className="input-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{searchOpt}</button>
                <ul className="dropdown-menu">
                    { searchListItems }
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Add</a></li>
                </ul>
                <input type="text" className="form-control" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" onKeyPress={performSearch} />
            </div>
        </div>
    );
}

export default Search;
