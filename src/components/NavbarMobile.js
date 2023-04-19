import { FiMenu, FiMail } from 'react-icons/fi'
import ValereLogo from '../icons/valere-1.svg'

function NavbarMobile() {
    return (
        <div>
            <header className="fixed inset-x-8 top-0 tracking-widest font-bold z-30 font-heading">
                <nav className="flex items-center justify-between h-16 text-white transparent text-3xl">
                    <div className="flex items-center gap-3">
                        <img
                            src={ValereLogo}
                            className="h-6"
                            alt="Valere Labs logo"
                        />
                    </div>

                    <div className="flex items-center">
                        <button className="mr-4">
                            <FiMenu className="w-6 h-6" />
                        </button>
                        {/* <a href="mailto:hello@example.com" className="ml-auto">
            <FiMail className="w-6 h-6" />
          </a> */}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavbarMobile
