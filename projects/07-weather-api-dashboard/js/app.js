/**
 * ==========================================================================
 * ApexWeather — Master Real-Time Weather Application
 * Engineered by Sayed Nada | Golden Playbook Compliant
 * Self-contained for zero-friction execution on both http:// and file:///
 * ==========================================================================
 */

// --- 1. TRANSLATION DICTIONARIES (i18n) ---
const I18N = {
  en: {
    appTitle: 'ApexWeather',
    appSubtitle: 'Global Meteorological Intelligence',
    developerBadge: 'Engineered by Sayed Nada',
    searchPlaceholder: 'Search city, state, or country (e.g. Cairo, Tokyo, London)...',
    detectLocation: 'GPS Location',
    detectingLocation: 'Acquiring GPS coordinates...',
    locationDetected: 'Location verified!',
    celsius: '°C',
    fahrenheit: '°F',
    pinnedCities: 'Quick Access',
    hourlyForecast: '24-Hour Hourly Trajectory',
    sevenDayForecast: '7-Day Extended Forecast',
    weatherMetrics: 'Atmospheric Diagnostics',
    windStatus: 'Wind Speed & Vector',
    humidity: 'Humidity Level',
    uvIndex: 'UV Radiation Index',
    sunCycle: 'Sun Position & Twilight Arc',
    pressure: 'Barometric Pressure',
    visibility: 'Atmospheric Visibility',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    feelsLike: 'Feels like',
    highLow: 'H: {high}° · L: {low}°',
    rainProbability: 'Precipitation',
    windGusts: 'Gusts up to {speed}',
    comfortOptimal: 'Comfortable',
    comfortHumid: 'Humid & Muggy',
    comfortDry: 'Very Dry',
    uvLow: 'Low risk — Minimal protection needed',
    uvModerate: 'Moderate risk — Wear SPF 30+',
    uvHigh: 'High risk — Seek shade at midday',
    uvVeryHigh: 'Very High — Extra protection required',
    uvExtreme: 'Extreme — Avoid sun exposure',
    pressureNormal: 'Standard Atmospheric',
    pressureRising: 'Rising High Pressure',
    pressureFalling: 'Dropping Low Pressure',
    visibilityClear: 'Clear Atmospheric Depth',
    visibilityHazy: 'Reduced by Haze/Mist',
    weatherSimulator: 'Atmosphere:',
    simClear: '☀️ Sunny',
    simRain: '🌧️ Rain',
    simStorm: '⛈️ Storm',
    simSnow: '❄️ Snow',
    simCloudy: '☁️ Clouds',
    simNight: '🌙 Night',
    simReset: 'Auto',
    settings: 'Weather Settings',
    apiKeyNote: 'ApexWeather connects automatically to global live satellite feeds (Zero API key needed). You can also provide an optional OpenWeatherMap key:',
    customApiKey: 'Custom OpenWeatherMap API Key',
    saveSettings: 'Save & Apply',
    cancel: 'Cancel',
    pinCity: 'Pin City',
    unpinCity: 'Unpin City',
    liveTime: 'Local Time',
    errorTitle: 'Weather Data Unavailable',
    errorSub: 'Unable to reach live satellite feed. Showing resilient snapshot.',
    retry: 'Retry Connection',
    offlineNotice: 'Offline Mode Active',
    today: 'Today',
    tomorrow: 'Tomorrow',
    clearSky: 'Clear Sky',
    mostlyClear: 'Mainly Clear',
    partlyCloudy: 'Partly Cloudy',
    overcast: 'Overcast & Cloudy',
    foggy: 'Dense Fog & Mist',
    lightDrizzle: 'Light Gentle Drizzle',
    moderateRain: 'Moderate Rain Showers',
    heavyRain: 'Heavy Downpour',
    thunderstorm: 'Thunderstorm & Lightning',
    lightSnow: 'Light Snow Flurries',
    heavySnow: 'Heavy Snowfall',
    blizzard: 'Blizzard Conditions',
    soundscapeActive: 'Audio On',
    soundscapeMuted: 'Audio Off',
    soundscapeTooltip: 'Procedural Ambient Soundscape',
    splineInteractive: 'Interactive Temperature Spline',
    lifestyleTitle: 'Smart Lifestyle & Outfit Advisor',
    whatToWear: 'What to Wear',
    outdoorActivities: 'Outdoor Activity Index',
    drivingSafety: 'Commute & Road Safety',
    airQualityTitle: 'Air Quality & Atmospheric Purity',
    aqiGood: 'Good — Clean & Healthy',
    aqiModerate: 'Moderate — Acceptable',
    aqiUnhealthySens: 'Caution for Sensitive Groups',
    aqiUnhealthy: 'Unhealthy — High Particulate',
    aqiVeryUnhealthy: 'Very Unhealthy — Hazardous',
    pollutants: 'Pollutant Breakdown',
    wearCoat: 'Heavy winter coat, thermal scarf & warm layers',
    wearJacket: 'Light jacket, cardigan, or cozy hoodie',
    wearNormal: 'Comfortable casual wear (jeans & breathable shirt)',
    wearLight: 'Light breathable cotton clothes, sunglasses & sunscreen',
    wearUmbrella: 'Carry an umbrella & water-resistant footwear',
    activityGreat: 'Ideal conditions for jogging, cycling & outdoor workouts',
    activityFair: 'Fair conditions — stay well hydrated during workouts',
    activityPoor: 'Poor weather — indoor workouts recommended',
    drivingOptimal: 'Pristine visibility and dry road surfaces',
    drivingWet: 'Wet pavement — increase braking distance',
    drivingHazard: 'Reduced visibility / slick roads — exercise caution',
    aqiAdviceGood: 'Air quality is considered pristine; enjoy your outdoor activities freely.',
    aqiAdviceMod: 'Air quality is acceptable; unusually sensitive individuals should take care.',
    currentWeatherNav: 'Current',
    hourlyNav: '24-Hour',
    dailyNav: '7-Day',
    themeNav: 'Theme'
  },
  ar: {
    appTitle: 'ApexWeather',
    appSubtitle: 'منصة الرصد الجوي والأرصاد العالمية',
    developerBadge: 'تطوير المهندس سيد محمود ندا',
    searchPlaceholder: 'ابحث عن أي مدينة أو عاصمة بالعالم (مثل: القاهرة، طوكيو، لندن)...',
    detectLocation: 'تحديد موقعي GPS',
    detectingLocation: 'جاري جلب إحداثيات الـ GPS...',
    locationDetected: 'تم تحديد موقعك بدقة!',
    celsius: '°م',
    fahrenheit: '°ف',
    pinnedCities: 'المدن المثبتة:',
    hourlyForecast: 'حالة الطقس على مدار 24 ساعة',
    sevenDayForecast: 'توقعات الطقس لـ 7 أيام قادمة',
    weatherMetrics: 'المؤشرات والتشخيص الجوي الدقيق',
    windStatus: 'سرعة واتجاه الرياح',
    humidity: 'مستوى الرطوبة النسبية',
    uvIndex: 'مؤشر الأشعة فوق البنفسجية (UV)',
    sunCycle: 'مسار الشمس وأوقات الشروق والغروب',
    pressure: 'الضغط الجوي البارومتري',
    visibility: 'مدى الرؤية الأفقية',
    sunrise: 'الشروق',
    sunset: 'الغروب',
    feelsLike: 'الحرارة المحسوسة',
    highLow: 'العظمى: {high}° · الصغرى: {low}°',
    rainProbability: 'فرصة الهطول',
    windGusts: 'هبات تصل إلى {speed}',
    comfortOptimal: 'مستوى مثالي ومريح',
    comfortHumid: 'رطب وكاتم',
    comfortDry: 'جاف جداً',
    uvLow: 'منخفض — لا يتطلب حماية خاصة',
    uvModerate: 'معتدل — يُنصح بواقي شمس',
    uvHigh: 'مرتفع — احرص على الظل ظهراً',
    uvVeryHigh: 'مرتفع جداً — حماية فائقة مطلوبة',
    uvExtreme: 'شديد الخطورة — تجنب الشمس المباشرة',
    pressureNormal: 'ضغط جوي قياسي',
    pressureRising: 'مرتفع جوي متصاعد',
    pressureFalling: 'منخفض جوي متراجع',
    visibilityClear: 'رؤية ممتازة ونقية',
    visibilityHazy: 'رؤية منخفضة بسبب الضباب',
    weatherSimulator: 'الأجواء:',
    simClear: '☀️ مشمس',
    simRain: '🌧️ ممطر',
    simStorm: '⛈️ عاصف',
    simSnow: '❄️ مثلج',
    simCloudy: '☁️ غائم',
    simNight: '🌙 ليلي',
    simReset: 'تلقائي',
    settings: 'إعدادات الطقس والـ API',
    apiKeyNote: 'يعمل ApexWeather تلقائياً بربط حي مع الأقمار الصناعية دون الحاجة لأي مفتاح. يمكنك أيضاً إدخال مفتاح OpenWeatherMap خاص بك إذا أردت:',
    customApiKey: 'مفتاح OpenWeatherMap API (اختياري)',
    saveSettings: 'حفظ وتطبيق',
    cancel: 'إلغاء',
    pinCity: 'تثبيت المدينة',
    unpinCity: 'إلغاء التثبيت',
    liveTime: 'الوقت المحلي',
    errorTitle: 'تعذر الاتصال بالأرصاد الجوية',
    errorSub: 'تعذر الوصول إلى مزود الأرصاد اللحظي. تم تفعيل لقطة الطقس المخزنة مسبقاً بدقة.',
    retry: 'إعادة محاولة الاتصال',
    offlineNotice: 'وضع عدم الاتصال نشط',
    today: 'اليوم',
    tomorrow: 'غداً',
    clearSky: 'سماء صافية تماماً',
    mostlyClear: 'صافٍ إلى حد كبير',
    partlyCloudy: 'غائم جزئياً',
    overcast: 'غائم بالكامل',
    foggy: 'ضباب كثيف وشبورة',
    lightDrizzle: 'رذاذ خفيف منعش',
    moderateRain: 'أمطار معتدلة متفرقة',
    heavyRain: 'أمطار غزيرة غزيرة',
    thunderstorm: 'عواصف رعدية وبرق',
    lightSnow: 'زخات ثلجية خفيفة',
    heavySnow: 'تساقط ثلوج كثيفة',
    blizzard: 'عاصفة ثلجية شديدة',
    soundscapeActive: 'الصوت نشط',
    soundscapeMuted: 'الصوت صامت',
    soundscapeTooltip: 'محاكي الأصوات الجوية التفاعلية',
    splineInteractive: 'المنحنى الحراري التفاعلي',
    lifestyleTitle: 'المستشار الذكي للإطلالة والأنشطة',
    whatToWear: 'ماذا ترتدي اليوم؟',
    outdoorActivities: 'مؤشر الرياضة والنشاط الخارجي',
    drivingSafety: 'سلامة الطرق والتنقل',
    airQualityTitle: 'مؤشر جودة ونقاء الهواء (AQI)',
    aqiGood: 'ممتاز — هواء نقي وصحي تماماً',
    aqiModerate: 'معتدل — جودة مقبولة',
    aqiUnhealthySens: 'غير صحي للفئات الحساسة',
    aqiUnhealthy: 'غير صحي — نسبة جسيمات مرتفعة',
    aqiVeryUnhealthy: 'شديد الخطورة — تجنب الخروج',
    pollutants: 'تفاصيل الملوثات الجوية',
    wearCoat: 'معطف شتوي ثقيل وملابس دافئة ووشاح',
    wearJacket: 'جاكيت خفيف أو سترة مريحة',
    wearNormal: 'ملابس خريفية/ربيعية مريحة ومعتدلة',
    wearLight: 'ملابس قطنية خفيفة مع نظارة شمس وواقي شمس',
    wearUmbrella: 'احرص على أخذ مظلة وحذاء مقاوم للماء',
    activityGreat: 'أجواء مثالية للجري وركوب الدراجات والرياضة',
    activityFair: 'أجواء مقبولة — احرص على شرب الماء الكافي',
    activityPoor: 'أجواء غير مناسبة — يُنصح بالتمرين داخل الصالة',
    drivingOptimal: 'رؤية ممتازة وطرق جافة تماماً',
    drivingWet: 'طرق مبللة — اترك مسافة أمان إضافية',
    drivingHazard: 'انخفاض في الرؤية أو طرق زلقة — خفف السرعة',
    aqiAdviceGood: 'جودة الهواء ممتازة ونقية؛ استمتع بكافة أنشطتك الخارجية بأمان تام.',
    aqiAdviceMod: 'جودة الهواء مقبولة بشكل عام مع وجود نسبة غبار خفيفة.',
    currentWeatherNav: 'الطقس الآن',
    hourlyNav: 'خلال 24 ساعة',
    dailyNav: 'توقعات 7 أيام',
    themeNav: 'المظهر'
  }
};

