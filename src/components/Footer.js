import React from 'react'
import MediaQuery from 'react-responsive'
import FooterMobile from './FooterMobile'

export default function Footer() {
    return (
        <div>
            <footer class="max-md:hidden">
                <div class="container mx-auto flex justify-between items-center font-body">
                    <p class="text-white opacity-50 text-sm">
                        &copy; Valere Labs. All rights reserved.
                    </p>
                    <div class="flex space-x-5">
                        <a
                            href="#"
                            class="text-white opacity-50 text-sm hover:opacity-100"
                        >
                            Site Map
                        </a>
                        <a
                            href="#"
                            class="text-white opacity-50 text-sm hover:opacity-100"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>

            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                <footer class="snap-start">
                    <div class="container flex-1 justify-between text-left font-body">
                        <div class="flex mx-5">
                            <a
                                href="#"
                                class="text-white opacity-50 text-xs hover:opacity-100 mr-5"
                            >
                                Site Map
                            </a>
                            <a
                                href="#"
                                class="text-white opacity-50 text-xs hover:opacity-100"
                            >
                                Privacy Policy
                            </a>
                        </div>
                        <p class="flex-1 text-white opacity-50 text-xs mx-5">
                            &copy; Valere Labs. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
