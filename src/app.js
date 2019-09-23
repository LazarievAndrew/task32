// Переделать задание task29 используя webpack

///////////////////////////////////////////////////////////////////////////////////
// task29

// Dog API

// Доделываем страничку с собачками.

// API - https://dog.ceo/dog-api/documentation/breed (тоже что и было на уроке)
// добавляем верстку
// создаем input type search, для поиска породы
// полученный список пород преобразовываем в одномерный массив строк, то есть:
// 	если у нас была вот такая структура в ответе:
// 			{
//     	     "mastiff": [
//                  "bull",
//                  "english",
//                  "tibetan"
//              ],
// 			"mexicanhairless": [],
// 			}
//     на выходе должны получить:
//       ["mastiff", "mexicanhairless"]
//  при клике/выборе одной из пород показать заголовок с названием породы
// при выборе породы запросить все картинки и отобразить их в слайдере
// если у породы есть виды как например у mastiff("bull",  "english",  "tibetan"), 
// отобразить селект с выбором вида и только после выбора вида запрашивать картинки и рисовать слайдер.
///////////////////////////////////////////////////////////////////////////////////////////////////////


import { makeRequest } from './scripts/makeRequest'
import { createList } from './scripts/createList'
import { eventAction } from './scripts/eventAction'
import { searchInput } from './scripts/searchInput'
import { getOptionBreed } from './scripts/getOptionBreed'


makeRequest('https://dog.ceo/api/breeds/list/all')
    .then(res => createList(Object.keys(res.message), 'list', "breed", 'li'));

eventAction('input', '#search', searchInput);

eventAction('change', '.sub-breed', getOptionBreed);