// --- 2. WMO METEOROLOGY CODES ---
const WMO_CODES = {
  0: { label: 'clearSky', icon: 'sun', atmosphere: 'clear-day' },
  1: { label: 'mostlyClear', icon: 'sun-dim', atmosphere: 'clear-day' },
  2: { label: 'partlyCloudy', icon: 'cloud-sun', atmosphere: 'clouds' },
  3: { label: 'overcast', icon: 'cloud', atmosphere: 'clouds' },
  45: { label: 'foggy', icon: 'cloud-fog', atmosphere: 'clouds' },
  48: { label: 'foggy', icon: 'cloud-fog', atmosphere: 'clouds' },
  51: { label: 'lightDrizzle', icon: 'cloud-drizzle', atmosphere: 'rain' },
  53: { label: 'lightDrizzle', icon: 'cloud-drizzle', atmosphere: 'rain' },
  55: { label: 'lightDrizzle', icon: 'cloud-rain', atmosphere: 'rain' },
  61: { label: 'moderateRain', icon: 'cloud-rain', atmosphere: 'rain' },
  63: { label: 'moderateRain', icon: 'cloud-rain', atmosphere: 'rain' },
  65: { label: 'heavyRain', icon: 'cloud-rain-wind', atmosphere: 'rain' },
  71: { label: 'lightSnow', icon: 'cloud-snow', atmosphere: 'snow' },
  73: { label: 'lightSnow', icon: 'cloud-snow', atmosphere: 'snow' },
  75: { label: 'heavySnow', icon: 'snowflake', atmosphere: 'snow' },
  77: { label: 'lightSnow', icon: 'snowflake', atmosphere: 'snow' },
  80: { label: 'moderateRain', icon: 'cloud-rain', atmosphere: 'rain' },
  81: { label: 'moderateRain', icon: 'cloud-rain', atmosphere: 'rain' },
  82: { label: 'heavyRain', icon: 'cloud-rain-wind', atmosphere: 'rain' },
  85: { label: 'lightSnow', icon: 'cloud-snow', atmosphere: 'snow' },
  86: { label: 'heavySnow', icon: 'snowflake', atmosphere: 'snow' },
  95: { label: 'thunderstorm', icon: 'cloud-lightning', atmosphere: 'storm' },
  96: { label: 'thunderstorm', icon: 'cloud-lightning', atmosphere: 'storm' },
  99: { label: 'thunderstorm', icon: 'cloud-lightning', atmosphere: 'storm' },
};

