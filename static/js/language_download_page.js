

function changeLanguage(language) {
            if (language === "fa") {
                document.getElementById("creatAccount").innerHTML = "ایجاد حساب"
                document.getElementById("dropdownBottomButton").innerHTML = "<img src=\"/logo/fa-IR.png\">"
                document.getElementById("dropdownBottomButton").innerHTML += "<svg class=\"ml-2 w-4 h-4\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                    "                    <path fill-rule=\"evenodd\"\n" +
                    "                          d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\"\n" +
                    "                          clip-rule=\"evenodd\"></path>\n" +
                    "                </svg>"
                document.getElementById("title").innerHTML = "تغییر زبان"
                document.getElementById("eng").innerHTML = "انگلیسی"
                document.getElementById("eng").innerHTML += "<img src=\"/logo/en-US.png\" class='ml-1'>"
                document.getElementById("fa").innerHTML = "فارسی"
                document.getElementById("fa").innerHTML += "<img src=\"/logo/fa-IR.png\" class='ml-1'>"
                document.getElementById("download_name").innerHTML = "<span >دانلود</span>"
                document.getElementById("download_name").innerHTML += "<svg class=\"fill-current w-4 h-4 mr-2 ml-1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n" +
                    "                    <path d=\"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z\"/>\n" +
                    "                </svg>"
                document.getElementById("password_field").dir = "rtl";
                document.getElementsByName('password')[0].placeholder = 'رمز عبور';
                document.getElementById("password_download").innerHTML = "دانلود"
                console.log("success change to farsi")
            }
            ;
            if (language === "eng") {
                document.getElementById("creatAccount").innerHTML = "create account"
                document.getElementById("dropdownBottomButton").innerHTML = "<img src=\"/logo/en-US.png\">"
                document.getElementById("dropdownBottomButton").innerHTML += "<svg class=\"ml-2 w-4 h-4\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                    "                    <path fill-rule=\"evenodd\"\n" +
                    "                          d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\"\n" +
                    "                          clip-rule=\"evenodd\"></path>\n" +
                    "                </svg>"
                document.getElementById("title").innerHTML = "change language"
                document.getElementById("eng").innerHTML = "<img src=\"/logo/en-US.png\" class='mr-1'>"
                document.getElementById("eng").innerHTML += "English"
                document.getElementById("fa").innerHTML = "<img src=\"/logo/fa-IR.png\" class='mr-1'>"
                document.getElementById("fa").innerHTML += "Farsi"
                document.getElementById("download_name").innerHTML = "<svg class=\"fill-current w-4 h-4 mr-2 \" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n" +
                    "                    <path d=\"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z\"/>\n" +
                    "                </svg>"
                document.getElementById("download_name").innerHTML += "<span >Download</span>"
                document.getElementById("password_field").dir = "ltr";
                document.getElementsByName('password')[0].placeholder = 'password';
                document.getElementById("password_download").innerHTML = "Download"
                console.log("success change to english")
            }
        }