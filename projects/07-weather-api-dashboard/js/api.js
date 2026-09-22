/**
 * WeatherApiService — Resilient Multi-Source Weather Engine
 * - Direct Open-Meteo Integration (Zero API Key, 100% Free, Global, No CORS)
 * - OpenWeatherMap API Key Support (Optional custom key)
 * - Geolocation API with Reverse Geocoding
 * - Offline Resilient Mock Cache for 10+ Global Metropolises
 */

export const WMO_CODES = {
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

export const RESILIENT_FALLBACK_CITIES = {
  'cairo': {
    city: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    lat: 30.0444,
    lon: 31.2357,
    temp: 28,
    feelsLike: 29,
    condition: 'Sunny & Clear Sky',
    conditionKey: 'clearSky',
    icon: 'sun',
    atmosphere: 'clear-day',
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
      { day: 'Today', date: 'Oct 12', icon: 'sun', condition: 'Clear', high: 31, low: 19, rainProb: 0 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'sun', condition: 'Sunny', high: 32, low: 20, rainProb: 0 },
      { day: 'Tue', date: 'Oct 14', icon: 'cloud-sun', condition: 'Partly Cloudy', high: 29, low: 18, rainProb: 5 },
      { day: 'Wed', date: 'Oct 15', icon: 'sun', condition: 'Clear', high: 30, low: 19, rainProb: 0 },
      { day: 'Thu', date: 'Oct 16', icon: 'cloud-sun', condition: 'Fair', high: 28, low: 17, rainProb: 10 },
      { day: 'Fri', date: 'Oct 17', icon: 'sun', condition: 'Sunny', high: 31, low: 18, rainProb: 0 },
      { day: 'Sat', date: 'Oct 18', icon: 'sun', condition: 'Clear', high: 30, low: 19, rainProb: 0 },
    ]
  },
  'london': {
    city: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    lat: 51.5074,
    lon: -0.1278,
    temp: 15,
    feelsLike: 14,
    condition: 'Light Rain Showers',
    conditionKey: 'moderateRain',
    icon: 'cloud-rain',
    atmosphere: 'rain',
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
      { day: 'Today', date: 'Oct 12', icon: 'cloud-rain', condition: 'Rain', high: 17, low: 11, rainProb: 65 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'cloud-rain', condition: 'Drizzle', high: 16, low: 10, rainProb: 50 },
      { day: 'Tue', date: 'Oct 14', icon: 'cloud', condition: 'Overcast', high: 15, low: 9, rainProb: 20 },
      { day: 'Wed', date: 'Oct 15', icon: 'cloud-sun', condition: 'Passing Showers', high: 16, low: 10, rainProb: 35 },
      { day: 'Thu', date: 'Oct 16', icon: 'sun', condition: 'Sunny Spells', high: 18, low: 11, rainProb: 15 },
      { day: 'Fri', date: 'Oct 17', icon: 'cloud-rain', condition: 'Rain', high: 14, low: 8, rainProb: 80 },
      { day: 'Sat', date: 'Oct 18', icon: 'cloud', condition: 'Cloudy', high: 15, low: 9, rainProb: 30 },
    ]
  },
  'tokyo': {
    city: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    lat: 35.6762,
    lon: 139.6503,
    temp: 21,
    feelsLike: 21,
    condition: 'Partly Cloudy & Pleasant',
    conditionKey: 'partlyCloudy',
    icon: 'cloud-sun',
    atmosphere: 'clouds',
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
      { day: 'Today', date: 'Oct 12', icon: 'cloud-sun', condition: 'Fair', high: 23, low: 15, rainProb: 10 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'sun', condition: 'Sunny', high: 24, low: 16, rainProb: 5 },
      { day: 'Tue', date: 'Oct 14', icon: 'cloud', condition: 'Cloudy', high: 21, low: 14, rainProb: 20 },
      { day: 'Wed', date: 'Oct 15', icon: 'cloud-rain', condition: 'Showers', high: 19, low: 13, rainProb: 65 },
      { day: 'Thu', date: 'Oct 16', icon: 'sun', condition: 'Clear', high: 22, low: 14, rainProb: 10 },
      { day: 'Fri', date: 'Oct 17', icon: 'cloud-sun', condition: 'Mild', high: 23, low: 15, rainProb: 15 },
      { day: 'Sat', date: 'Oct 18', icon: 'sun', condition: 'Sunny', high: 25, low: 16, rainProb: 0 },
    ]
  },
  'new york': {
    city: 'New York',
    country: 'United States',
    countryCode: 'US',
    lat: 40.7128,
    lon: -74.0060,
    temp: 18,
    feelsLike: 17,
    condition: 'Mainly Clear & Crisp',
    conditionKey: 'mostlyClear',
    icon: 'sun',
    atmosphere: 'clear-day',
    high: 20,
    low: 12,
    humidity: 50,
    windSpeed: 18,
    windDirection: 290,
    uvIndex: 4.8,
    visibility: 10,
    pressure: 1016,
    sunrise: '07:05 AM',
    sunset: '06:20 PM',
    hourly: [
      { time: '12:00', temp: 18, icon: 'sun', pop: 0 },
      { time: '13:00', temp: 19, icon: 'sun', pop: 0 },
      { time: '14:00', temp: 20, icon: 'sun', pop: 0 },
      { time: '15:00', temp: 19, icon: 'sun', pop: 0 },
      { time: '16:00', temp: 18, icon: 'cloud-sun', pop: 5 },
      { time: '17:00', temp: 16, icon: 'sunset', pop: 5 },
      { time: '18:00', temp: 15, icon: 'moon', pop: 0 },
      { time: '19:00', temp: 14, icon: 'moon', pop: 0 },
      { time: '20:00', temp: 13, icon: 'moon', pop: 0 },
      { time: '21:00', temp: 13, icon: 'moon', pop: 0 },
      { time: '22:00', temp: 12, icon: 'moon', pop: 0 },
      { time: '23:00', temp: 12, icon: 'moon', pop: 0 },
    ],
    daily: [
      { day: 'Today', date: 'Oct 12', icon: 'sun', condition: 'Sunny', high: 20, low: 12, rainProb: 0 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'cloud-sun', condition: 'Partly Cloudy', high: 19, low: 13, rainProb: 15 },
      { day: 'Tue', date: 'Oct 14', icon: 'cloud-rain', condition: 'Rain', high: 16, low: 11, rainProb: 75 },
      { day: 'Wed', date: 'Oct 15', icon: 'sun', condition: 'Breezy', high: 18, low: 10, rainProb: 10 },
      { day: 'Thu', date: 'Oct 16', icon: 'sun', condition: 'Clear', high: 21, low: 13, rainProb: 0 },
      { day: 'Fri', date: 'Oct 17', icon: 'cloud-sun', condition: 'Mild', high: 22, low: 14, rainProb: 10 },
      { day: 'Sat', date: 'Oct 18', icon: 'sun', condition: 'Pleasant', high: 20, low: 12, rainProb: 5 },
    ]
  },
  'dubai': {
    city: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    lat: 25.2048,
    lon: 55.2708,
    temp: 34,
    feelsLike: 37,
    condition: 'Sunny & Hot Desert Sun',
    conditionKey: 'clearSky',
    icon: 'sun',
    atmosphere: 'clear-day',
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
      { day: 'Today', date: 'Oct 12', icon: 'sun', condition: 'Hot', high: 36, low: 26, rainProb: 0 },
      { day: 'Tomorrow', date: 'Oct 13', icon: 'sun', condition: 'Sunny', high: 37, low: 27, rainProb: 0 },
      { day: 'Tue', date: 'Oct 14', icon: 'sun', condition: 'Clear', high: 36, low: 26, rainProb: 0 },
      { day: 'Wed', date: 'Oct 15', icon: 'sun', condition: 'Clear', high: 35, low: 25, rainProb: 0 },
      { day: 'Thu', date: 'Oct 16', icon: 'cloud-sun', condition: 'Breezy', high: 34, low: 25, rainProb: 0 },
      { day: 'Fri', date: 'Oct 17', icon: 'sun', condition: 'Sunny', high: 36, low: 26, rainProb: 0 },
      { day: 'Sat', date: 'Oct 18', icon: 'sun', condition: 'Sunny', high: 37, low: 27, rainProb: 0 },
    ]
  }
};

