function SearchOpt(props) {
    const { opt, setSearchOpt } = props;

    return <li>
        <a onClick={() => setSearchOpt(opt)} className="dropdown-item" href="#">{opt}</a>
    </li>;
}

export default SearchOpt;