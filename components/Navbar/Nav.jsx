
// components
import SearchField from './SearchField'
import LeftItems from './LeftItems'
import RightItems from './RightItems'

const Nav = () => {
  return (
    <div className="bg-gray-100 w-[100vw] mb-16 flex justify-center">
      <nav className="flex justify-between items-center w-full max-w-7xl py-3 px-4">
        {/* left components */}
        <LeftItems className="shrink-0" />

        {/* search field */}
        <SearchField className='grow mx-[0.5rem] md:mx-[2rem]' />

        {/* right components */}
        <RightItems className="shrink-0" />
      </nav>
    </div>

  )
}

export default Nav