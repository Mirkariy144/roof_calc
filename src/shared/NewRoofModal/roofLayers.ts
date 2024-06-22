export const roofLayers = [
  {
    name: 'Уклонообразующий слой из керамзита',
    layerId: 1,
    composition: {
      name1: 'Керамзит',
      name2: 'Плёнка полиэтиленовая 200мкм',
      scopeOfWork(
        squareMeters: number,
        lowerPoint: number,
        upperPoint: number
      ) {
        let averageThickness = ((upperPoint - lowerPoint) / 3) * 2;
        let keramzitArea = squareMeters * averageThickness;
        let tape = squareMeters;
        return { keramzitArea, tape };
      },
    },
  },
  {
    name: 'Уклонообразующий слой из раствора/бетона/керамзитобетона',
    layerId: 2,
  },
  { name: 'Стяжка', layerId: 3 },
  { name: 'ХЦЛ', layerId: 4 },
  { name: 'Водосточная воронка', layerId: 5 },
  { name: 'Гидроизоляция', layerId: 6 },
  { name: 'Утеплитель', layerId: 7 },
  { name: 'Балластный слой', layerId: 8 },
];