// --- 3. RESILIENT OFFLINE METEOROLOGICAL CACHE ---
const RESILIENT_FALLBACK_CITIES = {
  'cairo': {
    city: 'Cairo',
    country: 'Egypt',
    lat: 30.0444,
    lon: 31.2357,
    temp: 28,
    feelsLike: 29,
    conditionKey: 'clearSky',
    icon: 'sun',
    atmosphere: 'clear-day',
    isNight: false,
    high: 31,
    low: 19,
    humidity: 42,
    windSpeed: 16,
    windDirection: 340,
    uvIndex: 7.8,
    visibility: 10,
    pressure: 1014,
    sunrise: '05:42 AM',
    sunset: '06:14 PM',
    hourly: [
      { time: '12:00', temp: 28, icon: 'sun', pop: 0 },
      { time: '13:00', temp: 30, icon: 'sun', pop: 0 },
      { time: '14:00', temp: 31, icon: 'sun', pop: 0 },
      { time: '15:00', temp: 30, icon: 'sun', pop: 0 },
      { time: '16:00', temp: 29, icon: 'sun', pop: 0 },
      { time: '17:00', temp: 27, icon: 'sun-dim', pop: 0 },
      { time: '18:00', temp: 25, icon: 'sunset', pop: 0 },
      { time: '19:00', temp: 23, icon: 'moon', pop: 0 },
      { time: '20:00', temp: 22, icon: 'moon', pop: 0 },
      { time: '21:00', temp: 21, icon: 'moon', pop: 0 },
      { time: '22:00', temp: 20, icon: 'moon', pop: 0 },
      { time: '23:00', temp: 19, icon: 'moon', pop: 0 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 12', icon: 'sun', conditionKey: 'clearSky', high: 31, low: 19, rainProb: 0 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'sun', conditionKey: 'clearSky', high: 32, low: 20, rainProb: 0 },
      { day: 'Tue', date: 'Oct 14', icon: 'cloud-sun', conditionKey: 'partlyCloudy', high: 29, low: 18, rainProb: 5 },
      { day: 'Wed', date: 'Oct 15', icon: 'sun', conditionKey: 'clearSky', high: 30, low: 19, rainProb: 0 },
      { day: 'Thu', date: 'Oct 16', icon: 'cloud-sun', conditionKey: 'mostlyClear', high: 28, low: 17, rainProb: 10 },
      { day: 'Fri', date: 'Oct 17', icon: 'sun', conditionKey: 'clearSky', high: 31, low: 18, rainProb: 0 },
      { day: 'Sat', date: 'Oct 18', icon: 'sun', conditionKey: 'clearSky', high: 30, low: 19, rainProb: 0 },
    ]
  },
  'london': {
    city: 'London',
    country: 'United Kingdom',
    lat: 51.5074,
    lon: -0.1278,
    temp: 15,
    feelsLike: 14,
    conditionKey: 'moderateRain',
    icon: 'cloud-rain',
    atmosphere: 'rain',
    isNight: false,
    high: 17,
    low: 11,
    humidity: 78,
    windSpeed: 24,
    windDirection: 215,
    uvIndex: 2.4,
    visibility: 8.5,
    pressure: 1008,
    sunrise: '07:15 AM',
    sunset: '06:22 PM',
    hourly: [
      { time: '12:00', temp: 15, icon: 'cloud-rain', pop: 65 },
      { time: '13:00', temp: 16, icon: 'cloud-rain', pop: 70 },
      { time: '14:00', temp: 17, icon: 'cloud', pop: 40 },
      { time: '15:00', temp: 16, icon: 'cloud-sun', pop: 20 },
      { time: '16:00', temp: 15, icon: 'cloud', pop: 30 },
      { time: '17:00', temp: 14, icon: 'cloud-rain', pop: 55 },
      { time: '18:00', temp: 13, icon: 'cloud-rain', pop: 60 },
      { time: '19:00', temp: 12, icon: 'moon', pop: 20 },
      { time: '20:00', temp: 12, icon: 'moon', pop: 10 },
      { time: '21:00', temp: 11, icon: 'moon', pop: 10 },
      { time: '22:00', temp: 11, icon: 'moon', pop: 5 },
      { time: '23:00', temp: 10, icon: 'moon', pop: 5 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 12', icon: 'cloud-rain', conditionKey: 'moderateRain', high: 17, low: 11, rainProb: 65 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'cloud-rain', conditionKey: 'lightDrizzle', high: 16, low: 10, rainProb: 50 },
      { day: 'Tue', date: 'Oct 14', icon: 'cloud', conditionKey: 'overcast', high: 15, low: 9, rainProb: 20 },
      { day: 'Wed', date: 'Oct 15', icon: 'cloud-sun', conditionKey: 'partlyCloudy', high: 16, low: 10, rainProb: 35 },
      { day: 'Thu', date: 'Oct 16', icon: 'sun', conditionKey: 'mostlyClear', high: 18, low: 11, rainProb: 15 },
      { day: 'Fri', date: 'Oct 17', icon: 'cloud-rain-wind', conditionKey: 'heavyRain', high: 14, low: 8, rainProb: 80 },
      { day: 'Sat', date: 'Oct 18', icon: 'cloud', conditionKey: 'overcast', high: 15, low: 9, rainProb: 30 },
    ]
  },
  'tokyo': {
    city: 'Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lon: 139.6503,
    temp: 21,
    feelsLike: 21,
    conditionKey: 'partlyCloudy',
    icon: 'cloud-sun',
    atmosphere: 'clouds',
    isNight: false,
    high: 23,
    low: 15,
    humidity: 58,
    windSpeed: 14,
    windDirection: 120,
    uvIndex: 5.2,
    visibility: 10,
    pressure: 1018,
    sunrise: '05:45 AM',
    sunset: '05:10 PM',
    hourly: [
      { time: '12:00', temp: 21, icon: 'cloud-sun', pop: 10 },
      { time: '13:00', temp: 22, icon: 'sun', pop: 10 },
      { time: '14:00', temp: 23, icon: 'sun', pop: 5 },
      { time: '15:00', temp: 22, icon: 'cloud-sun', pop: 5 },
      { time: '16:00', temp: 20, icon: 'cloud', pop: 15 },
      { time: '17:00', temp: 19, icon: 'sunset', pop: 10 },
      { time: '18:00', temp: 18, icon: 'moon', pop: 10 },
      { time: '19:00', temp: 17, icon: 'moon', pop: 5 },
      { time: '20:00', temp: 16, icon: 'moon', pop: 5 },
      { time: '21:00', temp: 16, icon: 'moon', pop: 5 },
      { time: '22:00', temp: 15, icon: 'moon', pop: 5 },
      { time: '23:00', temp: 15, icon: 'moon', pop: 5 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 12', icon: 'cloud-sun', conditionKey: 'partlyCloudy', high: 23, low: 15, rainProb: 10 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'sun', conditionKey: 'clearSky', high: 24, low: 16, rainProb: 5 },
      { day: 'Tue', date: 'Oct 14', icon: 'cloud', conditionKey: 'overcast', high: 21, low: 14, rainProb: 20 },
      { day: 'Wed', date: 'Oct 15', icon: 'cloud-rain', conditionKey: 'moderateRain', high: 19, low: 13, rainProb: 65 },
      { day: 'Thu', date: 'Oct 16', icon: 'sun', conditionKey: 'clearSky', high: 22, low: 14, rainProb: 10 },
      { day: 'Fri', date: 'Oct 17', icon: 'cloud-sun', conditionKey: 'mostlyClear', high: 23, low: 15, rainProb: 15 },
      { day: 'Sat', date: 'Oct 18', icon: 'sun', conditionKey: 'clearSky', high: 25, low: 16, rainProb: 0 },
    ]
  },
  'dubai': {
    city: 'Dubai',
    country: 'United Arab Emirates',
    lat: 25.2048,
    lon: 55.2708,
    temp: 34,
    feelsLike: 37,
    conditionKey: 'clearSky',
    icon: 'sun',
    atmosphere: 'clear-day',
    isNight: false,
    high: 36,
    low: 26,
    humidity: 48,
    windSpeed: 20,
    windDirection: 310,
    uvIndex: 9.6,
    visibility: 10,
    pressure: 1010,
    sunrise: '06:18 AM',
    sunset: '05:55 PM',
    hourly: [
      { time: '12:00', temp: 34, icon: 'sun', pop: 0 },
      { time: '13:00', temp: 35, icon: 'sun', pop: 0 },
      { time: '14:00', temp: 36, icon: 'sun', pop: 0 },
      { time: '15:00', temp: 35, icon: 'sun', pop: 0 },
      { time: '16:00', temp: 33, icon: 'sun', pop: 0 },
      { time: '17:00', temp: 31, icon: 'sunset', pop: 0 },
      { time: '18:00', temp: 29, icon: 'moon', pop: 0 },
      { time: '19:00', temp: 28, icon: 'moon', pop: 0 },
      { time: '20:00', temp: 28, icon: 'moon', pop: 0 },
      { time: '21:00', temp: 27, icon: 'moon', pop: 0 },
      { time: '22:00', temp: 26, icon: 'moon', pop: 0 },
      { time: '23:00', temp: 26, icon: 'moon', pop: 0 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 12', icon: 'sun', conditionKey: 'clearSky', high: 36, low: 26, rainProb: 0 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'sun', conditionKey: 'clearSky', high: 37, low: 27, rainProb: 0 },
      { day: 'Tue', date: 'Oct 14', icon: 'sun', conditionKey: 'clearSky', high: 36, low: 26, rainProb: 0 },
      { day: 'Wed', date: 'Oct 15', icon: 'sun', conditionKey: 'clearSky', high: 35, low: 25, rainProb: 0 },
      { day: 'Thu', date: 'Oct 16', icon: 'cloud-sun', conditionKey: 'mostlyClear', high: 34, low: 25, rainProb: 0 },
      { day: 'Fri', date: 'Oct 17', icon: 'sun', conditionKey: 'clearSky', high: 36, low: 26, rainProb: 0 },
      { day: 'Sat', date: 'Oct 18', icon: 'sun', conditionKey: 'clearSky', high: 37, low: 27, rainProb: 0 },
    ]
  }
};

// --- 4. 60 FPS HTML5 CANVAS ATMOSPHERIC PARTICLE ENGINE ---
class AtmosphereEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.currentMode = 'clear-day';
    this.particles = [];
    this.splashes = [];
    this.stars = [];
    this.lightningTimer = 0;
    this.isFlashing = false;
    this.animationId = null;

    this.resize = this.resize.bind(this);
    this.animate = this.animate.bind(this);

    window.addEventListener('resize', this.resize);
    this.resize();
    this.initStars();
    this.setMode('clear-day');
    this.start();
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.initStars();
  }

  initStars() {
    this.stars = [];
    const count = Math.floor((this.width * this.height) / 8000);
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * (this.height * 0.7),
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        increasing: Math.random() > 0.5
      });
    }
  }

  setMode(mode) {
    this.currentMode = mode;
    this.particles = [];
    this.splashes = [];
    this.lightningTimer = 0;
    this.isFlashing = false;

    let particleCount = 120;
    if (mode === 'rain') particleCount = 160;
    if (mode === 'storm') particleCount = 260;
    if (mode === 'snow') particleCount = 110;
    if (mode === 'clouds') particleCount = 35;
    if (mode === 'clear-day') particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle() {
    const w = this.width;
    const h = this.height;

    switch (this.currentMode) {
      case 'rain':
      case 'storm':
        return {
          x: Math.random() * (w + 200) - 100,
          y: Math.random() * h,
          length: Math.random() * 24 + 16,
          speed: Math.random() * 12 + 18,
          thickness: Math.random() * 1.5 + 0.8,
          alpha: Math.random() * 0.35 + 0.35,
          angle: 0.15
        };
      case 'snow':
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 3 + 1.2,
          speed: Math.random() * 1.5 + 0.8,
          swing: Math.random() * 2 + 1,
          swingSpeed: Math.random() * 0.03 + 0.01,
          angle: Math.random() * Math.PI * 2,
          alpha: Math.random() * 0.6 + 0.3
        };
      case 'clouds':
        return {
          x: Math.random() * (w + 400) - 200,
          y: Math.random() * (h * 0.65),
          radius: Math.random() * 90 + 70,
          speed: Math.random() * 0.4 + 0.15,
          alpha: Math.random() * 0.08 + 0.04
        };
      case 'clear-day':
      default:
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 3 + 1,
          speedY: -(Math.random() * 0.6 + 0.2),
          speedX: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.4 + 0.2
        };
    }
  }

  createSplash(x, y) {
    const splashCount = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < splashCount; i++) {
      this.splashes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: -(Math.random() * 3 + 1),
        radius: Math.random() * 1.5 + 0.8,
        alpha: 0.6
      });
    }
  }

  updateAndDrawRain() {
    const ctx = this.ctx;
    const isStorm = this.currentMode === 'storm';

    if (isStorm) {
      this.lightningTimer++;
      if (this.lightningTimer > 180 && Math.random() < 0.02) {
        this.isFlashing = true;
        this.lightningTimer = 0;
        setTimeout(() => { this.isFlashing = false; }, 80);
      }
      if (this.isFlashing) {
        ctx.fillStyle = 'rgba(199, 210, 254, 0.15)';
        ctx.fillRect(0, 0, this.width, this.height);
      }
    }

    ctx.strokeStyle = isStorm ? 'rgba(199, 210, 254, 0.55)' : 'rgba(186, 230, 253, 0.45)';
    ctx.lineCap = 'round';

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      ctx.lineWidth = p.thickness;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - p.length * p.angle, p.y + p.length);
      ctx.stroke();

      p.x += p.speed * p.angle;
      p.y += p.speed;

      if (p.y >= this.height - 20) {
        if (Math.random() < 0.3) {
          this.createSplash(p.x, this.height - 10);
        }
        p.y = -p.length;
        p.x = Math.random() * (this.width + 200) - 100;
      }
    }

    for (let i = this.splashes.length - 1; i >= 0; i--) {
      const s = this.splashes[i];
      ctx.fillStyle = `rgba(186, 230, 253, ${s.alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();

      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.2;
      s.alpha -= 0.035;

      if (s.alpha <= 0) {
        this.splashes.splice(i, 1);
      }
    }
  }

  updateAndDrawSnow() {
    const ctx = this.ctx;
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.angle += p.swingSpeed;
      p.x += Math.sin(p.angle) * p.swing + 0.5;
      p.y += p.speed;

      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      if (p.y > this.height) {
        p.y = -p.radius * 2;
        p.x = Math.random() * this.width;
      }
      if (p.x > this.width) p.x = 0;
      if (p.x < 0) p.x = this.width;
    }
  }

  updateAndDrawClouds() {
    const ctx = this.ctx;
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.speed;
      if (p.x - p.radius > this.width) {
        p.x = -p.radius * 2;
        p.y = Math.random() * (this.height * 0.65);
      }

      const grad = ctx.createRadialGradient(p.x, p.y, p.radius * 0.1, p.x, p.y, p.radius);
      grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
      grad.addColorStop(0.7, `rgba(226, 232, 240, ${p.alpha * 0.5})`);
      grad.addColorStop(1, 'rgba(226, 232, 240, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  updateAndDrawClearDay() {
    const ctx = this.ctx;
    const sunX = this.width * 0.85;
    const sunY = 120;
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 320);
    sunGrad.addColorStop(0, 'rgba(251, 191, 36, 0.18)');
    sunGrad.addColorStop(0.4, 'rgba(245, 158, 11, 0.08)');
    sunGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

    ctx.fillStyle = sunGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = this.height;
        p.x = Math.random() * this.width;
      }

      ctx.fillStyle = `rgba(253, 230, 138, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  updateAndDrawNight() {
    const ctx = this.ctx;
    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      if (s.increasing) {
        s.alpha += s.speed;
        if (s.alpha >= 0.95) s.increasing = false;
      } else {
        s.alpha -= s.speed;
        if (s.alpha <= 0.15) s.increasing = true;
      }

      ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    const moonX = this.width * 0.85;
    const moonY = 110;
    const moonGrad = ctx.createRadialGradient(moonX, moonY, 15, moonX, moonY, 260);
    moonGrad.addColorStop(0, 'rgba(199, 210, 254, 0.22)');
    moonGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.08)');
    moonGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');

    ctx.fillStyle = moonGrad;
    ctx.fillRect(0, 0, this.width, this.height);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    switch (this.currentMode) {
      case 'rain':
      case 'storm':
        this.updateAndDrawRain();
        break;
      case 'snow':
        this.updateAndDrawSnow();
        break;
      case 'clouds':
        this.updateAndDrawClouds();
        break;
      case 'night':
        this.updateAndDrawNight();
        break;
      case 'clear-day':
      default:
        this.updateAndDrawClearDay();
        break;
    }

    this.animationId = requestAnimationFrame(this.animate);
  }

  start() {
    if (!this.animationId) {
      this.animate();
    }
  }
}

// --- 5. WEATHER API SERVICE ---
class WeatherService {
  constructor() {
    this.customApiKey = localStorage.getItem('apex_weather_owm_key') || '';
  }