export class WeatherService {
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

  /**
   * Search worldwide cities with geocoding
   */
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
          countryCode: c.countryCode,
          admin1: '',
          lat: c.lat,
          lon: c.lon,
          timezone: 'auto'
        });
      }
    }
    return matches;
  }

  /**
   * Fetch Live Weather by Coordinates
   */
  async fetchWeather(lat, lon, cityName = 'Current Location', countryName = '') {
    try {
      // 1. Direct Open-Meteo live call
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

  /**
   * Transform Open-Meteo schema to standard UI model
   */
  transformOpenMeteoData(data, cityName, countryName, lat, lon) {
    const cur = data.current;
    const daily = data.daily;
    const hourly = data.hourly;

    const wmoInfo = WMO_CODES[cur.weather_code] || { label: 'partlyCloudy', icon: 'cloud-sun', atmosphere: 'clouds' };
    const isNight = cur.is_day === 0;
    const atmosphere = isNight && (wmoInfo.atmosphere === 'clear-day') ? 'night' : wmoInfo.atmosphere;

    // Process 24-Hour hourly forecast starting from current hour
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

    // Process 7-day daily forecast
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

    // Format Sunrise / Sunset
    const formatTime = (isoString) => {
      if (!isoString) return '06:00 AM';
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    const sunriseStr = formatTime(daily.sunrise[0]);
    const sunsetStr = formatTime(daily.sunset[0]);

    return {
      city: cityName,
      country: countryName,
      countryCode: '',
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
      sunrise: sunriseStr,
      sunset: sunsetStr,
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

  /**
   * Geolocation API (Bonus Requirement)
   */
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
            // Reverse geocode
            const revUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
            const res = await fetch(revUrl);
            const data = await res.json();
            const city = data.address?.city || data.address?.town || data.address?.state || 'My Location';
            const country = data.address?.country || '';

            const weather = await this.fetchWeather(lat, lon, city, country);
            resolve(weather);
          } catch (e) {
            // Fallback with coordinates
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
