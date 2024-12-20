import { NavLink } from 'react-router-dom'

const navlinks = [
  {
    id: 1,
    url: '/dashboard',
    text: 'Home',
  },
  {
    id: 2,
    url: 'about',
    text: 'About',
  },
  {
    id: 3,
    url: 'newsLetter',
    text: 'News Letter',
  },
]

const Navlinks = () => {
  return (
    <>
      {navlinks.map((link) => {
        const { id, url, text } = link
        return (
          <li key={id}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        )
      })}
    </>
  )
}
export default Navlinks
