import { v4 as uuid } from 'uuid';

const mockData =  [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    title: 'Dropbox',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    title: 'Medium Corporation',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    title: 'Slack',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    title: 'Lyft',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    title: 'GitHub',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    title: 'Squarespace',
    totalDownloads: '835'
  }
];
export default mockData;
