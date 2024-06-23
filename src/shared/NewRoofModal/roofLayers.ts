export const roofLayers: any = [
  {
    name: 'Уклонообразующий слой из керамзита',
    layerId: 1,
    composition: {
      material1: '',
      material2: '',
      scopeOfWork(
        squareMeters: number,
        lowerPoint: number,
        upperPoint: number
      ) {
        let averageThickness = (((upperPoint - lowerPoint) / 3) * 2) / 100;
        let keramzitArea = squareMeters * averageThickness;
        let tape = squareMeters;
        this.material1 = 'Керамзит - ' + keramzitArea.toString() + ' м3';
        this.material2 = 'Плёнка полиэтиленовая - ' + tape.toString() + ' м2';
      },
    },
  },
  {
    name: 'Уклонообразующий слой из раствора/бетона/керамзитобетона',
    layerId: 2,
    composition: {
      material1: '',
      material2: '',
      material3: '',
      scopeOfWork(
        squareMeters: number,
        lowerPoint: number,
        upperPoint: number
      ) {
        let averageThickness = (((upperPoint - lowerPoint) / 3) * 2) / 100;
        let slopeArea = squareMeters * averageThickness;
        let reinforcingMesh = squareMeters / (1.8 * 2.3);
        let retainers = squareMeters * 2.5;
        this.material1 = 'Раствор - ' + slopeArea.toString() + ' м3';
        this.material2 =
          'Армирующая сетка - ' + reinforcingMesh.toString() + ' м2';
        this.material3 = 'Фиксаторы - ' + retainers.toString() + ' шт';
      },
    },
  },
  {
    name: 'Стяжка',
    layerId: 3,
    composition: {
      material1: '',
      material2: '',
      material3: '',
      scopeOfWork(squareMeters: number) {
        let reinforcingMesh = squareMeters / (1.8 * 2.3);
        let retainers = squareMeters * 2.5;
        let screed = squareMeters * 0.06;
        this.material1 =
          'Армирующая сетка - ' + reinforcingMesh.toString() + ' м2';
        this.material2 = 'Фиксаторы - ' + retainers.toString() + ' шт';
        this.material3 = 'Стяжка - ' + screed.toString() + ' м2';
      },
    },
  },
  { name: 'ХЦЛ', layerId: 4 },
  { name: 'Водосточная воронка', layerId: 5 },
  {
    name: 'Гидроизоляция',
    layerId: 6,
    composition: {
      material1: '',
      material2: '',
      scopeOfWork(squareMeters: number) {
        let primer = squareMeters * 0.25;
        let waterproofing = squareMeters / 8.75;
        this.material1 = 'Праймер - ' + primer.toString() + ' л';
        this.material2 =
          'Гидроизоляция 1 слой - ' + waterproofing.toString() + ' рул.';
      },
    },
  },
  { name: 'Утеплитель', layerId: 7 },
  {
    name: 'Балластный слой',
    layerId: 8,
    composition: {
      material1: '',
      material2: '',
      scopeOfWork(squareMeters: number) {
        let rubble = squareMeters * 0.05;
        let Geotextile = squareMeters;
        this.material1 = 'Щебень - ' + rubble.toString() + ' м3';
        this.material2 = 'Геотекстиль - ' + Geotextile.toString() + ' м2';
      },
    },
  },
];

// <Typography
//   sx={{ fontSize: 14 }}
//   color="text.secondary"
//   gutterBottom
//   key={item.layerId}
// >
//   {item.composition
//     ? item.composition.name1 + '  ' + item.composition.name1Value
//     : item.name}
//   {item.composition
//     ? item.composition.name2 + ' ' + item.composition.name2Value
//     : null}
// </Typography>;
