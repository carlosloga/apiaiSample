function StorageImpl() {
                   var selectedLanguage = null;
               
               var languages = [
                                  {
                                      title: 'English',
                                      clientAccessToken: '92fa31b4e15c4ffca80dca2942deb6d3',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'en'
                                  },
                                  {
                                      title: 'Deutsch',
                                      clientAccessToken: 'b3de3bd82cd54254bbe35fd25d1f81bc',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'de'
                                  },
                                  {
                                      title: 'Español',
                                      clientAccessToken: 'b64ea3877df54cd7a0adc7f3a97929da',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'es'
                                  },
                                  {
                                      title: 'Français',
                                      clientAccessToken: '53c95265e618448f909b9562a7f2b29e',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'fr'
                                  },
                                  {
                                      title: 'Italiano',
                                      clientAccessToken: '700e909d22a344c7b405a5ca82e37d68',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'it'
                                  },
                                  {
                                      title: '日本語',
                                      clientAccessToken: 'f36555bbfff7480ea6b26e4c6a370077',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'ja'
                                  },
                                  {
                                      title: '한국의',
                                      clientAccessToken: '27865280e7fd436b8523938f40fc5b9d',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'ko'
                                  },
                                  {
                                      title: 'Português (Portugal)',
                                      clientAccessToken: '3f71440584844f048bad712daf9e19de',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'pt-PT'
                                  },
                                  {
                                      title: 'Português (Brasil)',
                                      clientAccessToken: '1d093587fc4f48c5a3529c6fb48c3291',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'pt-BR'
                                  },
                                  {
                                      title: 'Русский',
                                      clientAccessToken: 'bb93d0b7620141c98cd305fbaf989481',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'ru'
                                  },
                                  {
                                      title: '中文（简体)',
                                      clientAccessToken: '2feb604b0f59447db2f64a2c8a7c271d',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'zh-Hans'
                                  },
                                  {
                                      title: '中文（廣東話)',
                                      clientAccessToken: 'e0caf8e54b1041bc8955e44e69304026',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'zh-Hant-HK'
                                  },
                                  {
                                      title: '中文（繁體)',
                                      clientAccessToken: 'b0df697344d142f4a1597250741d0ed8',
                                      subscriptionKey: '6123ebe7185a4d9e94e441b7959cf2bc',
                                      lang: 'zh-Hant-TW'
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
                         debug: true,
                         baseURL: "https://dev.api.ai/api/",
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