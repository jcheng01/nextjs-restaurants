import styles from "./Header.module.scss"
import { FaStore } from 'react-icons/fa'
import Container from "./Container"
import Link from "next/link"

const Header = () => {
	return <header className={styles.header} >
		<Container >
			<Link href="/" className='bg-emerald-400'>
				<FaStore size={60} />Syracuse Restaurants
			</Link>
		</Container>
	</header>
}
export default Header