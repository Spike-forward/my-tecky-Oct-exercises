const data = [{
        "name": "Hong Kong",
        "topLevelDomain": [
            ".hk"
        ],
        "alpha2Code": "HK",
        "alpha3Code": "HKG",
        "callingCodes": [
            "852"
        ],
        "capital": "City of Victoria",
        "altSpellings": [
            "HK",
            "香港"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "population": 7324300,
        "latlng": [
            22.25,
            114.16666666
        ],
        "demonym": "Chinese",
        "area": 1104.0,
        "gini": 53.3,
        "timezones": [
            "UTC+08:00"
        ],
        "borders": [
            "CHN"
        ],
        "nativeName": "香港",
        "numericCode": "344",
        "currencies": [{
            "code": "HKD",
            "name": "Hong Kong dollar",
            "symbol": "$"
        }],
        "languages": [{
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "translations": {
            "de": "Hong Kong",
            "es": "Hong Kong",
            "fr": "Hong Kong",
            "ja": "香港",
            "it": "Hong Kong",
            "br": "Hong Kong",
            "pt": "Hong Kong",
            "nl": "Hongkong",
            "hr": "Hong Kong",
            "fa": "هنگ‌کنگ"
        },
        "flag": "https://restcountries.eu/data/hkg.svg",
        "regionalBlocs": [],
        "cioc": "HKG"
    },
    { "test": "1" }
]

const a = data[0]

for (let key in a) {

    let title = key[0];
    let content = a[key]

    let final_title = title.toUpperCase() + key.substring(1)

    if (Array.isArray(content)) {
        // managing array
        if (content.length === 0) {
            console.log(final_title + ':' + '[]')
        } else if (content.length === 1) {

            if (content[0] instanceof Object) {
                // managing array in array
                // console.log('checking')
                // console.log(valueInArray instanceof Object)
                for (let key in content[0]) {
                    console.log(final_title + '_' + key + ':', content[0][key])
                }
            } else {
                console.log(final_title + ':', content[0])
            }

        } else {



            if (content[0] instanceof Object) {

                for (let i = 0; i < content.length; i++) {
                    for (let key in content[i]) {
                        console.log(final_title + '_' + key + ':', content[i][key])
                    }
                }


            } else {

                result = final_title + ': '
                for (let i = 0; i < content.length; i++) {
                    if (!(i == content.length - 1))
                        result = result + content[i] + ','
                    else
                        result = result + content[i]

                }
                console.log(result)
            }

        }
    } else if (content instanceof Object) {
        for (let key in content) {
            console.log(final_title + '_' + key + ':', content[key])
        }
    } else {
        let object_title = final_title
        console.log(object_title + ':', content)
    }

}