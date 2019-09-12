module.exports = {
    cms: "https://c1.adis.ws",
    cmsAccount: "presales",
    sitemap: [{
            route: "/",
            layout: "landing",
            slots: {
                "content": "70a2dc02-c774-4d57-89d8-cd23afa04192"
            }
        },
        {
            route: "/womens",
            layout: "multislotlanding",
            slots: {
                "top": "9cc48139-1321-4048-b6d7-0c6d8cd9a7ee",
                "middle": "0784e429-e97a-4bf9-b85d-39c330482285",
                "footer": "f6645782-b074-4af8-a49f-3f75e1e8a5e0"
            }
        },
        {
            route: "/mens",
            layout: "landing",
            slots: {
                "content": "63d92da3-6e56-4ff1-ac13-5a839d0ab0ca"
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
                "content": "b4b6b213-79bd-4533-bef7-b10aa9393780"
            }
        }
    ]
};