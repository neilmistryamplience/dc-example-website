module.exports = {
    cms: "https://c1.adis.ws",
    cmsAccount: "landmarkpoc",
    sitemap: [{
            route: "/",
            layout: "homepage",
            slots: {
                "hero": "7333d4dc-f7af-48f1-865c-733ecf86ad70",
                "body": "e03c1bbd-7ff8-4f49-84df-3c384efb1260",
                "stack": "c509e0a7-50bd-49a7-a94c-3dcad7a2e194"
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