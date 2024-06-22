interface roofLayersTypes {
  name: string;
  layerId: number;
  composition?: {
    name1: string;
    name2: string;
    name1Value?: number;
    name2Value?: number;
    scopeOfWork(
      squareMeters: number,
      lowerPoint: number,
      upperPoint: number
    ): void;
  };
}

export const roofLayers: roofLayersTypes[] = [
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
        let averageThickness = (((upperPoint - lowerPoint) / 3) * 2) / 100;
        let keramzitArea = squareMeters * averageThickness;
        let tape = squareMeters;
        this.name1Value = keramzitArea;
        this.name2Value = tape;
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