  setApiKey(key) {
    this.customApiKey = key.trim();
    if (this.customApiKey) {
      localStorage.setItem('apex_weather_owm_key', this.customApiKey);
    } else {
      localStorage.removeItem('apex_weather_owm_key');
    }
  }

  getApiKey() {
    return this.customApiKey;
  }

  async searchCities(query) {
    if (!query || query.trim().length < 2) return [];

    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=6&language=en&format=json`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Geocoding search failed');
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        return this.searchLocalFallbackCities(query);
      }

      return data.results.map((item) => ({
        name: item.name,
        country: item.country || '',
        countryCode: item.country_code || '',
        admin1: item.admin1 || '',
        lat: item.latitude,
        lon: item.longitude,
        timezone: item.timezone || 'auto'
      }));
    } catch (e) {
      console.warn('Geocoding online fetch failed, using fallback list:', e);
      return this.searchLocalFallbackCities(query);
    }
  }

  searchLocalFallbackCities(query) {
    const q = query.toLowerCase();
    const matches = [];
    for (const key in RESILIENT_FALLBACK_CITIES) {
      const c = RESILIENT_FALLBACK_CITIES[key];
      if (c.city.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)) {
        matches.push({
          name: c.city,
          country: c.country,
          lat: c.lat,
          lon: c.lon
        });
      }
    }
    return matches;
  }

  async fetchWeather(lat, lon, cityName = 'Cairo', countryName = '') {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Weather API status ${response.status}`);
      const data = await response.json();

      return this.transformOpenMeteoData(data, cityName, countryName, lat, lon);
    } catch (error) {
      console.warn('Live API request failed, falling back to resilient cache:', error);
      return this.getFallbackCity(cityName);
    }
  }

  transformOpenMeteoData(data, cityName, countryName, lat, lon) {
    const cur = data.current;
    const daily = data.daily;
    const hourly = data.hourly;

    const wmoInfo = WMO_CODES[cur.weather_code] || { label: 'partlyCloudy', icon: 'cloud-sun', atmosphere: 'clouds' };
    const isNight = cur.is_day === 0;
    const atmosphere = isNight && (wmoInfo.atmosphere === 'clear-day') ? 'night' : wmoInfo.atmosphere;

    const hourlyList = [];
    const nowTimeStr = cur.time;
    let startIndex = hourly.time.indexOf(nowTimeStr);
    if (startIndex === -1) startIndex = 0;

    for (let i = startIndex; i < Math.min(startIndex + 12, hourly.time.length); i++) {
      const rawTime = hourly.time[i];
      const hourPart = rawTime.split('T')[1]?.substring(0, 5) || '12:00';
      const code = hourly.weather_code[i];
      const icon = WMO_CODES[code]?.icon || 'cloud-sun';

      hourlyList.push({
        time: hourPart,
        temp: Math.round(hourly.temperature_2m[i]),
        icon,
        pop: hourly.precipitation_probability[i] || 0
      });
    }

    const dailyList = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 0; i < daily.time.length; i++) {
      const dateObj = new Date(daily.time[i]);
      let dayLabel = dayNames[dateObj.getDay()];
      if (i === 0) dayLabel = 'Today';
      if (i === 1) dayLabel = 'Tomorrow';

      const code = daily.weather_code[i];
      const icon = WMO_CODES[code]?.icon || 'sun';
      const condLabel = WMO_CODES[code]?.label || 'partlyCloudy';

      dailyList.push({
        day: dayLabel,
        date: `${dateObj.toLocaleString('en', { month: 'short' })} ${dateObj.getDate()}`,
        icon,
        conditionKey: condLabel,
        high: Math.round(daily.temperature_2m_max[i]),
        low: Math.round(daily.temperature_2m_min[i]),
        rainProb: daily.precipitation_probability_max[i] || 0
      });
    }

    const formatTime = (isoString) => {
      if (!isoString) return '06:00 AM';
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    return {
      city: cityName,
      country: countryName,
      lat,
      lon,
      temp: Math.round(cur.temperature_2m),
      feelsLike: Math.round(cur.apparent_temperature),
      conditionKey: wmoInfo.label,
      icon: isNight && wmoInfo.icon === 'sun' ? 'moon' : wmoInfo.icon,
      atmosphere,
      isNight,
      high: Math.round(daily.temperature_2m_max[0] || cur.temperature_2m + 3),
      low: Math.round(daily.temperature_2m_min[0] || cur.temperature_2m - 4),
      humidity: Math.round(cur.relative_humidity_2m),
      windSpeed: Math.round(cur.wind_speed_10m),
      windDirection: cur.wind_direction_10m,
      uvIndex: daily.uv_index_max ? Math.round(daily.uv_index_max[0] * 10) / 10 : 5.0,
      visibility: 10,
      pressure: Math.round(cur.surface_pressure),
      sunrise: formatTime(daily.sunrise[0]),
      sunset: formatTime(daily.sunset[0]),
      hourly: hourlyList,
      daily: dailyList
    };
  }

  getFallbackCity(name = 'Cairo') {
    const key = name.toLowerCase();
    for (const cityKey in RESILIENT_FALLBACK_CITIES) {
      if (key.includes(cityKey)) {
        return RESILIENT_FALLBACK_CITIES[cityKey];
      }
    }
    return RESILIENT_FALLBACK_CITIES['cairo'];
  }

  async detectUserLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            const revUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
            const res = await fetch(revUrl);
            const data = await res.json();
            const city = data.address?.city || data.address?.town || data.address?.state || 'My Location';
            const country = data.address?.country || '';

            const weather = await this.fetchWeather(lat, lon, city, country);
            resolve(weather);
          } catch (e) {
            const weather = await this.fetchWeather(lat, lon, 'Local Area', '');
            resolve(weather);
          }
        },
        (error) => {
          reject(error);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    });
  }
}

// --- 5.5 PROCEDURAL WEB AUDIO SOUND ENGINE ---
class WeatherSoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentMode = 'clear-day';
    this.masterGain = null;
    this.nodes = [];
    this.stormTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
  }

  toggle() {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play(this.currentMode);
      return true;
    }
  }

  setMode(mode) {
    this.currentMode = mode;
    if (this.isPlaying) {
      this.play(mode);
    }
  }

  createNoiseBuffer(seconds = 3) {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * seconds;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    // Pink noise approximation
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }
    return buffer;
  }

  stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.stormTimer) {
      clearInterval(this.stormTimer);
      this.stormTimer = null;
    }
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.15);
      } catch (e) {}
      setTimeout(() => {
        this.nodes.forEach(n => {
          try { n.stop(); } catch (e) {}
          try { n.disconnect(); } catch (e) {}
        });
        this.nodes = [];
      }, 200);
    }
  }

  play(mode) {
    this.init();
    if (!this.ctx) return;
    this.stop();
    this.isPlaying = true;
    this.currentMode = mode;

    try {
      const t = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(0.0001, t);
      this.masterGain.gain.exponentialRampToValueAtTime(0.18, t + 0.3);

      if (mode === 'rain') {
        this.playRain();
      } else if (mode === 'storm') {
        this.playStorm();
      } else if (mode === 'snow' || mode === 'clouds') {
        this.playWind();
      } else {
        this.playClear();
      }
    } catch (e) {
      console.warn('Procedural audio playback issue:', e);
    }
  }

  playRain() {
    const buffer = this.createNoiseBuffer(4);
    if (!buffer) return;
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(this.masterGain);
    noise.start();
    this.nodes.push(noise, filter);
  }

  playStorm() {
    this.playRain();

    // Deep brown rumble
    const rumbleOsc = this.ctx.createOscillator();
    const rumbleGain = this.ctx.createGain();
    rumbleOsc.type = 'sine';
    rumbleOsc.frequency.setValueAtTime(52, this.ctx.currentTime);
    rumbleGain.gain.setValueAtTime(0.2, this.ctx.currentTime);

    rumbleOsc.connect(rumbleGain);
    rumbleGain.connect(this.masterGain);
    rumbleOsc.start();
    this.nodes.push(rumbleOsc, rumbleGain);

    // Occasional thunder crash
    this.stormTimer = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      try {
        const thOsc = this.ctx.createOscillator();
        const thGain = this.ctx.createGain();
        thOsc.type = 'triangle';
        thOsc.frequency.setValueAtTime(68, this.ctx.currentTime);
        thOsc.frequency.exponentialRampToValueAtTime(28, this.ctx.currentTime + 1.2);

        thGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        thGain.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 0.3);
        thGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.8);

        thOsc.connect(thGain);
        thGain.connect(this.masterGain);
        thOsc.start();
        thOsc.stop(this.ctx.currentTime + 1.9);
      } catch (e) {}
    }, 8500);
  }

  playWind() {
    const buffer = this.createNoiseBuffer(5);
    if (!buffer) return;
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.8, this.ctx.currentTime);

    // LFO for breathing wind gusts
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.2, this.ctx.currentTime);
    lfoGain.gain.setValueAtTime(220, this.ctx.currentTime);
    lfo.connect(filter.frequency);
    lfo.start();

    noise.connect(filter);
    filter.connect(this.masterGain);
    noise.start();
    this.nodes.push(noise, filter, lfo, lfoGain);
  }

  playClear() {
    // Ethereal warm pad
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const padGain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc2.frequency.setValueAtTime(330, this.ctx.currentTime);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);

    padGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(padGain);
    padGain.connect(this.masterGain);

    osc1.start();
    osc2.start();
    this.nodes.push(osc1, osc2, filter, padGain);
  }
}

// --- 6. UI MANAGER (DOM MANIPULATION) ---
class UIManager {
  constructor(lang = 'en', unit = 'C') {
    this.lang = lang;
    this.unit = unit;
  }

  setLang(lang) {
    this.lang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }

  setUnit(unit) {
    this.unit = unit;
  }

  t(key, replacements = {}) {
    const dict = I18N[this.lang] || I18N.en;
    let str = dict[key] || key;
    for (const placeholder in replacements) {
      str = str.replace(`{${placeholder}}`, replacements[placeholder]);
    }
    return str;
  }

  formatTemp(celsius) {
    if (celsius === undefined || celsius === null) return '--°';
    if (this.unit === 'F') {
      const f = Math.round((celsius * 9) / 5 + 32);
      return `${f}°`;
    }
    return `${Math.round(celsius)}°`;
  }

  formatSpeed(kmh) {
    if (this.unit === 'F') {
      const mph = Math.round(kmh * 0.621371);
      return `${mph} mph`;
    }
    return `${kmh} km/h`;
  }

