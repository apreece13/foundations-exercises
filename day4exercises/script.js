// In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

var temperature=75;
var conditions="clouuuuudy";
var sunriseTime="7:00 AM";
var sunsetTime="7:45 PM";

console.log(temperature,conditions,sunriseTime,sunsetTime);

weatherSentence = `It's currently ${temperature} and ${conditions}. The sun rose at ${sunriseTime} and will set at ${sunsetTime}.`;

console.log(weatherSentence);