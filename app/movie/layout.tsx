import { ReactNode } from 'react';
import NavBar from '../ui/movie/NavBar';

const Layout = ({children} : {children: ReactNode}) => {

    return (
        <div>
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;