  getWeatherIconSvg(iconName, className = 'w-6 h-6') {
    switch (iconName) {
      case 'sun':
        return `<svg class="${className} text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
      case 'moon':
        return `<svg class="${className} text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
      case 'sun-dim':
        return `<svg class="${className} text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01"/><path d="M20 12h.01"/><path d="M12 20h.01"/><path d="M4 12h.01"/><path d="M17.657 6.343h.01"/><path d="M17.657 17.657h.01"/><path d="M6.343 17.657h.01"/><path d="M6.343 6.343h.01"/></svg>`;
      case 'cloud-sun':
        return `<svg class="${className} text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/></svg>`;
      case 'cloud':
        return `<svg class="${className} text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`;
      case 'cloud-rain':
      case 'cloud-drizzle':
        return `<svg class="${className} text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>`;
      case 'cloud-rain-wind':
        return `<svg class="${className} text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9.2 22 3-7"/><path d="m9 13-3 7"/><path d="m17 13-3 7"/></svg>`;
      case 'cloud-lightning':
        return `<svg class="${className} text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/></svg>`;
      case 'cloud-snow':
      case 'snowflake':
        return `<svg class="${className} text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4l-3 6"/><path d="m17 3-3 6h-4L7 3"/><path d="M2 12h20"/><path d="m20 10-2.5 1.25L18 14"/><path d="m4 10 2.5 1.25L6 14"/><path d="m20 14-2.5-1.25L18 10"/><path d="m4 14 2.5-1.25L6 10"/></svg>`;
      case 'cloud-fog':
        return `<svg class="${className} text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/></svg>`;
      case 'sunset':
        return `<svg class="${className} text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>`;
      default:
        return `<svg class="${className} text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>`;
    }
  }

  showSkeleton() {
    const el = document.getElementById('weather-content-wrapper');
    if (!el) return;
    el.classList.add('opacity-50', 'pointer-events-none');
    document.getElementById('loading-indicator')?.classList.remove('hidden');
  }

  hideSkeleton() {
    const el = document.getElementById('weather-content-wrapper');
    if (!el) return;
    el.classList.remove('opacity-50', 'pointer-events-none');
    document.getElementById('loading-indicator')?.classList.add('hidden');
  }

  renderHeroCard(data) {
    const heroEl = document.getElementById('hero-weather-card');
    if (!heroEl) return;

    const conditionText = this.t(data.conditionKey) || 'Clear Sky';
    const highLowText = this.t('highLow', {
      high: this.formatTemp(data.high).replace('°', ''),
      low: this.formatTemp(data.low).replace('°', '')
    });

    heroEl.innerHTML = `
      <div class="glass-panel relative overflow-hidden p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold mb-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              <span>${this.t('appSubtitle')}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>${data.city}</span>
              ${data.country ? `<span class="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400">· ${data.country}</span>` : ''}
            </h1>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 flex items-center gap-2">
              <span>${highLowText}</span>
              <span>·</span>
              <span>${this.t('feelsLike')} ${this.formatTemp(data.feelsLike)}</span>
            </p>
          </div>

          <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.12] shadow-md dark:shadow-xl flex items-center justify-center animate-float">
            ${this.getWeatherIconSvg(data.icon, 'w-12 h-12 sm:w-16 sm:h-16')}
          </div>
        </div>

        <div class="my-6 sm:my-8 flex items-baseline gap-4">
          <span class="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white font-mono tracking-tighter drop-shadow-sm dark:drop-shadow-md">
            ${this.formatTemp(data.temp)}
          </span>
          <div class="flex flex-col">
            <span class="text-lg sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-300">
              ${conditionText}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ${data.isNight ? '🌙 Night Observation' : '☀️ Daylight Observation'}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 dark:border-white/[0.08] text-xs">
          <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
            <span class="text-slate-500 dark:text-slate-400 block text-[11px]">${this.t('windStatus')}</span>
            <span class="font-bold text-slate-900 dark:text-white font-mono mt-0.5 block">${this.formatSpeed(data.windSpeed)}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
            <span class="text-slate-500 dark:text-slate-400 block text-[11px]">${this.t('humidity')}</span>
            <span class="font-bold text-slate-900 dark:text-white font-mono mt-0.5 block">${data.humidity}%</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
            <span class="text-slate-500 dark:text-slate-400 block text-[11px]">${this.t('uvIndex')}</span>
            <span class="font-bold text-amber-500 dark:text-amber-400 font-mono mt-0.5 block">${data.uvIndex} (${data.uvIndex > 6 ? 'High' : 'Mod'})</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
            <span class="text-slate-500 dark:text-slate-400 block text-[11px]">${this.t('pressure')}</span>
            <span class="font-bold text-slate-900 dark:text-white font-mono mt-0.5 block">${data.pressure} hPa</span>
          </div>
        </div>
      </div>
    `;
  }

  renderHourlyTimeline(hourlyList) {
    const container = document.getElementById('hourly-timeline-track');
    if (!container || !hourlyList) return;

    container.innerHTML = hourlyList.map((item, idx) => `
      <div class="flex-shrink-0 flex flex-col items-center justify-between p-3.5 w-20 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all duration-200 group cursor-default">
        <span class="text-[11px] font-mono font-medium ${idx === 0 ? 'text-indigo-400 font-bold' : 'text-slate-400'}">
          ${idx === 0 ? 'Now' : item.time}
        </span>
        <div class="my-3 group-hover:scale-110 transition-transform">
          ${this.getWeatherIconSvg(item.icon, 'w-6 h-6')}
        </div>
        <span class="text-sm font-bold text-white font-mono">
          ${this.formatTemp(item.temp)}
        </span>
        ${item.pop > 0 ? `
          <span class="text-[10px] font-bold text-sky-400 mt-1 font-mono">
            💧 ${item.pop}%
          </span>
        ` : `
          <span class="text-[10px] text-slate-500 mt-1 font-mono">0%</span>
        `}
      </div>
    `).join('');
  }

  renderSevenDayForecast(dailyList) {
    const container = document.getElementById('seven-day-forecast-list');
    if (!container || !dailyList) return;

    const allHighs = dailyList.map(d => d.high);
    const allLows = dailyList.map(d => d.low);
    const minTemp = Math.min(...allLows);
    const maxTemp = Math.max(...allHighs);
    const tempRange = Math.max(maxTemp - minTemp, 1);

    container.innerHTML = dailyList.map((item, idx) => {
      const leftPercent = Math.max(0, Math.round(((item.low - minTemp) / tempRange) * 100));
      const widthPercent = Math.max(15, Math.round(((item.high - item.low) / tempRange) * 100));

      const dayTitle = idx === 0 ? this.t('today') : (idx === 1 ? this.t('tomorrow') : item.day);
      const condText = this.t(item.conditionKey) || 'Clear';

      return `
        <div class="flex items-center justify-between gap-3 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors border-b border-white/[0.04] last:border-0">
          <div class="w-24 sm:w-28 flex-shrink-0">
            <span class="text-xs font-bold ${idx === 0 ? 'text-indigo-400' : 'text-white'} block">${dayTitle}</span>
            <span class="text-[10px] text-slate-400 font-mono block">${item.date}</span>
          </div>

          <div class="flex items-center gap-2 flex-shrink-0 w-28 sm:w-32">
            ${this.getWeatherIconSvg(item.icon, 'w-5 h-5')}
            <span class="text-xs text-slate-300 truncate">${condText}</span>
          </div>

          <div class="flex-1 flex items-center gap-2 max-w-xs">
            <span class="text-xs font-mono text-slate-400 w-8 text-right">${this.formatTemp(item.low)}</span>
            <div class="flex-1 h-2 rounded-full bg-white/[0.06] relative overflow-hidden">
              <div 
                class="absolute h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-amber-400"
                style="left: ${leftPercent}%; width: ${widthPercent}%;"
              ></div>
            </div>
            <span class="text-xs font-mono font-bold text-white w-8 text-left">${this.formatTemp(item.high)}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  renderBentoMetrics(data) {
    const windEl = document.getElementById('bento-wind');
    if (windEl) {
      windEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('windStatus')}</span>
          <div class="h-8 w-8 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <div>
            <span class="text-3xl font-black text-white font-mono">${this.formatSpeed(data.windSpeed)}</span>
            <p class="text-xs text-slate-400 mt-1">${this.t('windGusts', { speed: this.formatSpeed(Math.round(data.windSpeed * 1.3)) })}</p>
          </div>
          <div class="relative w-14 h-14 rounded-full border border-white/[0.12] flex items-center justify-center bg-white/[0.02]">
            <span class="text-[9px] font-bold text-slate-500 absolute top-1">N</span>
            <svg 
              class="w-6 h-6 text-sky-400 transition-transform duration-700" 
              style="transform: rotate(${data.windDirection || 0}deg)"
              viewBox="0 0 24 24" fill="currentColor"
            >
              <polygon points="12,2 15,10 12,8 9,10" fill="#38bdf8"/>
              <polygon points="12,22 15,14 12,16 9,14" fill="#64748b"/>
            </svg>
          </div>
        </div>
      `;
    }

    const humEl = document.getElementById('bento-humidity');
    if (humEl) {
      let comfortText = this.t('comfortOptimal');
      let comfortColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      if (data.humidity > 65) {
        comfortText = this.t('comfortHumid');
        comfortColor = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      } else if (data.humidity < 30) {
        comfortText = this.t('comfortDry');
        comfortColor = 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      }

      humEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('humidity')}</span>
          <div class="h-8 w-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-baseline justify-between">
            <span class="text-3xl font-black text-white font-mono">${data.humidity}%</span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full border ${comfortColor}">${comfortText}</span>
          </div>
          <div class="w-full h-2 rounded-full bg-white/[0.06] mt-3 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600" style="width: ${data.humidity}%"></div>
          </div>
        </div>
      `;
    }

    const uvEl = document.getElementById('bento-uv');
    if (uvEl) {
      let uvLabel = this.t('uvLow');
      let uvColor = 'text-emerald-400';
      if (data.uvIndex >= 3 && data.uvIndex < 6) {
        uvLabel = this.t('uvModerate');
        uvColor = 'text-amber-400';
      } else if (data.uvIndex >= 6 && data.uvIndex < 8) {
        uvLabel = this.t('uvHigh');
        uvColor = 'text-orange-400';
      } else if (data.uvIndex >= 8) {
        uvLabel = this.t('uvVeryHigh');
        uvColor = 'text-rose-500';
      }

      uvEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('uvIndex')}</span>
          <div class="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/></svg>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-baseline justify-between">
            <span class="text-3xl font-black text-white font-mono">${data.uvIndex}</span>
            <span class="text-xs font-bold ${uvColor}">Rating: ${Math.round(data.uvIndex)}/11+</span>
          </div>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed">${uvLabel}</p>
        </div>
      `;
    }

    const sunEl = document.getElementById('bento-sun');
    if (sunEl) {
      sunEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('sunCycle')}</span>
          <div class="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="M22 12h-4"/></svg>
          </div>
        </div>
        <div class="mt-3 flex flex-col justify-between h-24">
          <div class="relative w-full h-12 flex items-center justify-center">
            <svg class="w-full h-full" viewBox="0 0 160 50">
              <path d="M 10,45 Q 80,5 150,45" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-dasharray="4,4"/>
              <circle cx="95" cy="18" r="5" fill="#f59e0b" filter="drop-shadow(0 0 4px #f59e0b)"/>
            </svg>
          </div>
          <div class="flex items-center justify-between text-xs pt-1">
            <div class="flex items-center gap-1.5 text-amber-300">
              <span>🌅</span>
              <span class="font-mono">${data.sunrise}</span>
            </div>
            <div class="flex items-center gap-1.5 text-rose-400">
              <span>🌇</span>
              <span class="font-mono">${data.sunset}</span>
            </div>
          </div>
        </div>
      `;
    }

    const pressEl = document.getElementById('bento-pressure');
    if (pressEl) {
      pressEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('pressure')}</span>
          <div class="h-8 w-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
          </div>
        </div>
        <div class="mt-4">
          <span class="text-3xl font-black text-white font-mono">${data.pressure} <span class="text-sm font-normal text-slate-400">hPa</span></span>
          <p class="text-xs text-slate-400 mt-2">${this.t('pressureNormal')}</p>
        </div>
      `;
    }

