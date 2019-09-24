module.exports = {
    cms: "https://c1.adis.ws",
    cmsAccount: "nmdemo",
    sitemap: [{
            route: "/",
            layout: "homepage",
            slots: {
                "hero": "307cff5d-6c1e-4fd6-9c96-f58721ef3c08",
                "body": "b615b798-67f3-4649-8056-be25838962fb",
                "stack": "d7001901-c0b2-4e88-94f8-9b790538849d"
            }
        },
        {
            route: "/womens",
            layout: "landing",
            slots: {
                "content": "7b9fa538-c2ac-4090-837b-2f2f5f46f4d5"
            }
        },
        {
            route: "/mens",
            layout: "landing",
            slots: {
                "content": "2f6a845a-fc02-4cc3-b75b-9e982891188a"
            }
        },
        {
            route: "/beauty",
            layout: "landing",
            slots: {
                "content": "7e952515-8f2a-4535-a863-7b96ccb1e626"
            }
        },
        {
            route: "/lighting",
            layout: "landing",
            slots: {
                "content": "76f6ef64-6fb2-4a65-b510-eb3e80374264"
            }
        },
        {
            route: "/furniture",
            layout: "landing",
            slots: {
                "content": "5db62a63-00dc-4fe4-8083-11f5941135be"
            }
        },
        ,
        {
            route: "/electricals",
            layout: "landing",
            slots: {
                "content": "7e6e0cc9-e103-4d85-97fa-0dcce6240a9d"
            }
        },
        {
            route: "/inspiration",
            layout: "landing",
            slots: {
                "content": "5d5d41c7-5766-490e-b185-d6c7ee2673e6"
            }
        }
    ]
};