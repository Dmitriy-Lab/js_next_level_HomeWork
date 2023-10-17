"use strict";
/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const collection = {
  albums: [
    {
      title: "Super Trouper",
      artist: "Abba",
      year: "1980"
    },
    {
      title: "This Is War",
      artist: "30 Seconds to Mars",
      year: "2009"
    },
    {
      title: "Mutter",
      artist: "Rammstein",
      year: "2001"
    }
  ],
}

for (const value of collection.albums) {
  console.log(`${value.title} - ${value.artist} (${value.year})`);
}