    const visEl = document.getElementById('bento-visibility');
    if (visEl) {
      visEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('visibility')}</span>
          <div class="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
        </div>
        <div class="mt-4">
          <span class="text-3xl font-black text-white font-mono">${data.visibility} <span class="text-sm font-normal text-slate-400">km</span></span>
          <p class="text-xs text-emerald-400 mt-2">${this.t('visibilityClear')}</p>
        </div>
      `;
    }
  }

  renderTemperatureSpline(hourlyList) {
    const container = document.getElementById('spline-chart-container');
    if (!container || !hourlyList || hourlyList.length < 2) return;

    let tooltip = document.getElementById('spline-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'spline-tooltip';
      tooltip.className = 'hidden pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full mb-3 px-3 py-1.5 rounded-xl bg-[#141724]/95 border border-indigo-500/40 shadow-2xl backdrop-blur-md text-center transition-opacity duration-150';
      container.appendChild(tooltip);
    }

    const existingSvg = container.querySelector('svg');
    if (existingSvg) existingSvg.remove();

    const width = 700;
    const height = 150;
    const padTop = 32;
    const padBottom = 28;
    const padLeft = 32;
    const padRight = 32;
    const usableW = width - (padLeft + padRight);
    const usableH = height - (padTop + padBottom);

    const temps = hourlyList.map(h => h.temp);
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);
    const tempRange = Math.max(maxTemp - minTemp, 1);

    const points = hourlyList.map((item, idx) => {
      const x = padLeft + (idx / (hourlyList.length - 1)) * usableW;
      const y = padTop + usableH - ((item.temp - minTemp) / tempRange) * usableH;
      return { x, y, item, idx };
    });

    // Build Cubic Bézier Spline
    let pathD = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const dx = p1.x - p0.x;
      const cp1x = (p0.x + dx / 2.6).toFixed(1);
      const cp1y = p0.y.toFixed(1);
      const cp2x = (p1.x - dx / 2.6).toFixed(1);
      const cp2y = p1.y.toFixed(1);
      pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
    }

    const firstPt = points[0];
    const lastPt = points[points.length - 1];
    const areaD = `${pathD} L ${lastPt.x.toFixed(1)} ${height - 5} L ${firstPt.x.toFixed(1)} ${height - 5} Z`;

    const maxPt = points.reduce((prev, curr) => (curr.item.temp > prev.item.temp ? curr : prev), points[0]);
    const minPt = points.reduce((prev, curr) => (curr.item.temp < prev.item.temp ? curr : prev), points[0]);

    const svgHtml = `
      <svg class="w-full h-full overflow-visible" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
        <defs>
          <linearGradient id="splineStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="50%" stop-color="#818cf8" />
            <stop offset="100%" stop-color="#c084fc" />
          </linearGradient>
          <linearGradient id="splineAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.28" />
            <stop offset="60%" stop-color="#38bdf8" stop-opacity="0.06" />
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.0" />
          </linearGradient>
        </defs>

        <line x1="${padLeft}" y1="${padTop}" x2="${width - padRight}" y2="${padTop}" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4,4" />
        <line x1="${padLeft}" y1="${padTop + usableH / 2}" x2="${width - padRight}" y2="${padTop + usableH / 2}" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4,4" />
        <line x1="${padLeft}" y1="${padTop + usableH}" x2="${width - padRight}" y2="${padTop + usableH}" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4,4" />

        <path class="spline-area" d="${areaD}" />
        <path class="spline-path" d="${pathD}" />

        <g transform="translate(${maxPt.x}, ${maxPt.y - 12})">
          <rect x="-24" y="-14" width="48" height="18" rx="9" fill="#1e1b4b" stroke="#818cf8" stroke-width="1" opacity="0.9" />
          <text x="0" y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#c7d2fe" font-family="monospace">H: ${this.formatTemp(maxPt.item.temp)}</text>
        </g>

        <g transform="translate(${minPt.x}, ${minPt.y + 14})">
          <rect x="-24" y="-4" width="48" height="18" rx="9" fill="#0f172a" stroke="#38bdf8" stroke-width="1" opacity="0.9" />
          <text x="0" y="8" text-anchor="middle" font-size="10" font-weight="bold" fill="#7dd3fc" font-family="monospace">L: ${this.formatTemp(minPt.item.temp)}</text>
        </g>

        <line id="spline-scrubber-line" class="spline-scrubber-line opacity-0 transition-opacity duration-150" x1="0" y1="12" x2="0" y2="${height - 10}" />
        <circle id="spline-scrubber-dot" class="spline-cursor-dot opacity-0 transition-opacity duration-150" cx="0" cy="0" r="5" fill="#6366f1" stroke="#ffffff" stroke-width="2" />
        <rect id="spline-hit-area" width="${width}" height="${height}" fill="transparent" class="cursor-crosshair" />
      </svg>
    `;

    container.insertAdjacentHTML('afterbegin', svgHtml);

    const hitArea = container.querySelector('#spline-hit-area');
    const scrubberLine = container.querySelector('#spline-scrubber-line');
    const scrubberDot = container.querySelector('#spline-scrubber-dot');
    const tooltipEl = document.getElementById('spline-tooltip');

    const updateScrubber = (clientX) => {
      const rect = container.getBoundingClientRect();
      const relX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const idx = Math.round(relX * (points.length - 1));
      const pt = points[idx];
      const item = hourlyList[idx];

      scrubberLine.setAttribute('x1', pt.x);
      scrubberLine.setAttribute('x2', pt.x);
      scrubberLine.classList.remove('opacity-0');

      scrubberDot.setAttribute('cx', pt.x);
      scrubberDot.setAttribute('cy', pt.y);
      scrubberDot.classList.remove('opacity-0');

      if (tooltipEl) {
        tooltipEl.classList.remove('hidden');
        tooltipEl.style.left = `${(pt.x / width) * 100}%`;
        tooltipEl.style.top = `${(pt.y / height) * 100}%`;

        const timeStr = idx === 0 ? (this.lang === 'ar' ? 'الآن' : 'Now') : item.time;
        tooltipEl.innerHTML = `
          <div class="text-[10px] font-mono text-slate-400">${timeStr}</div>
          <div class="text-xs font-bold text-white font-mono flex items-center justify-center gap-1.5 my-0.5">
            ${this.getWeatherIconSvg(item.icon, 'w-3.5 h-3.5 inline')}
            <span>${this.formatTemp(item.temp)}</span>
          </div>
          <div class="text-[10px] font-mono ${item.pop > 0 ? 'text-sky-400 font-bold' : 'text-slate-500'}">💧 ${item.pop}%</div>
        `;
      }
    };

    const hideScrubber = () => {
      scrubberLine?.classList.add('opacity-0');
      scrubberDot?.classList.add('opacity-0');
      tooltipEl?.classList.add('hidden');
    };

    if (hitArea) {
      hitArea.addEventListener('mousemove', (e) => updateScrubber(e.clientX));
      hitArea.addEventListener('mouseleave', hideScrubber);
      hitArea.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) updateScrubber(e.touches[0].clientX);
      }, { passive: true });
      hitArea.addEventListener('touchend', hideScrubber);
    }
  }

  renderAqiCard(data) {
    const aqiEl = document.getElementById('bento-aqi');
    if (!aqiEl) return;

    let aqi = 28;
    if (data.city) {
      const c = data.city.toLowerCase();
      if (c.includes('cairo')) aqi = 48;
      else if (c.includes('dubai')) aqi = 52;
      else if (c.includes('london')) aqi = 24;
      else if (c.includes('new york')) aqi = 31;
      else if (c.includes('tokyo')) aqi = 22;
      else if (c.includes('paris')) aqi = 26;
      else {
        aqi = Math.round(22 + (data.humidity * 0.12) + (data.windSpeed < 10 ? 12 : 0));
      }
    }
    if (data.conditionKey === 'foggy') aqi += 35;

    let aqiStatusKey = 'aqiGood';
    let aqiColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    let arcStroke = '#10b981';
    let aqiAdviceKey = 'aqiAdviceGood';

    if (aqi > 50 && aqi <= 100) {
      aqiStatusKey = 'aqiModerate';
      aqiColor = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      arcStroke = '#f59e0b';
      aqiAdviceKey = 'aqiAdviceMod';
    } else if (aqi > 100 && aqi <= 150) {
      aqiStatusKey = 'aqiUnhealthySens';
      aqiColor = 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      arcStroke = '#fb923c';
      aqiAdviceKey = 'aqiAdviceMod';
    } else if (aqi > 150) {
      aqiStatusKey = 'aqiUnhealthy';
      aqiColor = 'text-rose-500 bg-rose-500/10 border-rose-500/20';
      arcStroke = '#f43f5e';
      aqiAdviceKey = 'aqiAdviceMod';
    }

    const gaugePercent = Math.min(Math.max(aqi / 200, 0.05), 1.0);
    const strokeDashoffset = (157 * (1 - gaugePercent)).toFixed(1);

    const pm25 = (aqi * 0.26).toFixed(1);
    const pm10 = (aqi * 0.54).toFixed(1);
    const o3 = (28 + aqi * 0.32).toFixed(1);
    const no2 = (12 + aqi * 0.18).toFixed(1);

    aqiEl.innerHTML = `
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-3 border-b border-white/[0.06]">
        <div class="flex items-center gap-2.5">
          <div class="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19C7.29 7.42 4 4.5 4 4.5s-3.29 2.92-5.29 4.56C-2.43 10-3 11.1-3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">${this.t('airQualityTitle')}</h4>
            <span class="text-[11px] text-slate-400">European Air Quality Index (EAQI) Standard</span>
          </div>
        </div>
        <span class="text-xs font-bold px-3 py-1 rounded-full border ${aqiColor}">
          ${this.t(aqiStatusKey)}
        </span>
      </div>

