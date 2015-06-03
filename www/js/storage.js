function StorageImpl() {
                   var selectedLanguage = null;
               
               var languages = [
                                  {
                                      title: 'English',
                                      clientAccessToken: '3485a96fb27744db83e78b8c4bc9e7b7',
                                      subscriptionKey: 'cb9693af-85ce-4fbf-844a-5563722fc27f',
                                      lang: 'en'
                                  },
                                  {
                                      title: 'Deutsch',
                                      clientAccessToken: '96807aac0e98426eaf684f4081b7e431',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'de'
                                  },
                                  {
                                      title: 'Español',
                                      clientAccessToken: '430d461ea8e64c09a4459560353a5b1d',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'es'
                                  },
                                  {
                                      title: 'Français',
                                      clientAccessToken: 'd6434b3bf49d4a93a25679782619f39d',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'fr'
                                  },
                                  {
                                      title: 'Italiano',
                                      clientAccessToken: '4319f7aa1765468194d9761432e4db36',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'it'
                                  },
                                  {
                                      title: '日本語',
                                      clientAccessToken: '6cab6813dc8c416f92c3c2e2b4a7bc27',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'ja'
                                  },
                                  {
                                      title: '한국의',
                                      clientAccessToken: 'b0219c024ee848eaa7cfb17dceb9934a',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'ko'
                                  },
                                  {
                                      title: 'Português (Portugal)',
                                      clientAccessToken: '3f71440584844f048bad712daf9e19de',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'pt'
                                  },
                                  {
                                      title: 'Português (Brasil)',
                                      clientAccessToken: '6076377eea9e4291854204795b55eee9',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'pt-BR'
                                  },
                                  {
                                      title: 'Русский',
                                      clientAccessToken: 'adcb900f02594f4186420c082e44173e',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'ru'
                                  },
                                  {
                                      title: '中文（简体)',
                                      clientAccessToken: '2b575c06deb246d2abe4bf769eb3200b',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'zh-CN'
                                  },
                                  {
                                      title: '中文（廣東話)',
                                      clientAccessToken: '00ef32d3e35f43178405c046a16f3843',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'zh-HK'
                                  },
                                  {
                                      title: '中文（繁體)',
                                      clientAccessToken: 'dd7ebc8a02974155aeffec26b21b55cf',
                                      subscriptionKey: '62f2522a-7404-4c28-b9ac-097ca5d8b32d',
                                      lang: 'zh-TW'
                                  }
                                  ];
    this.languages = languages;
            };

StorageImpl.prototype.getLanguages = function getLanguages()
{
    return this.languages;
};

StorageImpl.prototype.setSelectedLanguage = function setSelectedLanguage(value)
{
    this.selectedLanguage = value;
    
    try {
        ApiAIPlugin.init(
                         {
                         subscriptionKey: value.subscriptionKey,
                         clientAccessToken: value.clientAccessToken,
                         lang: value.lang,
                         baseURL: "https://api.api.ai/api/",
                         version: "20150204"
                         },
                         function () {
                            alert("Init success");
                         },
                         function (error) {
                            alert("Init error\n" + error);
                         });
    } catch (e) {
        alert(e);
    }
}

StorageImpl.prototype.getSelectedLanguage = function getSelectedLanguage()
{
    return this.selectedLanguage;
}

var Storage = (function () {
               var instance;
               
               function createInstance() {
                    var object = new StorageImpl();
                    return object;
               }

               
               
               return {
                    getInstance: function () {
                        if (!instance) {
                            instance = createInstance();
                           languages = instance.getLanguages();
                           instance.setSelectedLanguage(languages[0]);
                        }
                        return instance;
                    }
                };
            })();