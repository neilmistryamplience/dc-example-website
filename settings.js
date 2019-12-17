module.exports = {
    cms: "https://c1.adis.ws",
    cmsAccount: "landmarkpoc",
    sitemap: [{
            route: "/",
            layout: "homepage",
            slots: {
                "hero": "7333d4dc-f7af-48f1-865c-733ecf86ad70",
                "products": "0a60e062-cce4-432d-b61d-cddd94300857",
                "localisedhero": "8a19c65f-3a97-4bb1-8bcd-a802a70aa18d"
            }
        },
        {
            route: "/departments",
            layout: "landing",
            slots: {
                "content": "f5d29502-4f54-40f6-9dee-25759d90f792"
            }
        },
        {
            route: "/interiordesign",
            layout: "landing",
            slots: {
                "content": "8d010f07-7a49-400a-aaf9-54e0c5e6a372"
            }
        },
        {
            route: "/more",
            layout: "landing",
            slots: {
                "content": "7b624136-b703-48c9-a9f1-87a1068f97b2"
            }
        },
        {
            route: "/inspiration",
            layout: "landing",
            slots: {
                "content": "b76976f7-7bc0-4919-82af-307f0d6cb8ba"
            }
        }
    ]
};