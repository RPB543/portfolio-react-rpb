import React from 'react';

function Nav(props) {
    const tabs = ['About', 'Contact', 'Portfolio' ]
  
    return (
        <header className="flex-row px-1">
            <h1>Rebecca</h1>
            <nav>
                <ul className="flex-row">
                {tabs.map(tab => (
                    <li className="mx-2" key={tab}>
                        <a
                        href={'#' + tab}
                        onClick={() => props.setCurrentTab(tab)}
                        className="mx-1"
                        >
                            {tab}
                        </a>
                    </li>
                ))}
                 </ul>
                
            </nav>
        </header>
    )
}

export default Nav;