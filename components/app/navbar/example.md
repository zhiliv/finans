### Пример использования:
  `menu: [
    { name: 'Главная', href: '/', icon: 'Statistics' },
    { name: 'Нажать', href: '/statistic3' },
    { name: 'Статистика1', href: '/statistic6', icon: 'Statistics' },
    {
      name: 'Клик',
      click: () => {
        alert(1)
      },
    },
    {
      name: 'Кликстер',
      icon: 'Statistics',
      click: () => {
        alert(1)
      },
    },
    {
      name: 'Офферы',
      type: 'dropdown',
      icon: 'Statistics',
      list: [
            { name: 'Новый', click: () => alert(2) },
            { name: 'Старый', href: '/' },
          ],
        },
      ], // меню`