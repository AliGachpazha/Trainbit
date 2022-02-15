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
                if (document.getElementById("form_mark").dir === "rtl") {
                    document.getElementById("form_mark").dir = "ltr";
                };
                document.getElementById("slow").innerHTML = "کند"
                document.getElementById("slow_form").classList.add("text-right")
                document.getElementById("Download_Half_Price").innerHTML = "دانلود نیم بها نمی باشد"
                document.getElementById("Download_Half_Price").innerHTML += "<i class=\"mdi mdi-close text-lg\"></i>"
                document.getElementById("Fast_download").innerHTML = "دانلود با سرعت پایین"
                document.getElementById("Fast_download").innerHTML += "<i class=\"mdi mdi-close text-lg\"></i>"
                document.getElementById("Saving_time").innerHTML = "از دست دادن زمان"
                document.getElementById("Saving_time").innerHTML += "<i class=\"mdi mdi-close text-lg\"></i>"
                document.getElementById("button_slow").innerHTML = "دانلود با سرعت کند"
                document.getElementById("fast").innerHTML = "سریع"
                document.getElementById("read").innerHTML = "<i class=\"mdi mdi-arrow-left-thick ml-1\"></i>"
                document.getElementById("read").innerHTML += "بیشتر بخوانید"
                document.getElementById("read").classList.add("mt-1")
                document.getElementById("fast_form").classList.add("text-right")
                document.getElementById("Download_Half_Price_fast").innerHTML = "دانلود نیم بها می باشد";
                document.getElementById("Download_Half_Price_fast").innerHTML += "<i class=\"mdi mdi-check-bold text-lg\"></i>";
                document.getElementById("fast_down").innerHTML = "دانلود با سرعت بالا";
                document.getElementById("fast_down").innerHTML += "<i class=\"mdi mdi-check-bold text-lg\"></i>";
                document.getElementById("Saving_time_fast").innerHTML = "ذخیره زمان";
                document.getElementById("Saving_time_fast").innerHTML += "<i class=\"mdi mdi-check-bold text-lg\"></i>";
                document.getElementById("button_fast").innerHTML = "دانلود با سرعت سریع ";
                document.getElementById("email_field").dir = "rtl";
                document.getElementById("email").innerHTML = "ایمیل ";
                document.getElementsByName('email')[0].placeholder = 'ایمیل';
                document.getElementById("password_field").dir = "rtl";
                document.getElementById("password").innerHTML = "رمز عبور";
                document.getElementById("forgot").innerHTML = "رمز عبور را فراموش کرده ام.";
                document.getElementsByName('password')[0].placeholder = 'رمز عبور';
                document.getElementById("login").innerHTML = "ورود به حساب کاربری";
                document.getElementById("not_account").innerHTML = "حساب کاربری ندارید؟";
                document.getElementById("not_account").innerHTML += " <a id=\"not_link\" href=\"#\" class=\"text-blue-600 hover:underline\">ایجاد حساب</a>.";
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
                document.getElementById("eng").innerHTML = "English"
                document.getElementById("eng").innerHTML += "<img src=\"/logo/en-US.png\" class='mr-1'>"
                document.getElementById("fa").innerHTML = "Farsi"
                document.getElementById("fa").innerHTML += "<img src=\"/logo/fa-IR.png\" class='mr-1'>"
                document.getElementById("form_mark").dir = "rtl"
                document.getElementById("slow").innerHTML = "Slow"
                document.getElementById("slow_form").classList.remove("text-right")
                document.getElementById("slow_form").classList.add("text-left")
                document.getElementById("Download_Half_Price").innerHTML = "Download Half Price"
                document.getElementById("Download_Half_Price").innerHTML += "<i class=\"mdi mdi-close text-lg\"></i>"
                document.getElementById("Fast_download").innerHTML = "Fast download"
                document.getElementById("Fast_download").innerHTML += "<i class=\"mdi mdi-close text-lg\"></i>"
                document.getElementById("Saving_time").innerHTML = "Saving time"
                document.getElementById("Saving_time").innerHTML += "<i class=\"mdi mdi-close text-lg\"></i>"
                document.getElementById("button_slow").innerHTML = "Slow Download"
                document.getElementById("fast").innerHTML = "Fast"
                document.getElementById("read").innerHTML = "<i class=\"mdi mdi-arrow-right-thick ml-1\"></i>"
                document.getElementById("read").innerHTML += "Read more"
                document.getElementById("fast_form").classList.remove("text-right")
                document.getElementById("fast_form").classList.add("text-left")
                document.getElementById("Download_Half_Price_fast").innerHTML = "Download Half Price";
                document.getElementById("Download_Half_Price_fast").innerHTML += "<i class=\"mdi mdi-check-bold text-lg\"></i>";
                document.getElementById("fast_down").innerHTML = "Fast download";
                document.getElementById("fast_down").innerHTML += "<i class=\"mdi mdi-check-bold text-lg\"></i>";
                document.getElementById("Saving_time_fast").innerHTML = "Saving time";
                document.getElementById("Saving_time_fast").innerHTML += "<i class=\"mdi mdi-check-bold text-lg\"></i>";
                document.getElementById("button_fast").innerHTML = "Saving time";
                document.getElementById("email_field").dir = "ltr";
                document.getElementById("email").innerHTML = "Email";
                document.getElementsByName('email')[0].placeholder = 'email';
                document.getElementById("password_field").dir = "ltr";
                document.getElementById("password").innerHTML = "Password";
                document.getElementById("forgot").innerHTML = "Forgot\n" +
                    "                                            password?";
                document.getElementsByName('password')[0].placeholder = 'password';
                document.getElementById("login").innerHTML = "Login";
                document.getElementById("not_account").innerHTML = "Don't have an\n" +
                    "                                    account\n" +
                    "                                    yet?";
                document.getElementById("not_account").innerHTML += " <a id=\"not_link\" href=\"#\" class=\"text-blue-600 hover:underline\">create account</a>.";
                console.log("success change to english")
            }
        }