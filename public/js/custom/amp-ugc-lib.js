drawAmpUGC = function() {
    window.ecommBridge = {
        capability: {
            getProduct: function(data, callback) {}
        }
    };
    var ugcs = document.querySelectorAll("[data-amp-stream-name]");
    for (var i = 0; i < ugcs.length; i++) {
        var ugc = ugcs[i].getAttribute("data-amp-stream-name");

        $(function() {
            var viewerConfig = {
                stream: ugc,
                clientName: ugc,
                autoplay: true,
                autoRotationSpeed: 4,
                numShow: 6,
                spacing: 10,
                diOptions: "qlt=95&w=640&h=640",
                appendTo: $("#my-carousel"),
                reportpath: "https://social-live-api.adis.ws/report",
                xd: "https://social-live-api.adis.ws/crossdomain.xml",
                callToActionText: "Shop the look"
            };

            var modalConfig = {
                showModal: true,
                displayText: true,
                displayUsername: true,
                diOptions: "w=400"
            };

            var uploadModalConfig = {
                content: "#amp-upload-section",
                width: 600,
                height: 680
            };

            var uploadConfig = {
                endpoint: "https://social-live-api.adis.ws/upload",
                stream: ugc,
                hashtag: "#Primark",
                tags: ["primark"],
                client: "presales",
                area: "#amp-upload-section",
                tcsLink: "<yoursite.com/terms>",
                gnipTcsLink: "<gnip.com/terms>"
            };

            var instagramUploadConfig = {
                client: "presales",
                stream: ugc,
                tags: ["primark"],
                clientId: "e721d5f2d1a94438a64a42a0c8c4002a",
                callbackUrl: "https://s1.adis.ws/instagram/router.html?localCallback=<yoursite.com/instagram.html>",
                basepath: "https://social-live-api.adis.ws/upload",
                xd: "https://social-live-api.adis.ws/crossdomain.xml"
            };

            var accountConfig = {
                client: "presales",
                imageBasePath: "https://i1.adis.ws/",
                contentBasePath: "https://c1.adis.ws/",
                ampAnalyticsCollectorId: "bdb443d9-d617-4a9f-9984-17f7345ce7e4",
                ampAnalyticsBeacon: "https://a1.adis.ws/"
            };

            var viewer = new amp.Carousel(accountConfig, viewerConfig, modalConfig, uploadModalConfig, uploadConfig, instagramUploadConfig);

        });

    }
}
drawAmpUGC();