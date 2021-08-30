function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className="font-bold cursor-pointer">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className="font-bold cursor-pointer">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It's a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>Reid Van Wagner</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className="font-bold cursor-pointer">HOST</h5>
                <p>ReidVW</p>
                <p>Presents</p>
                <p>Another amazing display</p>
                <p>Beautiful Projects</p>
                <p>Check me out</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className="font-bold cursor-pointer">SUPPORT</h5>
                <p>Help Centre</p>
                <p>Trust & Safety</p>
                <p>Say Hi YouTube</p>
                <p>Easter Eggs</p>
                <p>For the Win</p>
            </div>
        </div>
    )
}

export default Footer