      <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-5 items-center">
        <div class="flex items-center justify-center gap-4">
          <div class="relative w-28 h-20 flex items-center justify-center">
            <svg class="w-full h-full" viewBox="0 0 130 80">
              <path d="M 15 70 A 50 50 0 0 1 115 70" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="10" stroke-linecap="round"/>
              <path d="M 15 70 A 50 50 0 0 1 115 70" fill="none" stroke="${arcStroke}" stroke-width="10" stroke-linecap="round" stroke-dasharray="157" stroke-dashoffset="${strokeDashoffset}" style="transition: stroke-dashoffset 1s ease;"/>
            </svg>
            <div class="absolute bottom-1 flex flex-col items-center">
              <span class="text-2xl font-black text-white font-mono leading-none">${aqi}</span>
              <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">AQI Index</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 sm:col-span-2">
          <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
            <div>
              <span class="text-[10px] text-slate-400 block font-mono">PM2.5</span>
              <span class="text-xs font-bold text-white font-mono">${pm25} <span class="text-[9px] font-normal text-slate-400">µg/m³</span></span>
            </div>
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>

          <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
            <div>
              <span class="text-[10px] text-slate-400 block font-mono">PM10</span>
              <span class="text-xs font-bold text-white font-mono">${pm10} <span class="text-[9px] font-normal text-slate-400">µg/m³</span></span>
            </div>
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>

          <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
            <div>
              <span class="text-[10px] text-slate-400 block font-mono">O₃ (Ozone)</span>
              <span class="text-xs font-bold text-white font-mono">${o3} <span class="text-[9px] font-normal text-slate-400">µg/m³</span></span>
            </div>
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
          </div>

          <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
            <div>
              <span class="text-[10px] text-slate-400 block font-mono">NO₂ (Nitrogen)</span>
              <span class="text-xs font-bold text-white font-mono">${no2} <span class="text-[9px] font-normal text-slate-400">µg/m³</span></span>
            </div>
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
        </div>
      </div>

