import React from 'react'
import './SearchPage.css'
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response'
import { Link } from 'react-router-dom'
import SearchBox from '../SearchBox'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/LocationOn';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    // Live Api Call
    const { data } = useGoogleSearch(term)

    // Mock API Call
    // const data = Response;


    console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <div className='lane1'>
                    <Link to='/'>
                        <img className='searchPage_logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt='google' />
                    </Link>
                    <div className='searchPage_headerBody'>
                        <SearchBox />
                    </div>
                </div>
                <div className="searchPage_options">
                    <div className="searchPage_optionLeft">
                        <div className="searchPage_option">
                            <SearchIcon />
                            <Link to='/all'>All</Link>
                        </div>
                        <div className="searchPage_option">
                            <DescriptionIcon />
                            <Link to='/news'>News</Link>
                        </div>
                        <div className="searchPage_option">
                            <ImageIcon />
                            <Link to='/images'>Images</Link>
                        </div>
                        <div className="searchPage_option">
                            <LocalOfferIcon />
                            <Link to='/shopping'>Shopping</Link>
                        </div>
                        <div className="searchPage_option">
                            <RoomIcon />
                            <Link to='/all'>Maps</Link>
                        </div>
                        <div className="searchPage_option">
                            <MoreVertIcon />
                            <Link to='/all'>More</Link>
                        </div>
                    </div>
                    <div className="searchPage_optionRight">
                        <div className='searchPage_option'>
                            <Link to='/settings'>Settings</Link>
                        </div>
                        <div className='searchPage_option'>
                            <Link to='/tools'>Tools</Link>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className='searchPage_results'>
                    <p className='searchPage_resultCount'>About {data?.searchInformation.formattedTotalResults} results and ({data?.searchInformation.formattedSearchTime} seconds) </p>

                    {data?.items.map(items => (
                        <div className='searchPage_output'>
                            <div className='searchPage_site'>
                                <a className='searchPage_title' href={items.link}>
                                    <h2>{items.title}</h2>
                                </a>
                                <p className="searchPage_resultSnippet">{items.snippet}</p>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div >
    )
}

export default SearchPage