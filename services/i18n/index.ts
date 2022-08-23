import { I18n } from "i18n-js"
import * as Localization from 'expo-localization'

const translations = {
  en: {
    sets: ' Sets',
    practice: 'Practice',
    restTimeBetweenSets: 'Rest between sets',
    seconds: ' Sec',
    eachSet: '',
    times: ' Shots',
    shots: 'each set',
    timeBetweenShots: 'Time between shots',
    gotoPlay: 'I\'m ready!',
    config: 'Config',
    sets_title: 'Sets: ',
    rest_title: 'Rest time(sec): ',
    shots_title: 'Shots: ',
    speed_title: 'Speed(sec): ',
    white_area: 'White circle: ',
    position: ' stroke position',
    red_area: 'Red area: ',
    direction: ' stroke direction',
    Let_go: 'Let\'s go!',
    back: 'Back to Home',
    currentSets: 'Set %{number}',
    finish: 'Completed!',
  },
  zh: {
    sets: '组',
    practice: '练习',
    restTimeBetweenSets: '每组间隔',
    seconds: '秒',
    eachSet: '每组',
    times: '次',
    shots: '击打',
    timeBetweenShots: '每次击打间隔',
    gotoPlay: '进入步法训练',
    config: '配置',
    sets_title: '组数：',
    rest_title: '每组间隔（秒）：',
    shots_title: '每组击打次数：',
    speed_title: '击打间隔（秒）：',
    white_area: '白色圆形表示',
    position: '击球站位',
    red_area: '红色区域表示',
    direction: '击打方向',
    Let_go: '开始吧',
    back: '返回',
    currentSets: '第%{number}组',
    finish: '完成训练',
  },
}

const i18n = new I18n(translations)
i18n.locale = Localization.locale
i18n.enableFallback = true

export default i18n
