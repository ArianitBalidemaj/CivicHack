import './index.scss'
import TopBar from '../TopBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return ( 
    <div className="App">
        <TopBar />
        <div className="page">
            <span className="tags top-tags">Math</span>
            <Outlet />
            <span className="tags bottom-tags">
            <br />
            <span className="bottom-tag-html">Coding</span>
            </span>
        </div>
    </div>
    )
}

export default Layout;
