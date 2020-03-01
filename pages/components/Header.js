import Link from 'next/link'

const style = {
    menuLink: {
        marginRight: '15px'
    }
}

const Header = () => {
    return (
        <div>
            <Link href="/">
                <a style={style.menuLink}>Home</a>
            </Link>
            <Link href="/about">
                <a style={style.menuLink}>About Page</a>
            </Link>
        </div>        
    )
}
export default Header