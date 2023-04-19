import React from 'react'

export default function FooterMobile() {
    return (
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
    )
}
