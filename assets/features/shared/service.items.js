var itemService = [function () {

  var items = [
    { id: 1, name: 'Wooden chest', time: 0.5, materials: [{ name: 'Wood', amount: 4 }] },
    { id: 2, name: 'Iron chest', time: 0.5, materials: [{ name: 'Iron plate', amount: 8 }], type: 'container', yield: 1, physical: true, handmade: true },
    { id: 3, name: 'Steel chest', time: 0.5, materials: [{ name: 'Steel plate', amount: 8 }], type: 'container', yield: 1, physical: true, handmade: true },
    { id: 4, name: 'Smart chest', time: 0.5, materials: [{ name: 'Steel chest', amount: 1 }, { name: 'Electronic circuit', amount: 1 }], type: 'container', yield: 1, physical: true, handmade: true },
    { id: 5, name: 'Storage tank', time: 0.5, materials: [{ name: 'Iron plate', amount: 20 }, { name: 'Steel plate', amount: 5 }], type: 'container', yield: 1, physical: true, handmade: true },
    { id: 6, name: 'Transport belt', time: 0.5, materials: [{ name: 'Iron plate', amount: 1 }, { name: 'Iron gear wheel', amount: 1 }], type: 'belt', yield: 2, physical: true, handmade: true },
    { id: 7, name: 'Fast transport belt', time: 0.5, materials: [{ name: 'Transport belt', amount: 1 }, { name: 'Iron gear wheel', amount: 5 }], type: 'belt', yield: 1, physical: true, handmade: true },
    { id: 8, name: 'Express transport belt', time: 0.5, materials: [{ name: 'Fast transport belt', amount: 1 }, { name: 'Iron gear wheel', amount: 5 }, { name: 'Lubricant', amount: 2 }], type: 'belt', yield: 1, physical: true, handmade: true },
  ];

  var service = {
    // gets an item by name or Id
    get: function (identifier) {

    }

  };

  return service;

}];