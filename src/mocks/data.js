export const dataSource = {
  columns: ['list1', 'list2'],
  lists: {
    'list1': {
      id: 'list1',
      title: 'List-1',
      cards: ['card1-list1', 'card2-list1'],
    },
    'list2': {
      id: 'list2',
      title: 'List-2',
      cards: ['card1-list2'],
    },
  },
  cards: {
    'card1-list1': {
      id: 'card1-list1',
      title: 'Card 1 of List 1',
      description: 'Card 1 of list 1',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    },
    'card2-list1': {
      id: 'card2-list1',
      title: 'Card 2 of List 1',
      description: 'Card 2 of list 1',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    },
    'card1-list2': {
      id: 'card1-list2',
      title: 'Card 1 of List 2',
      description: 'Card 1 of list 2',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    },
  }
};