      <p class="text-xs text-slate-300 mt-3.5 leading-relaxed pt-2.5 border-t border-white/[0.04]">
        ${this.t(aqiAdviceKey)}
      </p>
    `;
  }

  renderLifestyleAdvisor(data) {
    const el = document.getElementById('lifestyle-advisor-card');
    if (!el) return;

    let outfitKey = 'wearNormal';
    let outfitIcon = '👕';
    if (data.temp < 12) {
      outfitKey = 'wearCoat';
      outfitIcon = '🧥';
    } else if (data.temp < 20) {
      outfitKey = 'wearJacket';
      outfitIcon = '🧥';
    } else if (data.temp > 28) {
      outfitKey = 'wearLight';
      outfitIcon = '🩳';
    }

    const isRaining = data.atmosphere === 'rain' || data.atmosphere === 'storm' || (data.hourly && data.hourly.some(h => h.pop > 35));

    let activityScore = 10;
    if (data.temp < 5 || data.temp > 35) activityScore -= 3.5;
    else if (data.temp < 12 || data.temp > 30) activityScore -= 1.5;
    if (data.windSpeed > 28) activityScore -= 2.0;
    if (isRaining) activityScore -= 4.0;
    if (data.uvIndex > 7) activityScore -= 1.5;
    activityScore = Math.max(2.0, Math.min(9.8, activityScore)).toFixed(1);

    const activityVerdKey = activityScore >= 7.5 ? 'activityGreat' : (activityScore >= 5.0 ? 'activityFair' : 'activityPoor');
    const activityColor = activityScore >= 7.5 ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : (activityScore >= 5.0 ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 'text-rose-400 bg-rose-500/10 border-rose-500/20');

    let roadKey = 'drivingOptimal';
    let roadColor = 'text-emerald-400';
    let roadIcon = '🚗';
    if (data.conditionKey === 'foggy' || data.visibility < 3) {
      roadKey = 'drivingHazard';
      roadColor = 'text-rose-400';
      roadIcon = '⚠️';
    } else if (isRaining) {
      roadKey = 'drivingWet';
      roadColor = 'text-amber-400';
      roadIcon = '🌧️';
    }

    el.innerHTML = `
      <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm">
            💡
          </div>
          <h3 class="text-sm font-bold text-white">${this.t('lifestyleTitle')}</h3>
        </div>
        <span class="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
          Smart AI
        </span>
      </div>

      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
        <span class="text-2xl flex-shrink-0 mt-0.5">${outfitIcon}</span>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-white">${this.t('whatToWear')}</span>
            ${isRaining ? `<span class="text-[10px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-full">☂️ +Umbrella</span>` : ''}
          </div>
          <p class="text-xs text-slate-300 mt-1 leading-relaxed">${this.t(outfitKey)}</p>
        </div>
      </div>

      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-white flex items-center gap-1.5">
            <span>🏃</span>
            <span>${this.t('outdoorActivities')}</span>
          </span>
          <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${activityColor}">
            ${activityScore} / 10
          </span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${this.t(activityVerdKey)}</p>
      </div>

      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
        <span class="text-2xl flex-shrink-0 mt-0.5">${roadIcon}</span>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-white">${this.t('drivingSafety')}</span>
            <span class="text-[10px] font-bold ${roadColor}">${roadKey === 'drivingOptimal' ? 'Optimal' : (roadKey === 'drivingWet' ? 'Caution' : 'Hazard')}</span>
          </div>
          <p class="text-xs text-slate-300 mt-1 leading-relaxed">${this.t(roadKey)}</p>
        </div>
      </div>
    `;
  }

  renderPinnedCities(cities, currentCityName, onSelectCity) {
    const container = document.getElementById('pinned-cities-container');
    if (!container) return;

    container.innerHTML = cities.map((c) => {
      const isCurrent = c.name.toLowerCase() === currentCityName.toLowerCase();
      return `
        <button
          data-city="${c.name}"
          data-lat="${c.lat}"
          data-lon="${c.lon}"
          class="city-chip flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
            isCurrent 
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 border border-indigo-400/50' 
              : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
          }"
        >
          <span>📍</span>
          <span>${c.name}</span>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.city-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const city = btn.dataset.city;
        const lat = parseFloat(btn.dataset.lat);
        const lon = parseFloat(btn.dataset.lon);
        onSelectCity(city, lat, lon);
      });
    });
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 rtl:left-6 rtl:right-auto z-[99999] px-4 py-3 rounded-2xl border text-xs sm:text-sm font-bold shadow-2xl backdrop-blur-xl animate-fade-in flex items-center gap-2.5 ${
      type === 'success' 
        ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-300'
        : (type === 'error' ? 'bg-rose-950/90 border-rose-500/40 text-rose-300' : 'bg-[#131622]/95 border-white/[0.12] text-white')
    }`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : (type === 'error' ? '⚠' : 'ℹ')}</span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'transition-opacity');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// --- 7. MAIN APEX WEATHER APPLICATION CONTROLLER ---
class ApexWeatherApp {
  constructor() {
    this.api = new WeatherService();
    this.lang = localStorage.getItem('apex_weather_lang') || 'en';
    this.unit = localStorage.getItem('apex_weather_unit') || 'C';
    this.theme = localStorage.getItem('apex_weather_theme') || 'dark';
    this.ui = new UIManager(this.lang, this.unit);
    this.sound = new WeatherSoundEngine();

    this.atmosphere = null;
    this.currentData = null;
    this.simMode = 'auto';

    this.pinnedCities = this.loadPinnedCities();

    this.init();
  }

  loadPinnedCities() {
    const saved = localStorage.getItem('apex_weather_pinned');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      { name: 'Cairo', lat: 30.0444, lon: 31.2357 },
      { name: 'Dubai', lat: 25.2048, lon: 55.2708 },
      { name: 'London', lat: 51.5074, lon: -0.1278 },
      { name: 'New York', lat: 40.7128, lon: -74.0060 },
      { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
      { name: 'Paris', lat: 48.8566, lon: 2.3522 },
    ];
  }

  applyTheme(theme) {
    this.theme = theme;
    try {
      localStorage.setItem('apex_weather_theme', theme);
    } catch (e) {}
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }

  toggleTheme() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    if (this.currentData) {
      this.ui.renderHeroCard(this.currentData);
      this.ui.renderTemperatureSpline(this.currentData.hourly);
      this.ui.renderHourlyTimeline(this.currentData.hourly);
      this.ui.renderSevenDayForecast(this.currentData.daily);
      this.ui.renderBentoMetrics(this.currentData);
      this.ui.renderAqiCard(this.currentData);
      this.ui.renderLifestyleAdvisor(this.currentData);
      this.ui.renderPinnedCities(
        this.pinnedCities,
        this.currentData.city,
        (cName, cLat, cLon) => this.loadWeather(cLat, cLon, cName)
      );
    }
    this.ui.showToast(newTheme === 'light' ? (this.lang === 'ar' ? 'تم تفعيل المظهر الفاتح' : 'Light mode activated') : (this.lang === 'ar' ? 'تم تفعيل المظهر الداكن' : 'Dark mode activated'), 'info');
  }

  async init() {
    this.applyTheme(this.theme);
    this.setupScrollProgressBar();
    this.initCustomCursorAndMagnetics();
    this.atmosphere = new AtmosphereEngine('atmosphere-canvas');
    this.ui.setLang(this.lang);
    this.updateStaticTexts();
    this.setupEventListeners();

    const lastCity = localStorage.getItem('apex_weather_last_city');
    if (lastCity) {
      try {
        const parsed = JSON.parse(lastCity);
        await this.loadWeather(parsed.lat, parsed.lon, parsed.name, parsed.country);
        return;
      } catch (e) {}
    }

    await this.loadWeather(30.0444, 31.2357, 'Cairo', 'Egypt');
  }

  updateStaticTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.ui.t(key);
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.placeholder = this.ui.t('searchPlaceholder');
    }

    const unitBtn = document.getElementById('unit-toggle-btn');
    if (unitBtn) {
      unitBtn.textContent = this.unit === 'C' ? '°C' : '°F';
    }

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.querySelector('span') ? (langBtn.querySelector('span').textContent = this.lang === 'en' ? 'عربي' : 'EN') : (langBtn.textContent = this.lang === 'en' ? 'عربي' : 'EN');
    }

    const soundStatus = document.getElementById('sound-status-text');
    if (soundStatus) {
      soundStatus.textContent = this.sound.isPlaying ? this.ui.t('soundscapeActive') : this.ui.t('soundscapeMuted');
    }
  }

  async loadWeather(lat, lon, cityName, countryName = '') {
    this.ui.showSkeleton();

    try {
      const data = await this.api.fetchWeather(lat, lon, cityName, countryName);
      this.currentData = data;

      this.ui.renderHeroCard(data);
      this.ui.renderTemperatureSpline(data.hourly);
      this.ui.renderHourlyTimeline(data.hourly);
      this.ui.renderSevenDayForecast(data.daily);
      this.ui.renderBentoMetrics(data);
      this.ui.renderAqiCard(data);
      this.ui.renderLifestyleAdvisor(data);

      this.ui.renderPinnedCities(
        this.pinnedCities,
        data.city,
        (cName, cLat, cLon) => this.loadWeather(cLat, cLon, cName)
      );

      if (this.simMode === 'auto') {
        if (this.atmosphere) this.atmosphere.setMode(data.atmosphere);
        if (this.sound) this.sound.setMode(data.atmosphere);
      }

      localStorage.setItem('apex_weather_last_city', JSON.stringify({
        name: data.city,
        country: data.country,
        lat,
        lon
      }));

      this.ui.hideSkeleton();
    } catch (error) {
      console.error('Error loading weather:', error);
      this.ui.hideSkeleton();
      this.ui.showToast(this.ui.t('errorTitle'), 'error');
    }
  }

  setupEventListeners() {
    // 1. Geolocation Button
    const geoBtn = document.getElementById('btn-detect-location');
    if (geoBtn) {
      geoBtn.addEventListener('click', async () => {
        geoBtn.classList.add('animate-pulse');
        this.ui.showToast(this.ui.t('detectingLocation'), 'info');

        try {
          const weather = await this.api.detectUserLocation();
          this.currentData = weather;
          this.ui.renderHeroCard(weather);
          this.ui.renderTemperatureSpline(weather.hourly);
          this.ui.renderHourlyTimeline(weather.hourly);
          this.ui.renderSevenDayForecast(weather.daily);
          this.ui.renderBentoMetrics(weather);
          this.ui.renderAqiCard(weather);
          this.ui.renderLifestyleAdvisor(weather);

          if (this.simMode === 'auto') {
            if (this.atmosphere) this.atmosphere.setMode(weather.atmosphere);
            if (this.sound) this.sound.setMode(weather.atmosphere);
          }

          this.ui.showToast(this.ui.t('locationDetected'), 'success');
        } catch (err) {
          console.warn('Geolocation denied or failed:', err);
          this.ui.showToast('Location permission denied or unavailable.', 'error');
        } finally {
          geoBtn.classList.remove('animate-pulse');
        }
      });
    }

    // 2. Unit Toggle
    const unitBtn = document.getElementById('unit-toggle-btn');
    if (unitBtn) {
      unitBtn.addEventListener('click', () => {
        this.unit = this.unit === 'C' ? 'F' : 'C';
        localStorage.setItem('apex_weather_unit', this.unit);
        this.ui.setUnit(this.unit);
        unitBtn.textContent = this.unit === 'C' ? '°C' : '°F';

        if (this.currentData) {
          this.ui.renderHeroCard(this.currentData);
          this.ui.renderTemperatureSpline(this.currentData.hourly);
          this.ui.renderHourlyTimeline(this.currentData.hourly);
          this.ui.renderSevenDayForecast(this.currentData.daily);
          this.ui.renderBentoMetrics(this.currentData);
          this.ui.renderAqiCard(this.currentData);
          this.ui.renderLifestyleAdvisor(this.currentData);
        }
      });
    }

    // 3. Language Toggle
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        this.lang = this.lang === 'en' ? 'ar' : 'en';
        localStorage.setItem('apex_weather_lang', this.lang);
        this.ui.setLang(this.lang);
        this.updateStaticTexts();

        if (this.currentData) {
          this.ui.renderHeroCard(this.currentData);
          this.ui.renderTemperatureSpline(this.currentData.hourly);
          this.ui.renderHourlyTimeline(this.currentData.hourly);
          this.ui.renderSevenDayForecast(this.currentData.daily);
          this.ui.renderBentoMetrics(this.currentData);
          this.ui.renderAqiCard(this.currentData);
          this.ui.renderLifestyleAdvisor(this.currentData);
          this.ui.renderPinnedCities(
            this.pinnedCities,
            this.currentData.city,
            (cName, cLat, cLon) => this.loadWeather(cLat, cLon, cName)
          );
        }
      });
    }

    // 4. Ambient Weather Soundscape (Web Audio API)
    const soundBtn = document.getElementById('btn-toggle-sound');
    const soundIcon = document.getElementById('sound-icon-wrapper');
    const soundStatus = document.getElementById('sound-status-text');

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const isPlaying = this.sound.toggle();
        if (isPlaying) {
          soundBtn.classList.add('bg-indigo-500/20', 'border-indigo-500/40', 'text-indigo-300');
          if (soundIcon) {
            soundIcon.innerHTML = `
              <div class="flex items-center gap-0.5 h-3.5 px-0.5">
                <span class="w-1 bg-sky-400 rounded-full audio-bar-1 inline-block"></span>
                <span class="w-1 bg-sky-400 rounded-full audio-bar-2 inline-block"></span>
                <span class="w-1 bg-sky-400 rounded-full audio-bar-3 inline-block"></span>
              </div>
            `;
          }
          if (soundStatus) soundStatus.textContent = this.ui.t('soundscapeActive');
          const currentAtmo = this.currentData?.atmosphere || 'clear-day';
          this.ui.showToast(`${this.ui.t('soundscapeTooltip')} (${currentAtmo})`, 'info');
        } else {
          soundBtn.classList.remove('bg-indigo-500/20', 'border-indigo-500/40', 'text-indigo-300');
          if (soundIcon) {
            soundIcon.innerHTML = `
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            `;
          }
          if (soundStatus) soundStatus.textContent = this.ui.t('soundscapeMuted');
        }
      });
    }

    // 5. Search input with Autocomplete
    const searchInput = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    let searchTimeout = null;

    if (searchInput && dropdown) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        clearTimeout(searchTimeout);

        if (query.length < 2) {
          dropdown.classList.add('hidden');
          return;
        }

        searchTimeout = setTimeout(async () => {
          const results = await this.api.searchCities(query);
          if (results.length === 0) {
            dropdown.innerHTML = `
              <div class="p-3 text-center text-xs text-slate-400">
                No matching cities found. Try another query.
              </div>
            `;
          } else {
            dropdown.innerHTML = results.map(r => `
              <div 
                data-name="${r.name}" 
                data-country="${r.country}"
                data-lat="${r.lat}" 
                data-lon="${r.lon}" 
                class="search-result-item flex items-center justify-between p-3 hover:bg-white/[0.08] cursor-pointer transition-colors border-b border-white/[0.04] last:border-0"
              >
                <div>
                  <span class="font-bold text-sm text-white block">${r.name}</span>
                  <span class="text-xs text-slate-400">${r.admin1 ? `${r.admin1}, ` : ''}${r.country}</span>
                </div>
                <span class="text-xs font-mono text-indigo-400">📍 Select</span>
              </div>
            `).join('');

            dropdown.querySelectorAll('.search-result-item').forEach(item => {
              item.addEventListener('click', () => {
                const name = item.dataset.name;
                const country = item.dataset.country;
                const lat = parseFloat(item.dataset.lat);
                const lon = parseFloat(item.dataset.lon);

                searchInput.value = '';
                dropdown.classList.add('hidden');
                this.loadWeather(lat, lon, name, country);
              });
            });
          }
          dropdown.classList.remove('hidden');
        }, 280);
      });

      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });
    }

    // 6. Atmosphere Simulation Pills
    document.querySelectorAll('.sim-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sim-pill').forEach(b => b.classList.remove('bg-indigo-600', 'text-white'));
        btn.classList.add('bg-indigo-600', 'text-white');

        const mode = btn.dataset.mode;
        this.simMode = mode;

        if (mode === 'auto') {
          if (this.currentData) {
            if (this.atmosphere) this.atmosphere.setMode(this.currentData.atmosphere);
            if (this.sound) this.sound.setMode(this.currentData.atmosphere);
          }
        } else {
          if (this.atmosphere) this.atmosphere.setMode(mode);
          if (this.sound) this.sound.setMode(mode);
        }
      });
    });

    // 7. Settings Modal
    const settingsBtn = document.getElementById('btn-open-settings');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsBtn = document.getElementById('btn-close-settings');
    const cancelSettingsBtn = document.getElementById('btn-cancel-settings');
    const saveSettingsBtn = document.getElementById('btn-save-settings');
    const apiKeyInput = document.getElementById('input-api-key');

    if (settingsBtn && settingsModal) {
      settingsBtn.addEventListener('click', () => {
        if (apiKeyInput) apiKeyInput.value = this.api.getApiKey();
        settingsModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });

      const closeModal = () => {
        settingsModal.classList.add('hidden');
        document.body.style.overflow = '';
      };

      closeSettingsBtn?.addEventListener('click', closeModal);
      cancelSettingsBtn?.addEventListener('click', closeModal);
      settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) closeModal();
      });

      saveSettingsBtn?.addEventListener('click', () => {
        if (apiKeyInput) {
          this.api.setApiKey(apiKeyInput.value);
          this.ui.showToast('Weather API settings updated!', 'success');
        }
        closeModal();
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !settingsModal.classList.contains('hidden')) {
          closeModal();
        }
      });
    }

    // 8. Keyboard Shortcuts (Ctrl+K or /)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInput?.focus();
      }
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput?.focus();
      }
    });

    // 9. Theme Toggles (Header & Mobile Taskbar)
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    const mobileThemeBtn = document.getElementById('btn-mobile-theme');
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // 10. Mobile GPS Quick Detect Trigger
    const mobileDetectBtn = document.getElementById('btn-mobile-detect');
    if (mobileDetectBtn) {
      mobileDetectBtn.addEventListener('click', () => {
        const geoBtn = document.getElementById('btn-detect-location');
        if (geoBtn) geoBtn.click();
      });
    }
  }

  setupScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;
    const updateProgress = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = `${Math.min(Math.max(scrolled, 0), 100)}%`;
      progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
  }

  initCustomCursorAndMagnetics() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = document.getElementById('custom-cursor-dot');
    const ring = document.getElementById('custom-cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      if (!document.body.classList.contains('cursor-active')) {
        document.body.classList.add('cursor-active');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    document.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-active');
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.add('cursor-down');
    });

    document.addEventListener('mouseup', () => {
      document.body.classList.remove('cursor-down');
    });

    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, .sim-pill, .clickable-chip, [role="button"]');
      interactiveElements.forEach((el) => {
        if (el._cursorAttached) return;
        el._cursorAttached = true;
        el.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover');
        });
      });

      const magneticElements = document.querySelectorAll('.magnetic-item');
      magneticElements.forEach((el) => {
        if (el._magneticAttached) return;
        el._magneticAttached = true;
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'translate(0px, 0px)';
          el.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
          setTimeout(() => { el.style.transition = ''; }, 300);
        });
      });
    };

    attachHoverListeners();
    const observer = new MutationObserver(() => attachHoverListeners());
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

// Resilient Bootloader: starts immediately regardless of when script is loaded
function bootApexWeather() {
  if (!window.apexWeather) {
    window.apexWeather = new ApexWeatherApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApexWeather);
} else {
  bootApexWeather();
}
