module.exports = {
    cms: "https://c1.adis.ws",
    cmsAccount: "nmdemo",
    sitemap: [
        {
            route: "/",
            layout: "landing",
            slots: {
                "content": "3cbba4da-f90e-47f5-9457-cb70a6cd7770"
            }
        },
         {
            route: "/mac",
            layout: "landing",
            slots: {
                "content": "f1acfa8f-1fde-42ea-912f-d8e786bb71cd"
            }
        }
    ]
};