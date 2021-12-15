const defaultPic = 'https://astelus.com/wp-content/viajes/Anubis-el-dios-egipcio-de-la-muerte.jpg';

class Job {
  name: string;

  title: string;

  company: string;

  description: string;

  recommendations: Array<Job>;

  phone: string;

  email: string;

  constructor(name = '', title = '', company = '', description = '', recommendations: Job[] = [], phone = '', email = '') {
    this.name = name;
    this.title = title;
    this.company = company;
    this.description = description;
    this.recommendations = recommendations;
    this.phone = phone;
    this.email = email;
  }
}

const fakeRec1 = new Job('Seba', 'Player', 'World of Darkness', '', [], '+56987665543', 'math@bla.com');
const fakeRec2 = new Job('Vere', 'Player', 'World of darkness', '', [], '+56923423463', 'art@bla.com');

const fakeJob1 = new Job('', 'Game Master', 'World of Darkness', 'Has run games for 3 consecutive years', [fakeRec1, fakeRec2]);

const fakeRec3 = new Job('Kaiser', 'Barber', 'Kayser BarberShop', '', [], '+56987665543', 'hair@bla.com');
const fakeRec4 = new Job('Michi', 'Chemist', 'UCCA', '', [], '+56923423463', 'bubbles@bla.com');

const fakeJob2 = new Job('', 'Coder', 'Independent', 'Has created a portfolio website', [fakeRec3, fakeRec4]);

export default defaultPic;
export { Job, fakeJob1, fakeJob2 };
